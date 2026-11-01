import { Link, useParams } from "react-router-dom";
import PageNav from "@/components/PageNav";
import Footer from "@/components/Footer";
import CaseCard from "@/components/CaseCard";
import WorkNav from "@/components/WorkNav";
import RoleBlock from "@/components/RoleBlock";
import { Section, Label } from "@/components/Section";
import NotFound from "@/pages/NotFound";
import { caseStudies, categories, featured, isLab } from "@/data/content";
import { employers } from "@/data/experience";

const workStudies = caseStudies.filter((c) => !isLab(c.category));

const Header = ({ label, title, text }: { label: string; title: string; text: string }) => (
  <div className="px-8 sm:px-12 lg:px-20 pt-16 pb-12 max-w-6xl mx-auto">
    <p className="animate-fade-up text-sm font-heading tracking-[0.3em] uppercase text-white/50 mb-6">{label}</p>
    <h1 className="animate-fade-up text-4xl sm:text-5xl font-heading font-semibold tracking-tight leading-[1.1] mb-6">{title}</h1>
    <p className="animate-fade-up-delay-2 text-lg text-white/80 leading-relaxed max-w-3xl">{text}</p>
  </div>
);

const Grid = ({ slugs }: { slugs: string[] }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {slugs
      .map((s) => caseStudies.find((c) => c.slug === s))
      .filter(Boolean)
      .map((s) => (
        <CaseCard key={s!.slug} study={s!} />
      ))}
  </div>
);

// /work: featured work, then a section per employer, newest first.
// /work/at/:employer: that employer's hub, with roles, results and projects.
// /work/category/:category: a discipline filter, linked from case pages.
const Work = () => {
  const { employer, category } = useParams();

  if (employer) {
    const e = employers.find((x) => x.slug === employer);
    if (!e) return <NotFound />;
    const projects = workStudies.filter((c) => c.employer === e.slug).map((c) => c.slug);
    return (
      <main className="min-h-screen">
        <PageNav />
        <Header label={`Work · ${e.years}`} title={e.name} text={e.blurb} />
        <WorkNav />
        <Section>
          <Label>Key results</Label>
          <ul className="grid gap-4 sm:grid-cols-2">
            {e.results.map((r) => (
              <li key={r} className="border border-white/10 rounded-lg p-5 text-sm sm:text-base text-white/80 leading-relaxed">
                {r}
              </li>
            ))}
          </ul>
        </Section>
        {projects.length > 0 && (
          <Section dark>
            <Label>Projects</Label>
            <Grid slugs={projects} />
          </Section>
        )}
        <Section>
          <Label>{e.roles.length > 1 ? "Roles" : "Role"}</Label>
          <div className="space-y-12 max-w-4xl">
            {e.roles.map((r) => (
              <RoleBlock key={r.title + r.years} role={r} />
            ))}
          </div>
          <Link to="/experience" className="inline-block mt-12 text-xs font-heading tracking-[0.2em] uppercase text-white/60 hover:text-white">
            Full experience →
          </Link>
        </Section>
        <Footer />
      </main>
    );
  }

  if (category) {
    const c = categories.find((x) => x.slug === category);
    if (!c) return <NotFound />;
    return (
      <main className="min-h-screen">
        <PageNav />
        <Header label="Work" title={c.label} text={c.blurb} />
        <WorkNav />
        <Section>
          <Grid slugs={workStudies.filter((s) => s.category === c.slug).map((s) => s.slug)} />
        </Section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <PageNav />
      <Header
        label="Work"
        title="Three decades of making new media work"
        text="Streaming platforms, interactive advertising, Emmy-winning digital experiences and AI, organized by where I did it. Each employer page has the roles, results and projects."
      />
      <WorkNav />
      <Section>
        <Label>Featured</Label>
        <Grid slugs={featured} />
      </Section>
      {employers.map((e, i) => {
        const projects = workStudies.filter((c) => c.employer === e.slug).map((c) => c.slug);
        return (
          <Section key={e.slug} dark={i % 2 === 0}>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
              <div className="max-w-3xl">
                <Label>{e.years}</Label>
                <h2 className="text-2xl sm:text-3xl font-heading font-semibold tracking-tight mb-3">{e.name}</h2>
                <p className="text-sm text-white/60 mb-2">{e.roles.map((r) => r.title).join(" · ")}</p>
                <p className="text-base text-white/75">{e.blurb}</p>
              </div>
              <Link to={`/work/at/${e.slug}`} className="text-xs font-heading tracking-[0.2em] uppercase text-white/60 hover:text-white shrink-0">
                Roles and results →
              </Link>
            </div>
            <Grid slugs={projects} />
          </Section>
        );
      })}
      <Footer />
    </main>
  );
};

export default Work;
