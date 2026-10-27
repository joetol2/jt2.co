import PageNav from "@/components/PageNav";
import Footer from "@/components/Footer";
import CaseCard from "@/components/CaseCard";
import { Section } from "@/components/Section";
import { caseStudies } from "@/data/content";

const Work = () => (
  <main className="min-h-screen">
    <PageNav />
    <div className="px-8 sm:px-12 lg:px-20 pt-16 pb-12 max-w-6xl mx-auto">
      <p className="animate-fade-up text-sm font-heading tracking-[0.3em] uppercase text-white/50 mb-6">Work</p>
      <h1 className="animate-fade-up text-4xl sm:text-5xl font-heading font-semibold tracking-tight leading-[1.1] mb-6">
        Almost thirty years of new media
      </h1>
      <p className="animate-fade-up-delay-2 text-lg text-white/80 leading-relaxed max-w-2xl">
        Streaming platforms, interactive TV, advertising products, AI tools and robots. Newest first.
      </p>
    </div>
    <Section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {caseStudies.map((s) => (
          <CaseCard key={s.slug} study={s} />
        ))}
      </div>
    </Section>
    <Footer />
  </main>
);

export default Work;
