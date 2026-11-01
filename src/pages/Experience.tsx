import PageNav from "@/components/PageNav";
import Footer from "@/components/Footer";
import RoleBlock from "@/components/RoleBlock";
import { Section, Label, primaryButton } from "@/components/Section";
import { employers, leadership, summary } from "@/data/experience";
import { recognition, CONTACT_EMAIL, LINKEDIN_URL } from "@/data/content";

const Experience = () => (
  <main className="min-h-screen">
    <div className="print:hidden">
      <PageNav />
    </div>
    <div className="px-8 sm:px-12 lg:px-20 pt-16 pb-12 max-w-6xl mx-auto print:pt-0 print:pb-4">
      <p className="animate-fade-up text-sm font-heading tracking-[0.3em] uppercase text-white/50 mb-6 print:hidden">Experience</p>
      <h1 className="animate-fade-up text-4xl sm:text-5xl font-heading font-semibold tracking-tight leading-[1.1] mb-4">Joe Tolerico</h1>
      <p className="text-lg text-white/70 mb-6 print:text-black">Product leader: streaming, advertising and AI</p>
      <p className="animate-fade-up-delay-2 text-base sm:text-lg text-white/80 leading-relaxed max-w-3xl print:text-black">{summary}</p>
      <p className="mt-4 text-sm text-white/60 print:text-black">
        {CONTACT_EMAIL} · {LINKEDIN_URL.replace("https://www.", "")}
      </p>
      <button type="button" onClick={() => window.print()} className={`${primaryButton} mt-8 print:hidden`}>
        Print or save as PDF
      </button>
    </div>

    {employers.map((e, i) => (
      <Section key={e.slug} dark={i % 2 === 0}>
        <div className="max-w-4xl">
          <Label>{e.years}</Label>
          <h2 className="text-2xl sm:text-3xl font-heading font-semibold tracking-tight mb-8">{e.name}</h2>
          <div className="space-y-12">
            {e.roles.map((r) => (
              <RoleBlock key={r.title + r.years} role={r} />
            ))}
          </div>
        </div>
      </Section>
    ))}

    <Section>
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <Label>Leadership and industry service</Label>
          <ul className="space-y-3 text-sm sm:text-base text-white/75 leading-relaxed print:text-black print:list-disc print:pl-5">
            {leadership.map((l) => (
              <li key={l} className="flex items-start gap-3 print:list-item">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 print:hidden" />
                {l}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Label>Awards and honors</Label>
          <ul className="space-y-4">
            {recognition.map(({ award, detail }) => (
              <li key={award}>
                <p className="font-heading font-semibold">{award}</p>
                <p className="text-sm text-white/65 leading-relaxed print:text-black">{detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>

    <div className="print:hidden">
      <Footer />
    </div>
  </main>
);

export default Experience;
