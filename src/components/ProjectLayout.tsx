import React from "react";
import { Link } from "react-router-dom";
import PageNav from "@/components/PageNav";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

// Wraps each canvas piece: the site nav on the pieces' near-black stage, then
// a short write-up and links to the neighbouring projects.
const ProjectLayout = ({ slug, children }: { slug: string; children: React.ReactNode }) => {
  const i = projects.findIndex((p) => p.slug === slug);
  const project = projects[i];
  const prev = projects[(i - 1 + projects.length) % projects.length];
  const next = projects[(i + 1) % projects.length];

  return (
    <main className="min-h-screen">
      <div className="bg-[#05060a] text-white">
        <PageNav />
        {children}
      </div>

      <section className="py-16 sm:py-20 border-t border-border" style={{ backgroundColor: "#012b62" }}>
        <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-20 grid gap-10 md:grid-cols-[2fr_1fr]">
          <div>
            <p className="text-sm font-heading tracking-[0.3em] uppercase text-muted-foreground mb-6">About this piece</p>
            <h2 className="text-2xl sm:text-3xl font-heading font-semibold tracking-tight leading-[1.15] mb-4">{project.tagline}</h2>
            <p className="text-base text-white/70 leading-relaxed mb-6">{project.description}</p>
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-block mb-6 text-xs font-heading tracking-[0.2em] uppercase text-white/70 hover:text-white underline underline-offset-4 decoration-white/30"
              >
                View the code on GitHub
              </a>
            )}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="text-[10px] font-heading tracking-[0.15em] uppercase text-white/50 border border-white/10 rounded px-2 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 md:items-end md:justify-end">
            <Link to={`/lab/${prev.slug}`} className="text-xs font-heading tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300">
              ← {prev.title}
            </Link>
            <Link to={`/lab/${next.slug}`} className="text-xs font-heading tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300">
              {next.title} →
            </Link>
            <Link to="/lab" className="text-xs font-heading tracking-[0.2em] uppercase text-foreground hover:opacity-70 transition-opacity">
              Back to the lab
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ProjectLayout;
