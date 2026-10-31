import { useParams } from "react-router-dom";
import PageNav from "@/components/PageNav";
import Footer from "@/components/Footer";
import CaseCard from "@/components/CaseCard";
import ProjectCard from "@/components/ProjectCard";
import ReviewSection from "@/components/ReviewSection";
import LabNav from "@/components/LabNav";
import { Section, Label } from "@/components/Section";
import NotFound from "@/pages/NotFound";
import { caseStudies, labCategories } from "@/data/content";
import { projects } from "@/data/projects";

const interactive = {
  slug: "interactive",
  label: "Interactive",
  blurb: "Experiments in motion, physics and play, drawn frame by frame. Open one to play with it.",
};

// Tab order: Research, Experiments, Interactive, Prototypes.
const tabs = [labCategories[0], labCategories[1], interactive, labCategories[2]];

const Lab = () => {
  const { category } = useParams();
  const tab = tabs.find((t) => t.slug === category);
  if (category && !tab) return <NotFound />;
  const shown = tab ? [tab] : tabs;

  return (
    <main className="min-h-screen">
      <PageNav />
      <div className="px-8 sm:px-12 lg:px-20 pt-16 pb-12 max-w-6xl mx-auto">
        <p className="animate-fade-up text-sm font-heading tracking-[0.3em] uppercase text-white/50 mb-6">The lab</p>
        <h1 className="animate-fade-up text-4xl sm:text-5xl font-heading font-semibold tracking-tight leading-[1.1] mb-6">
          {tab ? tab.label : "Research, experiments and things I build to learn"}
        </h1>
        <p className="animate-fade-up-delay-2 text-lg text-white/80 leading-relaxed max-w-2xl">
          {tab ? tab.blurb : "Independent work, separate from client projects."}
        </p>
      </div>
      <LabNav />
      {shown.map((t, i) => {
        const studies = caseStudies.filter((c) => c.category === t.slug);
        return (
          <div key={t.slug}>
            <Section dark={!tab && i % 2 === 1}>
              {!tab && (
                <div className="mb-8">
                  <Label>{t.label}</Label>
                  <p className="text-base text-white/70 max-w-2xl">{t.blurb}</p>
                </div>
              )}
              {t.slug === "interactive" ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((p, n) => (
                    <ProjectCard key={p.slug} project={p} index={n} />
                  ))}
                </div>
              ) : studies.length ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {studies.map((s) => (
                    <CaseCard key={s.slug} study={s} />
                  ))}
                </div>
              ) : (
                <p className="text-sm text-white/50">Coming soon.</p>
              )}
            </Section>
            {t.slug === "interactive" && tab && <ReviewSection />}
          </div>
        );
      })}
      <Footer />
    </main>
  );
};

export default Lab;
