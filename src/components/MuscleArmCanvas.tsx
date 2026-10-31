import { useEffect, useRef } from "react";

// A browser port of the 2-DOF soft arm from github.com/joetol2/efm-muscle-sim:
// four electrofluidic fiber muscles (two antagonistic pairs) drive a shoulder
// and elbow. Same muscle, joint and IK + PD controller math as the Python
// model, stepped at its 0.02 s timestep.

const DT = 0.02;
const L1 = 0.3;
const L2 = 0.24;
const REACH = L1 + L2;

type JointSpec = { r: number; inertia: number; damping: number; min: number; max: number; kp: number; kd: number };
const SHOULDER: JointSpec = { r: 0.03, inertia: 0.035, damping: 0.18, min: -1.2, max: 1.8, kp: 2.4, kd: 0.25 };
const ELBOW: JointSpec = { r: 0.022, inertia: 0.018, damping: 0.13, min: 0, max: 2.35, kp: 1.7, kd: 0.18 };

export type Settings = { responseTime: number; bundles: number; autoDemo: boolean };
export const DEFAULTS: Settings = { responseTime: 0.3, bundles: 6, autoDemo: true };

type Muscle = { act: number; len: number };
type Joint = { q: number; w: number; flex: Muscle; ext: Muscle };

const REST = 0.1;
const MAX_STRAIN = 0.2;
const MUSCLE_DAMPING = 0.05;

const newMuscle = (): Muscle => ({ act: 0, len: REST });
const newJoint = (q: number): Joint => ({ q, w: 0, flex: newMuscle(), ext: newMuscle() });
const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));

// ElectroFluidicMuscle.step: first-order activation lag, force from activation
// plus a small damping term on the length change.
const stepMuscle = (m: Muscle, u: number, s: Settings) => {
  m.act = clamp(m.act + (DT / s.responseTime) * (clamp(u, 0, 1) - m.act), 0, 1);
  const prev = m.len;
  m.len = Math.max(REST * (1 - m.act * MAX_STRAIN), REST * 0.75);
  const v = (m.len - prev) / DT;
  return Math.max(0, m.act * s.bundles - MUSCLE_DAMPING * v);
};

// AntagonisticJoint.step
const stepJoint = (j: Joint, spec: JointSpec, uf: number, ue: number, s: Settings) => {
  const torque = spec.r * (stepMuscle(j.flex, uf, s) - stepMuscle(j.ext, ue, s));
  j.w += ((torque - spec.damping * j.w) / spec.inertia) * DT;
  j.q += j.w * DT;
  if (j.q <= spec.min || j.q >= spec.max) {
    j.q = clamp(j.q, spec.min, spec.max);
    j.w = 0;
  }
};

const ik = (x: number, y: number) => {
  const c2 = clamp((x * x + y * y - L1 * L1 - L2 * L2) / (2 * L1 * L2), -0.95, 0.95);
  const q2 = Math.acos(c2);
  return [Math.atan2(y, x) - Math.atan2(L2 * Math.sin(q2), L1 + L2 * Math.cos(q2)), q2];
};

const pd = (err: number, vel: number, spec: JointSpec) => {
  const effort = spec.kp * err - spec.kd * vel;
  return effort >= 0 ? [clamp(effort, 0, 1), 0] : [0, clamp(-effort, 0, 1)];
};

const fk = (q1: number, q2: number) => {
  const ex = L1 * Math.cos(q1);
  const ey = L1 * Math.sin(q1);
  return { ex, ey, wx: ex + L2 * Math.cos(q1 + q2), wy: ey + L2 * Math.sin(q1 + q2) };
};

// Random reachable target inside the arm's joint limits.
const randomTarget = () => {
  const q1 = SHOULDER.min + 0.3 + Math.random() * (SHOULDER.max - SHOULDER.min - 0.6);
  const q2 = 0.35 + Math.random() * 1.6;
  const { wx, wy } = fk(q1, q2);
  return { x: wx, y: wy };
};

export const FLEX = "251,191,36"; // amber
export const EXT = "56,189,248"; // sky

const ArmCanvas = ({
  settings,
  resetKey = 0,
  className = "h-[65vh]",
}: {
  settings: Settings;
  resetKey?: number;
  className?: string;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const settingsRef = useRef(settings);
  settingsRef.current = settings;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const shoulder = newJoint(0.2);
    const elbow = newJoint(0.55);
    let target = { x: 0.36, y: 0.25 };
    let lastUserAt = -Infinity;
    let nextDemoAt = 2.5;
    let simTime = 0;
    const trail: { x: number; y: number }[] = [];

    let w = 0;
    let h = 0;
    let scale = 1;
    let bx = 0;
    let by = 0;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // Base sits left of center; the arm's reach fits the shorter side.
      scale = Math.min(w * 0.55, h * 0.52) / REACH;
      bx = w * 0.38;
      by = h * 0.58;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const toWorld = (px: number, py: number) => ({ x: (px - bx) / scale, y: (by - py) / scale });
    const toPx = (x: number, y: number) => [bx + x * scale, by - y * scale] as const;

    const setTarget = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const p = toWorld(e.clientX - rect.left, e.clientY - rect.top);
      // Keep the target within reach so the IK has an answer.
      const d = Math.hypot(p.x, p.y);
      const k = d > REACH * 0.98 ? (REACH * 0.98) / d : d < 0.08 ? 0.08 / Math.max(d, 1e-6) : 1;
      target = { x: p.x * k, y: p.y * k };
      lastUserAt = simTime;
    };
    let dragging = false;
    const onDown = (e: PointerEvent) => {
      dragging = true;
      setTarget(e);
    };
    const onMove = (e: PointerEvent) => dragging && setTarget(e);
    const onUp = () => (dragging = false);
    canvas.addEventListener("pointerdown", onDown);
    canvas.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);

    const muscleBand = (x1: number, y1: number, x2: number, y2: number, side: number, act: number, rgb: string) => {
      // A band offset to one side of the link that thickens and glows as it contracts.
      const len = Math.hypot(x2 - x1, y2 - y1);
      const nx = (-(y2 - y1) / len) * side;
      const ny = ((x2 - x1) / len) * side;
      const off = 9 + act * 4;
      const inset = 0.12;
      ctx.strokeStyle = `rgba(${rgb},${0.25 + act * 0.75})`;
      ctx.lineWidth = 3 + act * 7;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(x1 + (x2 - x1) * inset + nx * off, y1 + (y2 - y1) * inset + ny * off);
      ctx.lineTo(x1 + (x2 - x1) * (1 - inset) + nx * off, y1 + (y2 - y1) * (1 - inset) + ny * off);
      ctx.stroke();
    };

    let raf = 0;
    let last = performance.now();
    let acc = 0;
    const frame = (now: number) => {
      const s = settingsRef.current;
      acc += Math.min((now - last) / 1000, 0.1);
      last = now;
      while (acc >= DT) {
        acc -= DT;
        simTime += DT;
        if (s.autoDemo && simTime - lastUserAt > 4 && simTime >= nextDemoAt) {
          target = randomTarget();
          nextDemoAt = simTime + 3;
        }
        const [q1d, q2d] = ik(target.x, target.y);
        const [sf, se] = pd(q1d - shoulder.q, shoulder.w, SHOULDER);
        const [ef, ee] = pd(q2d - elbow.q, elbow.w, ELBOW);
        stepJoint(shoulder, SHOULDER, sf, se, s);
        stepJoint(elbow, ELBOW, ef, ee, s);
        const { wx, wy } = fk(shoulder.q, elbow.q);
        trail.push({ x: wx, y: wy });
        if (trail.length > 90) trail.shift();
      }

      ctx.clearRect(0, 0, w, h);

      // Reach envelope and floor grid.
      ctx.strokeStyle = "rgba(255,255,255,0.06)";
      ctx.lineWidth = 1;
      for (let r = 0.1; r <= REACH + 0.001; r += 0.1) {
        ctx.beginPath();
        ctx.arc(bx, by, r * scale, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Wrist trail.
      ctx.beginPath();
      trail.forEach((p, i) => {
        const [x, y] = toPx(p.x, p.y);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.strokeStyle = "rgba(200,220,255,0.35)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Target.
      const [tx, ty] = toPx(target.x, target.y);
      ctx.strokeStyle = "rgba(255,255,255,0.8)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(tx, ty, 10, 0, Math.PI * 2);
      ctx.moveTo(tx - 16, ty);
      ctx.lineTo(tx + 16, ty);
      ctx.moveTo(tx, ty - 16);
      ctx.lineTo(tx, ty + 16);
      ctx.stroke();

      const { ex, ey, wx, wy } = fk(shoulder.q, elbow.q);
      const [x0, y0] = toPx(0, 0);
      const [x1, y1] = toPx(ex, ey);
      const [x2, y2] = toPx(wx, wy);

      // Muscles: flexors on one side of each link, extensors on the other.
      muscleBand(x0, y0, x1, y1, -1, shoulder.flex.act, FLEX);
      muscleBand(x0, y0, x1, y1, 1, shoulder.ext.act, EXT);
      muscleBand(x1, y1, x2, y2, -1, elbow.flex.act, FLEX);
      muscleBand(x1, y1, x2, y2, 1, elbow.ext.act, EXT);

      // Links and joints.
      ctx.strokeStyle = "rgba(235,242,255,0.95)";
      ctx.lineWidth = 6;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(x0, y0);
      ctx.lineTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      for (const [x, y, r] of [[x0, y0, 11], [x1, y1, 8], [x2, y2, 6]] as const) {
        ctx.fillStyle = "#05060a";
        ctx.strokeStyle = "rgba(235,242,255,0.95)";
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      }

      // Readout.
      const dist = Math.hypot(wx - target.x, wy - target.y);
      ctx.font = "12px ui-monospace, monospace";
      ctx.fillStyle = "rgba(255,255,255,0.6)";
      ctx.fillText(`distance to target ${(dist * 100).toFixed(1)} cm`, 16, h - 20);
      const bars: [string, number, string][] = [
        ["shoulder flex", shoulder.flex.act, FLEX],
        ["shoulder extend", shoulder.ext.act, EXT],
        ["elbow flex", elbow.flex.act, FLEX],
        ["elbow extend", elbow.ext.act, EXT],
      ];
      bars.forEach(([label, a, rgb], i) => {
        const y = 22 + i * 18;
        ctx.fillStyle = "rgba(255,255,255,0.5)";
        ctx.fillText(label, 16, y + 4);
        ctx.fillStyle = "rgba(255,255,255,0.08)";
        ctx.fillRect(130, y - 4, 100, 8);
        ctx.fillStyle = `rgba(${rgb},0.9)`;
        ctx.fillRect(130, y - 4, 100 * a, 8);
      });

      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      canvas.removeEventListener("pointerdown", onDown);
      canvas.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [resetKey]);

  return <canvas ref={canvasRef} className={`block w-full touch-none select-none cursor-crosshair ${className}`} />;
};

export default ArmCanvas;
