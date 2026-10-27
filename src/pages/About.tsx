import PageNav from "@/components/PageNav";
import Footer from "@/components/Footer";
import { Section, Label, Heading, Body, primaryButton } from "@/components/Section";
import { chronology, recognition, service, press, CONTACT_EMAIL } from "@/data/content";

const About = () => (
  <main className="min-h-screen">
    <PageNav />
    <div className="px-8 sm:px-12 lg:px-20 pt-16 pb-12 max-w-6xl mx-auto">
      <p className="animate-fade-up text-sm font-heading tracking-[0.3em] uppercase text-white/50 mb-6">About</p>
      <h1 className="animate-fade-up text-4xl sm:text-5xl font-heading font-semibold tracking-tight leading-[1.1] mb-6">
        Hi, I'm Joe.
      </h1>
      <p className="animate-fade-up-delay-2 text-lg text-white/80 leading-relaxed max-w-2xl">
        Thank you for checking out my site. I am currently away on leave, traveling through time and space and will be
        returning last week.
      </p>
    </div>

    <Section>
      <div className="max-w-4xl space-y-5">
        <Label>What I do</Label>
        <Heading>I turn new technology into products people use</Heading>
        <Body>
          I'm a product leader who started as a producer. I built interactive work for bands and ball clubs in the late
          nineties, extended NBC shows like Heroes onto the web, and created interactive ad products and a live in-app
          game show at FOX. At Discovery and Warner Bros. Discovery I led product for the shared services a global
          streaming platform runs on. Today I lead AI product strategy at a creative agency and work on robotics with
          Sim2Real.
        </Body>
        <Body>
          The thread through all of it is translation. I sit between engineering, data, creative and the business, work
          out what a new capability is actually good for, and get it shipped in a form people want to use. Production
          taught me to respect deadlines and craft. Product taught me to care about what happens after launch.
        </Body>
      </div>
    </Section>

    <Section dark>
      <Label>Career</Label>
      <div className="divide-y divide-white/10 border-y border-white/10">
        {chronology.map((c) => (
          <div key={c.years + c.role} className="grid gap-1 sm:grid-cols-[10rem_1fr_1.4fr] sm:gap-6 py-4 text-sm">
            <span className="font-heading text-white/50">{c.years}</span>
            <span className="font-heading font-semibold">{c.org}</span>
            <span className="text-white/70">{c.role}</span>
          </div>
        ))}
      </div>
    </Section>

    <Section>
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <Label>Recognition</Label>
          <ul className="space-y-4">
            {recognition.map(({ award, detail }) => (
              <li key={award}>
                <p className="font-heading font-semibold">{award}</p>
                <p className="text-sm text-white/60 leading-relaxed">{detail}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Label>Industry service</Label>
          <ul className="space-y-3 text-sm text-white/70 mb-10">
            {service.map((s) => (
              <li key={s} className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                {s}
              </li>
            ))}
          </ul>
          <Label>Press and credits</Label>
          <div className="flex flex-wrap gap-3">
            {press.map((p) => (
              <a
                key={p.href}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-heading tracking-[0.15em] uppercase text-white/60 border border-white/15 rounded px-3 py-2 hover:text-white hover:border-white/40 transition-colors"
              >
                {p.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>

    <Section dark>
      <a href={`mailto:${CONTACT_EMAIL}`} className={primaryButton}>
        Get in touch
      </a>
    </Section>

    <Footer />
  </main>
);

export default About;
