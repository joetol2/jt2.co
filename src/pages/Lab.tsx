import { Link } from "react-router-dom";
import PageNav from "@/components/PageNav";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import ReviewSection from "@/components/ReviewSection";
import { Section } from "@/components/Section";
import { projects } from "@/data/projects";

const Lab = () => (
  <main className="min-h-screen">
    <PageNav />
    <div className="px-8 sm:px-12 lg:px-20 pt-16 pb-12 max-w-6xl mx-auto">
      <p className="animate-fade-up text-sm font-heading tracking-[0.3em] uppercase text-white/50 mb-6">The lab</p>
      <h1 className="animate-fade-up text-4xl sm:text-5xl font-heading font-semibold tracking-tight leading-[1.1] mb-6">
        Things that move, built on canvas
      </h1>
      <p className="animate-fade-up-delay-2 text-lg text-white/80 leading-relaxed max-w-2xl">
        Interactive experiments in motion, physics and play, drawn frame by frame with the Canvas API. Most started as
        ideas for the{" "}
        <Link to="/work/sim2real" className="underline underline-offset-4 decoration-white/40 hover:text-white">
          Sim2Real
        </Link>{" "}
        website. Open one to play with it.
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

export default Lab;
