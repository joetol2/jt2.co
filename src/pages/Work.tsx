import { useParams } from "react-router-dom";
import PageNav from "@/components/PageNav";
import Footer from "@/components/Footer";
import CaseCard from "@/components/CaseCard";
import WorkNav from "@/components/WorkNav";
import { Section, Label } from "@/components/Section";
import NotFound from "@/pages/NotFound";
import { caseStudies, categories } from "@/data/content";

const Work = () => {
  const { category } = useParams();
  const cat = categories.find((c) => c.slug === category);
  if (category && !cat) return <NotFound />;
  const shown = cat ? [cat] : categories;

  return (
    <main className="min-h-screen">
      <PageNav />
      <div className="px-8 sm:px-12 lg:px-20 pt-16 pb-12 max-w-6xl mx-auto">
        <p className="animate-fade-up text-sm font-heading tracking-[0.3em] uppercase text-white/50 mb-6">
          Work
        </p>
        <h1 className="animate-fade-up text-4xl sm:text-5xl font-heading font-semibold tracking-tight leading-[1.1] mb-6">
          {cat ? cat.label : "Almost thirty years of new media"}
        </h1>
        <p className="animate-fade-up-delay-2 text-lg text-white/80 leading-relaxed max-w-2xl">
          {cat ? cat.blurb : "Streaming platforms, interactive TV, advertising products, AI tools and robots."}
        </p>
      </div>
      <WorkNav />
      {shown.map((c, i) => (
        <Section key={c.slug} dark={!cat && i % 2 === 1}>
          {!cat && (
            <div className="mb-8">
              <Label>{c.label}</Label>
              <p className="text-base text-white/70 max-w-2xl">{c.blurb}</p>
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies
              .filter((s) => s.category === c.slug)
              .map((s) => (
                <CaseCard key={s.slug} study={s} />
              ))}
          </div>
        </Section>
      ))}
      <Footer />
    </main>
  );
};

export default Work;
