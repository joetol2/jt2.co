/* eslint-disable @typescript-eslint/no-explicit-any -- fizx is untyped legacy script on window globals */
import { useEffect, useRef } from "react";

const CANVAS_W = 1300;
const CANVAS_H = 950;

// fizx (c) 2016 Dan Miller. The scripts share globals and look up #canvas, so
// they are re-run on every mount: that way two fizx pages can each load their
// own copy (public/fizx, public/fizx2) without one inheriting the other's state.
export default function FizxCanvas({ dir, transparent = false }: { dir: string; transparent?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scaleRef = useRef(1);

  useEffect(() => {
    const w = window as any;

    w.ATOMS = [];
    w.BONDS = [];
    w.THINGS = [];
    w.CONTACTS = [];
    w.COLLIDES = [];
    w.LAYER_FILTERS = [["DEFAULT", "DEFAULT"]];

    const origAlert = window.alert;
    window.alert = () => {};

    const origSetInterval = window.setInterval;
    const intervalIds: number[] = [];
    (window as any).setInterval = function (fn: TimerHandler, delay?: number, ...args: unknown[]) {
      const id = origSetInterval(fn as TimerHandler, delay, ...args) as unknown as number;
      intervalIds.push(id);
      return id;
    };

    const loadScript = (src: string): Promise<void> =>
      new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.dataset.fizx = dir;
        script.onload = () => resolve();
        script.onerror = () => { console.warn("fizx: failed to load", src); resolve(); };
        document.head.appendChild(script);
      });

    const base = import.meta.env.BASE_URL;
    const v = "4";
    const scripts = ["fizx", "ball16", "ball23", "delaunay", "display_canvas", "test"].map(
      (name) => `${base}${dir}/${name}.js?v=${v}`,
    );

    let cancelled = false;
    (async () => {
      for (const src of scripts) {
        if (cancelled) return;
        await loadScript(src);
      }
      if (cancelled) return;
      // Start the sim while setInterval is still wrapped, so its timers are
      // tracked and cleared on unmount.
      if (typeof w.first_run === "function") w.first_run();
      window.alert = origAlert;
      (window as any).setInterval = origSetInterval;
    })();

    const updateScale = () => {
      if (!containerRef.current || !canvasRef.current) return;
      const scale = containerRef.current.clientWidth / CANVAS_W;
      scaleRef.current = scale;
      canvasRef.current.style.transform = `scale(${scale})`;
      containerRef.current.style.height = `${CANVAS_H * scale}px`;
    };

    const observer = new ResizeObserver(updateScale);
    if (containerRef.current) observer.observe(containerRef.current);
    updateScale();

    return () => {
      cancelled = true;
      observer.disconnect();
      document.querySelectorAll("script[data-fizx]").forEach((el) => el.remove());
      intervalIds.forEach((id) => clearInterval(id));
      window.alert = origAlert;
      (window as any).setInterval = origSetInterval;
      w.ATOMS = [];
      w.BONDS = [];
      w.THINGS = [];
      w.CONTACTS = [];
      w.COLLIDES = [];
      w.LAYER_FILTERS = [["DEFAULT", "DEFAULT"]];
    };
  }, [dir]);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const w = window as any;
    if (!w.nmouse || !canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const scale = scaleRef.current;
    w.nmouse.x = (e.clientX - rect.left) / scale;
    w.nmouse.y = CANVAS_H - (e.clientY - rect.top) / scale;
  };

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", overflow: "hidden", position: "relative" }}
    >
      <canvas
        ref={canvasRef}
        id="canvas"
        width={CANVAS_W}
        height={CANVAS_H}
        style={{ transformOrigin: "top left", display: "block", background: transparent ? "transparent" : undefined }}
        onMouseMove={handleMouseMove}
        onMouseDown={() => { const w = window as any; if (w.nmouse) w.nmouse.d = true; }}
        onMouseUp={() => { const w = window as any; if (w.nmouse) w.nmouse.d = false; }}
      />
    </div>
  );
}
