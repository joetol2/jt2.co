import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import PageNav from "@/components/PageNav";
import Footer from "@/components/Footer";
import FizxCanvas from "@/components/FizxCanvas";
import NotFound from "@/pages/NotFound";
import { reviewProjects } from "@/data/projects";

const Review = () => {
  const { slug } = useParams();
  const project = reviewProjects.find((p) => p.slug === slug);
  const [resetKey, setResetKey] = useState(0);
  if (!project) return <NotFound />;

  return (
    <main className="min-h-screen">
      <PageNav />
      <section className="py-16 sm:py-20 border-t border-border">
        <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-20">
          <p className="text-sm font-heading tracking-[0.3em] uppercase text-muted-foreground mb-6">For review</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading font-semibold tracking-tight leading-[1.15] mb-4">
            {project.title}
          </h1>
          <p className="text-base text-white/70 leading-relaxed mb-10">{project.tagline}. fizx (c) 2016 Dan Miller.</p>
          <FizxCanvas key={`${project.dir}-${resetKey}`} dir={project.dir} transparent={project.dir === "fizx2"} />
          <div className="flex items-center justify-between mt-4">
            <p className="text-sm text-muted-foreground">Drag objects to interact.</p>
            <div className="flex items-center gap-6">
              <button
                onClick={() => setResetKey((k) => k + 1)}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                Reset
              </button>
              <Link to="/lab" className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-300">
                Back to the lab
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Review;
