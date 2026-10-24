import { Link } from "react-router-dom";
import PageNav from "@/components/PageNav";
import Footer from "@/components/Footer";
import { Section, Label, Heading, Body, primaryButton } from "@/components/Section";

const About = () => (
  <main className="min-h-screen">
    <PageNav />
    <div className="px-8 sm:px-12 lg:px-20 pt-16 pb-12 max-w-6xl mx-auto">
      <p className="animate-fade-up text-sm font-heading tracking-[0.3em] uppercase text-white/50 mb-6">About</p>
      <h1 className="animate-fade-up text-4xl sm:text-5xl font-heading font-semibold tracking-tight leading-[1.1] mb-6">
        Hi, I'm JT.
      </h1>
      <p className="animate-fade-up-delay-2 text-lg text-white/80 leading-relaxed max-w-2xl">
        I build interactive things for the web, with a soft spot for anything that animates, simulates or can be played.
      </p>
    </div>

    <Section>
      <div className="max-w-4xl">
        <Label>What I do</Label>
        <Heading>Interactive front-end, from the pixel up</Heading>
        <Body>
          Most of what you see here started as a quick sandbox: a header effect, a physics toy, a game I wanted to play.
          I like getting close to the frame loop, where small decisions about easing, collision and input make the
          difference between something that works and something that feels good.
        </Body>
      </div>
    </Section>

    <Section dark>
      <Label>Toolkit</Label>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
          { title: "Rendering", items: ["Canvas 2D", "WebGL / three.js", "SVG"] },
          { title: "Front-end", items: ["React", "TypeScript", "Tailwind CSS"] },
          { title: "Craft", items: ["Game loops and physics", "Touch and pointer input", "Motion design"] },
        ].map(({ title, items }) => (
          <div key={title} className="border border-white/10 rounded-lg p-6">
            <h3 className="text-sm font-heading font-semibold text-foreground mb-4">{title}</h3>
            <ul className="space-y-3 text-sm text-white/70">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>

    <Section>
      <Link to="/contact" className={primaryButton}>
        Get in touch
      </Link>
    </Section>

    <Footer />
  </main>
);

export default About;
