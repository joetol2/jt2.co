import { Link } from "react-router-dom";
import PageNav from "@/components/PageNav";
import Footer from "@/components/Footer";
import SpeedField, { DEFAULTS } from "@/components/SpeedField";
import ProjectCard from "@/components/ProjectCard";
import { Section, Label, Heading, Body, primaryButton, secondaryButton } from "@/components/Section";
import { projects } from "@/data/projects";

const heroStars = { ...DEFAULTS, starCount: 320, speed: 1.2 };

const Index = () => (
  <main className="min-h-screen">
    <section className="relative min-h-[80vh] flex flex-col overflow-hidden" style={{ backgroundColor: "#012b62" }}>
      <SpeedField settings={heroStars} clear="1,43,98" />

      <div className="relative z-10">
        <PageNav />
      </div>

      <div className="relative z-10 flex-1 flex items-center px-8 sm:px-12 lg:px-20 py-16 pointer-events-none">
        <div className="max-w-3xl">
          <p className="animate-fade-up text-sm font-heading tracking-[0.3em] uppercase text-white/50 mb-6">
            Portfolio
          </p>
          <h1 className="animate-fade-up text-4xl sm:text-5xl md:text-6xl font-heading font-semibold tracking-tight leading-[1.1] mb-6">
            Things that move.<br />Built on canvas.
          </h1>
          <p className="animate-fade-up-delay-2 text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl mb-10">
            Interactive experiments in motion, physics and play: starfields, rigid bodies and arcade games, all drawn
            frame by frame with the Canvas API. Move your pointer over the stars to steer.
          </p>
          <div className="animate-fade-up-delay-2 flex flex-wrap gap-4 pointer-events-auto">
            <Link to="/work" className={primaryButton}>
              See the work
            </Link>
            <Link to="/contact" className={secondaryButton}>
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </section>

    <Section>
      <Label>Selected work</Label>
      <Heading>Canvas experiments</Heading>
      <div className="max-w-2xl mb-10">
        <Body>Every piece runs live in your browser. Open one to play with it.</Body>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>
    </Section>

    <Section dark>
      <Label>Approach</Label>
      <Heading>Small engines, written by hand</Heading>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
        {[
          { stat: "0", title: "Game engines", body: "No physics or game libraries. Each piece owns its loop, its math and its rendering." },
          { stat: "Touch", title: "Made for phones too", body: "Device-pixel-ratio aware canvases, offscreen pausing and touch controls that do not fight scrolling." },
          { stat: "4", title: "Live pieces", body: "From a tunable starfield to a full arcade shooter with tractor beams and a high score." },
        ].map(({ stat, title, body }) => (
          <div key={title} className="border border-white/10 rounded-lg p-6">
            <p className="text-3xl font-heading font-semibold text-foreground mb-2">{stat}</p>
            <h3 className="text-sm font-heading font-semibold text-foreground mb-3">{title}</h3>
            <p className="text-sm text-white/60 leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
    </Section>

    <Section>
      <div className="max-w-4xl">
        <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-4">Have an idea that should move?</p>
        <p className="text-base text-white/70 leading-relaxed mb-10">I'm always up for building something interactive.</p>
        <Link to="/contact" className={primaryButton}>
          Say hello
        </Link>
      </div>
    </Section>

    <Footer />
  </main>
);

export default Index;
