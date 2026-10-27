import PageNav from "@/components/PageNav";
import Footer from "@/components/Footer";
import { Section, Body } from "@/components/Section";
import { CONTACT_EMAIL, LINKEDIN_URL } from "@/data/content";

const paths = [
  {
    label: "Hiring",
    title: "A product or AI leadership role",
    text: "If you're building a product or AI team in media, advertising or anywhere new technology needs to become a real product, I'd like to hear about it.",
    subject: "A role you might like",
    cta: "I'm hiring",
  },
  {
    label: "Projects",
    title: "A product partner for something new",
    text: "AI tools for creative teams, streaming and interactive products, or a robot that needs a story. Tell me what you're making.",
    subject: "A project for you",
    cta: "I have a project",
  },
];

const Contact = () => (
  <main className="min-h-screen">
    <PageNav />
    <div className="px-8 sm:px-12 lg:px-20 pt-16 pb-12 max-w-6xl mx-auto">
      <p className="animate-fade-up text-sm font-heading tracking-[0.3em] uppercase text-white/50 mb-6">Contact</p>
      <h1 className="animate-fade-up text-4xl sm:text-5xl font-heading font-semibold tracking-tight leading-[1.1] mb-6">
        Messages reach me in any timeline.
      </h1>
      <p className="animate-fade-up-delay-2 text-lg text-white/80 leading-relaxed max-w-2xl">
        Email{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="underline underline-offset-4 decoration-white/40 hover:text-white">
          {CONTACT_EMAIL}
        </a>{" "}
        or find me on{" "}
        <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="underline underline-offset-4 decoration-white/40 hover:text-white">
          LinkedIn
        </a>
        .
      </p>
    </div>
    <Section>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {paths.map((p) => (
          <div key={p.label} className="border border-white/10 rounded-lg p-8 flex flex-col">
            <p className="text-xs font-heading tracking-[0.3em] uppercase text-muted-foreground mb-4">{p.label}</p>
            <h2 className="text-xl font-heading font-semibold mb-3">{p.title}</h2>
            <div className="mb-8 flex-1">
              <Body>{p.text}</Body>
            </div>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(p.subject)}`}
              className="self-start inline-flex items-center gap-2 px-6 py-3 bg-white text-[#012b62] text-sm font-heading font-semibold tracking-wide uppercase rounded hover:bg-white/90 transition-colors duration-300"
            >
              {p.cta}
            </a>
          </div>
        ))}
      </div>
    </Section>
    <Footer />
  </main>
);

export default Contact;
