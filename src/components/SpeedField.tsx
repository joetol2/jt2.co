import { useEffect, useRef } from "react";

// A "warp speed" starfield canvas, modeled on the canvas effect in the
// sharedsapience.com header (reconstructed from its markup, not their source).
// Fills its positioned parent; the vanishing point follows the pointer.

export type Settings = {
  starCount: number;
  speed: number;
  fov: number;
  trail: number; // 0 = long trails, 1 = no trails
  color: string;
  followMouse: boolean;
};

export const DEFAULTS: Settings = {
  starCount: 220,
  speed: 1.5,
  fov: 266,
  trail: 0.11,
  color: "#c8dcff",
  followMouse: true,
};

// How quickly the center eases toward its target each frame (0-1).
const CENTER_EASE = 0.08;

type Star = { x: number; y: number; z: number; pz: number };

const hexToRgb = (hex: string) => {
  const n = parseInt(hex.slice(1), 16);
  return `${(n >> 16) & 255},${(n >> 8) & 255},${n & 255}`;
};

// `clear` is the RGB the canvas fades toward each frame; it sets the background
// the trails dissolve into.
const SpeedField = ({ settings, clear = "5,6,10" }: { settings: Settings; clear?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const settingsRef = useRef(settings);
  settingsRef.current = settings;
  const clearRef = useRef(clear);
  clearRef.current = clear;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let w = 0;
    let h = 0;
    const stars: Star[] = [];
    let running = true;
    let raf = 0;
    // Vanishing point the stars fly out of, and where it's easing toward.
    // null target = no pointer over the header, so ease back to the middle.
    let cx = 0;
    let cy = 0;
    let target: { x: number; y: number } | null = null;

    const spawn = (s: Star = { x: 0, y: 0, z: 0, pz: 0 }) => {
      s.x = (Math.random() - 0.5) * w;
      s.y = (Math.random() - 0.5) * h;
      s.z = Math.random() * w;
      s.pz = s.z;
      return s;
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (!target) {
        cx = w / 2;
        cy = h / 2;
      }
    };

    const frame = () => {
      const { starCount, speed, fov, trail, color, followMouse } = settingsRef.current;

      const tx = followMouse && target ? target.x : w / 2;
      const ty = followMouse && target ? target.y : h / 2;
      cx += (tx - cx) * CENTER_EASE;
      cy += (ty - cy) * CENTER_EASE;

      // Keep the star pool in sync with the slider.
      while (stars.length < starCount) stars.push(spawn());
      if (stars.length > starCount) stars.length = starCount;

      const v = reduce.matches ? Math.min(speed, 0.5) : speed;
      canvas.dataset.motion = reduce.matches ? "reduced" : "active";

      // Translucent clear leaves motion trails behind each star.
      ctx.fillStyle = `rgba(${clearRef.current},${trail})`;
      ctx.fillRect(0, 0, w, h);

      const rgb = hexToRgb(color);
      for (const s of stars) {
        s.pz = s.z;
        s.z -= v;
        if (s.z < 1) {
          spawn(s);
          s.z = s.pz = w;
          continue;
        }

        const k = fov / s.z;
        const pk = fov / s.pz;
        const x = s.x * k + cx;
        const y = s.y * k + cy;
        const px = s.x * pk + cx;
        const py = s.y * pk + cy;
        if (x < 0 || x > w || y < 0 || y > h) {
          spawn(s);
          continue;
        }

        const t = Math.max(0, 1 - s.z / w); // closer = brighter, thicker
        ctx.strokeStyle = `rgba(${rgb},${t})`;
        ctx.lineWidth = t * 2;
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(x, y);
        ctx.stroke();
      }

      if (running) raf = requestAnimationFrame(frame);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // Pause when the header scrolls offscreen.
    const io = new IntersectionObserver(([entry]) => {
      const was = running;
      running = entry.isIntersecting;
      if (running && !was) raf = requestAnimationFrame(frame);
    });
    io.observe(canvas);

    // Track the pointer over the whole header (the title sits above the canvas).
    const area = canvas.parentElement ?? canvas;
    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      target = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onLeave = () => {
      target = null;
    };
    // Touch: steer while the finger is down, ease back to center on release.
    const onUp = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") target = null;
    };
    area.addEventListener("pointerdown", onMove);
    area.addEventListener("pointermove", onMove);
    area.addEventListener("pointerleave", onLeave);
    area.addEventListener("pointerup", onUp);
    area.addEventListener("pointercancel", onLeave);

    raf = requestAnimationFrame(frame);

    return () => {
      running = false;
      area.removeEventListener("pointerdown", onMove);
      area.removeEventListener("pointermove", onMove);
      area.removeEventListener("pointerleave", onLeave);
      area.removeEventListener("pointerup", onUp);
      area.removeEventListener("pointercancel", onLeave);
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
      role="presentation"
      data-motion="active"
    />
  );
};

export default SpeedField;
