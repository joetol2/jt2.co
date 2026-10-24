import PageNav from "@/components/PageNav";
import Footer from "@/components/Footer";
import { Section, Body, primaryButton, secondaryButton } from "@/components/Section";

const Contact = () => (
  <main className="min-h-screen">
    <PageNav />
    <div className="px-8 sm:px-12 lg:px-20 pt-16 pb-12 max-w-6xl mx-auto">
      <p className="animate-fade-up text-sm font-heading tracking-[0.3em] uppercase text-white/50 mb-6">Contact</p>
      <h1 className="animate-fade-up text-4xl sm:text-5xl font-heading font-semibold tracking-tight leading-[1.1] mb-6">
        Let's build something.
      </h1>
    </div>
    <Section>
      <div className="max-w-2xl">
        <div className="mb-10">
          <Body>Questions, collaborations or just want to say the starfield made you smile? Reach out.</Body>
        </div>
        <div className="flex flex-wrap gap-4">
          {/* TODO: swap in the public contact address */}
          <a href="mailto:hello@jt2.co" className={primaryButton}>
            hello@jt2.co
          </a>
          <a href="https://github.com/joetol2" target="_blank" rel="noreferrer" className={secondaryButton}>
            GitHub
          </a>
        </div>
      </div>
    </Section>
    <Footer />
  </main>
);

export default Contact;
