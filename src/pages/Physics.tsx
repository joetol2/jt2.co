import ProjectLayout from "@/components/ProjectLayout";
import PhysicsBackground from "@/components/PhysicsBackground";

const Physics = () => (
  <ProjectLayout slug="physics">
    <div className="px-4 pt-8 text-center">
      <h1 className="text-2xl font-bold tracking-tight md:text-4xl">Zero-G Physics</h1>
      <p className="mt-2 text-xs text-white/60">Drag and throw the shapes. Click the rectangle to toggle gravity.</p>
    </div>
    <div className="mt-6 border-t border-white/10" style={{ background: "linear-gradient(to top right, #016fb5, #012b62)" }}>
      <PhysicsBackground height="70vh" />
    </div>
  </ProjectLayout>
);

export default Physics;
