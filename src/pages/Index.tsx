import { Link } from "react-router-dom";
import PageNav from "@/components/PageNav";
import Footer from "@/components/Footer";
import SpeedField, { DEFAULTS } from "@/components/SpeedField";
import CaseCard from "@/components/CaseCard";
import ProjectCard from "@/components/ProjectCard";
import VideoPlayer from "@/components/VideoPlayer";
import { vimeoPoster } from "@/components/VideoEmbed";
import { Section, Label, Heading, Body, primaryButton, secondaryButton } from "@/components/Section";
import { caseStudies, featured, CONTACT_EMAIL } from "@/data/content";
import { projects } from "@/data/projects";

const watch = [
  { id: "80954249", title: "Heroes Digital Experience" },
  { id: "216764413", title: "FOX advanced ad products sizzle" },
  { id: "81060620", title: "Gemini Division digital experience" },
];

const heroStars = { ...DEFAULTS, starCount: 360, speed: 1.4 };

const proofs = [
  { value: "Emmy", label: "Primetime Emmy winner, Outstanding Interactive Television Programming", to: "/work/heroes" },
  { value: "$25M", label: "from 8 FOX interactive ad products in their first 18 months", to: "/work/fox-ad-products" },
  { value: "$4.3M", label: "Deal or No Deal sponsorship, the largest to date for NBC.com", to: "/work/deal-or-no-deal" },
  { value: "3 Olympics", label: "lead digital product owner at NBC and FOX, plus SpaceX and NASA launches", to: "/work/live-events" },
  { value: "Global", label: "streaming core services for discovery+ and Warner Bros. Discovery", to: "/work/streaming-platform" },
  { value: "AI lead", label: "AI product strategy at a creative agency, and robotics research in the Lab", to: "/work/agency-ai" },
];

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
              <Link to="/experience" className={primaryButton}>
                Where I've been
              </Link>
              <Link to="/contact" className={secondaryButton}>
                Work with me
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border" style={{ backgroundColor: "#012b62" }}>
        <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-20 py-14 grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {proofs.map((p) => (
            <Link key={p.value} to={p.to} className="group block">
              <p className="text-3xl sm:text-4xl font-heading font-semibold tracking-tight group-hover:text-white/80 transition-colors">{p.value}</p>
              <p className="mt-2 text-sm text-white/65 leading-snug">{p.label}</p>
            </Link>
          ))}
        </div>
      </section>

      <Section>
        <Label>Featured work</Label>
        <Heading>Projects I'm proudest of</Heading>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {selected.map((s) => (
            <CaseCard key={s.slug} study={s} />
          ))}
        </div>
        <Link to="/work" className={`${secondaryButton} mt-10`}>
          All work
        </Link>
      </Section>

      <Section dark>
        <Label>Watch</Label>
        <Heading>See the work</Heading>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
          {watch.map((v) => (
            <VideoPlayer key={v.id} id={v.id} title={v.title} poster={vimeoPoster(v.id)} />
          ))}
        </div>
        <Link to="/work/videos" className={`${secondaryButton} mt-10`}>
          All videos
        </Link>
      </Section>

      <Section>
        <Label>The lab</Label>
        <Heading>I still build things</Heading>
        <div className="max-w-2xl mb-10">
          <Body>
            Independent research, experiments and prototypes, from a muscle-powered robot arm that learned to catch to
            interactive pieces that run live in your browser.
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
