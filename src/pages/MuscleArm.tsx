import { useState } from "react";
import { Link } from "react-router-dom";
import ProjectLayout from "@/components/ProjectLayout";
import ArmCanvas, { DEFAULTS, EXT, FLEX, type Settings } from "@/components/MuscleArmCanvas";

const MuscleArm = () => {
  const [settings, setSettings] = useState<Settings>(DEFAULTS);
  const [resetKey, setResetKey] = useState(0);

  return (
    <ProjectLayout slug="muscle-arm">
      <div className="px-4 pt-8 text-center">
        <h1 className="text-2xl font-bold tracking-tight md:text-4xl">Muscle Arm</h1>
        <p className="mt-2 text-xs text-white/60">Click or drag to set a target. Four artificial muscles pull the arm there.</p>
        <Link
          to="/lab/efm-arm"
          className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs text-white/80 hover:border-white/50 hover:text-white transition-colors"
        >
          Part of my research project: <span className="font-semibold text-white">Teaching a muscle-powered arm to catch →</span>
        </Link>
      </div>
      <ArmCanvas settings={settings} resetKey={resetKey} />
      <section className="border-t">
        <div className="mx-auto grid max-w-3xl gap-6 px-4 py-10 sm:grid-cols-2">
          <label className="flex flex-col gap-1 text-xs text-white/70">
            <span className="flex justify-between">
              <span>Muscle response time</span>
              <span className="font-mono text-white">{settings.responseTime.toFixed(2)} s</span>
            </span>
            <input
              type="range"
              min={0.05}
              max={1.2}
              step={0.05}
              value={settings.responseTime}
              onChange={(e) => setSettings((s) => ({ ...s, responseTime: Number(e.target.value) }))}
              className="accent-white"
            />
          </label>
          <label className="flex flex-col gap-1 text-xs text-white/70">
            <span className="flex justify-between">
              <span>Fiber bundles per muscle</span>
              <span className="font-mono text-white">{settings.bundles}</span>
            </span>
            <input
              type="range"
              min={1}
              max={20}
              step={1}
              value={settings.bundles}
              onChange={(e) => setSettings((s) => ({ ...s, bundles: Number(e.target.value) }))}
              className="accent-white"
            />
          </label>
          <label className="flex items-center gap-2 text-xs text-white/70">
            <input
              type="checkbox"
              checked={settings.autoDemo}
              onChange={(e) => setSettings((s) => ({ ...s, autoDemo: e.target.checked }))}
              className="h-4 w-4 accent-white"
            />
            <span>Pick new targets when idle</span>
          </label>
          <button
            onClick={() => {
              setSettings(DEFAULTS);
              setResetKey((k) => k + 1);
            }}
            className="rounded border border-white/20 px-3 py-2 text-xs hover:bg-white/10"
          >
            Reset
          </button>
          <p className="sm:col-span-2 text-xs text-white/50 leading-relaxed">
            <span style={{ color: `rgb(${FLEX})` }}>Amber</span> bands are flexors and{" "}
            <span style={{ color: `rgb(${EXT})` }}>blue</span> bands are extensors. They thicken as they contract. Slow
            the response time and watch the arm overshoot.
          </p>
        </div>
      </section>
    </ProjectLayout>
  );
};

export default MuscleArm;
