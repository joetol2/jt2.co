import PageNav from "@/components/PageNav";
import Footer from "@/components/Footer";
import ReviewSection from "@/components/ReviewSection";
import ProjectCard from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { projects } from "@/data/projects";

const Work = () => (
  <main className="min-h-screen">
    <PageNav />
    <div className="px-8 sm:px-12 lg:px-20 pt-16 pb-12 max-w-6xl mx-auto">
      <p className="animate-fade-up text-sm font-heading tracking-[0.3em] uppercase text-white/50 mb-6">Work</p>
      <h1 className="animate-fade-up text-4xl sm:text-5xl font-heading font-semibold tracking-tight leading-[1.1] mb-6">
        Canvas experiments
      </h1>
      <p className="animate-fade-up-delay-2 text-lg text-white/80 leading-relaxed max-w-2xl">
        Interactive pieces that run live in the browser. Each one is a small, self-contained engine.
      </p>
    </div>
    <Section>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>
    </Section>
    <ReviewSection />

    <Footer />
  </main>
);

export default Work;
