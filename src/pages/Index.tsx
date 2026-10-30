import { Link } from "react-router-dom";
import PageNav from "@/components/PageNav";
import Footer from "@/components/Footer";
import SpeedField, { DEFAULTS } from "@/components/SpeedField";
import CaseCard from "@/components/CaseCard";
import ProjectCard from "@/components/ProjectCard";
import { Section, Label, Heading, Body, primaryButton, secondaryButton } from "@/components/Section";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { caseStudies, eras, featured, recognition, service, CONTACT_EMAIL } from "@/data/content";
import { projects } from "@/data/projects";

const heroStars = { ...DEFAULTS, starCount: 360, speed: 1.4 };

const Era = ({ era }: { era: (typeof eras)[number] }) => {
  const { ref, isVisible } = useScrollReveal(0.4);
  return (
    <div
      ref={ref}
      className={`relative grid grid-cols-[5.5rem_1fr] sm:grid-cols-[9rem_1fr] gap-6 py-8 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <p
        className={`text-3xl sm:text-5xl font-heading font-semibold tracking-tight transition-colors duration-1000 ${
          isVisible ? "text-white" : "text-white/20"
        }`}
      >
        {era.year}
      </p>
      <div className="border-l border-white/15 pl-6">
        <p className="text-xs font-heading tracking-[0.25em] uppercase text-muted-foreground mb-2">{era.place}</p>
        <h3 className="text-lg sm:text-xl font-heading font-semibold mb-2">{era.title}</h3>
        <p className="text-sm sm:text-base text-white/70 leading-relaxed max-w-2xl">{era.text}</p>
        {era.slug && (
          <Link
            to={`/work/${era.slug}`}
            className="inline-block mt-3 text-xs font-heading tracking-[0.2em] uppercase text-white/50 hover:text-white transition-colors"
          >
            The story →
          </Link>
        )}
      </div>
    </div>
  );
};

const Index = () => {
  const selected = featured.map((slug) => caseStudies.find((c) => c.slug === slug)!);

  return (
    <main className="min-h-screen">
      <section className="relative min-h-[88vh] flex flex-col overflow-hidden" style={{ backgroundColor: "#012b62" }}>
        <SpeedField settings={heroStars} clear="1,43,98" />

        <div className="relative z-10">
          <PageNav />
        </div>

        <div className="relative z-10 flex-1 flex items-center px-8 sm:px-12 lg:px-20 py-16 pointer-events-none">
          <div className="max-w-3xl">
            <p className="animate-fade-up inline-flex items-center gap-3 text-xs font-heading tracking-[0.3em] uppercase text-white/60 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-60 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-300" />
              </span>
              Status: away on leave
            </p>
            <h1 className="animate-fade-up text-4xl sm:text-5xl md:text-6xl font-heading font-semibold tracking-tight leading-[1.1] mb-6">
              Currently traveling through time and space.
              <span className="block text-white/60">Back last week.</span>
            </h1>
            <p className="animate-fade-up-delay-2 text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl mb-10">
              In the meantime, here's where I've been. I've spent almost thirty years making new media work, from early
              fan websites and Emmy-winning TV extensions to live game shows inside streaming apps and AI tools for a
              creative agency.
            </p>
            <div className="animate-fade-up-delay-2 flex flex-wrap gap-4 pointer-events-auto">
              <a href="#timeline" className={primaryButton}>
                Where I've been
              </a>
              <Link to="/contact" className={secondaryButton}>
                Work with me
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="timeline" className="py-20 sm:py-28 border-t border-border scroll-mt-4">
        <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-20">
          <Label>Where I've been</Label>
          <Heading>Making new media work since it was called new media</Heading>
          <div className="max-w-2xl mb-6">
            <Body>
              Every few years the medium changes. The job stays the same: take a technology that's new and turn it into
              something people actually use.
            </Body>
          </div>
          <div>
            {eras.map((era) => (
              <Era key={era.year} era={era} />
            ))}
            <div className="grid grid-cols-[5.5rem_1fr] sm:grid-cols-[9rem_1fr] gap-6 py-8">
              <p className="text-3xl sm:text-5xl font-heading font-semibold tracking-tight text-amber-200">Next</p>
              <div className="border-l border-amber-200/40 pl-6">
                <p className="text-xs font-heading tracking-[0.25em] uppercase text-amber-200/80 mb-2">Arriving last week</p>
                <h3 className="text-lg sm:text-xl font-heading font-semibold mb-2">Your product, maybe</h3>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed max-w-2xl">
                  I'm open to product and AI leadership roles, and to working with teams on the right project.
                </p>
                <Link
                  to="/contact"
                  className="inline-block mt-3 text-xs font-heading tracking-[0.2em] uppercase text-amber-200/80 hover:text-amber-100 transition-colors"
                >
                  Get in touch →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section dark>
        <Label>Selected work</Label>
        <Heading>Recent and favorite projects</Heading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {selected.map((s) => (
            <CaseCard key={s.slug} study={s} />
          ))}
        </div>
        <Link to="/work" className={`${secondaryButton} mt-10`}>
          All work
        </Link>
      </Section>

      <Section>
        <Label>The lab</Label>
        <Heading>I still build things</Heading>
        <div className="max-w-2xl mb-10">
          <Body>
            Small interactive pieces written by hand with the Canvas API. They started as experiments for the Sim2Real
            website. Every one runs live in your browser.
          </Body>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.slice(0, 4).map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
        <Link to="/lab" className={`${secondaryButton} mt-10`}>
          Everything in the lab
        </Link>
      </Section>

      <Section dark>
        <Label>Recognition</Label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {recognition.map(({ award, detail }) => (
            <div key={award} className="border border-white/10 rounded-lg p-6">
              <h3 className="text-base font-heading font-semibold text-foreground mb-2">{award}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm text-white/60 leading-relaxed max-w-3xl">
          Industry service: {service.join(". ")}.
        </p>
      </Section>

      <Section>
        <div className="max-w-4xl">
          <Label>Work with me</Label>
          <Heading>Hiring, or have a project?</Heading>
          <div className="mb-10">
            <Body>
              I'm looking at product and AI leadership roles, and I take on product work with teams building something
              new. Either way, the best first step is an email.
            </Body>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("A role you might like")}`} className={primaryButton}>
              I'm hiring
            </a>
            <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("A project for you")}`} className={secondaryButton}>
              I have a project
            </a>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
};

export default Index;
