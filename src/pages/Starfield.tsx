import { useState } from "react";
import ProjectLayout from "@/components/ProjectLayout";
import SpeedField, { DEFAULTS, type Settings } from "@/components/SpeedField";

const Slider = ({
  label,
  value,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
}) => (
  <label className="flex flex-col gap-1 text-xs text-white/70">
    <span className="flex justify-between">
      <span>{label}</span>
      <span className="font-mono text-white">{value}</span>
    </span>
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="accent-white"
    />
  </label>
);

const Starfield = () => {
  const [settings, setSettings] = useState<Settings>(DEFAULTS);
  const set = <K extends keyof Settings>(key: K) => (v: Settings[K]) =>
    setSettings((s) => ({ ...s, [key]: v }));

  return (
    <ProjectLayout slug="starfield">
      {/* touch-none: dragging on the field steers the stars instead of scrolling the page */}
      <header className="relative flex h-[70vh] touch-none select-none items-center justify-center overflow-hidden">
        <SpeedField settings={settings} />
        <div className="relative text-center">
          <h1 className="text-2xl font-bold tracking-tight md:text-4xl">Starfield</h1>
          <p className="mt-2 text-xs text-white/60">Play with the controls below</p>
        </div>
      </header>

      <section className="border-t">
        <div className="mx-auto grid max-w-3xl gap-6 px-4 py-10 sm:grid-cols-2">
          <Slider label="Stars" value={settings.starCount} min={0} max={2000} step={10} onChange={set("starCount")} />
          <Slider label="Speed" value={settings.speed} min={0} max={40} step={0.5} onChange={set("speed")} />
          <Slider label="Field of view" value={settings.fov} min={32} max={512} step={1} onChange={set("fov")} />
          <Slider label="Trail clear (low = long trails)" value={settings.trail} min={0.02} max={1} step={0.01} onChange={set("trail")} />
          <label className="flex items-center justify-between text-xs text-white/70">
            <span>Star color</span>
            <input
              type="color"
              value={settings.color}
              onChange={(e) => set("color")(e.target.value)}
              className="h-8 w-14 cursor-pointer rounded bg-transparent"
            />
          </label>
          <label className="flex items-center gap-2 text-xs text-white/70">
            <input
              type="checkbox"
              checked={settings.followMouse}
              onChange={(e) => set("followMouse")(e.target.checked)}
              className="h-4 w-4 accent-white"
            />
            <span>Center follows mouse</span>
          </label>
          <button
            onClick={() => setSettings(DEFAULTS)}
            className="rounded border border-white/20 px-3 py-2 text-xs hover:bg-white/10"
          >
            Reset to defaults
          </button>
        </div>
      </section>
    </ProjectLayout>
  );
};

export default Starfield;
