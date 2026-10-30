import { Link, useParams } from "react-router-dom";
import PageNav from "@/components/PageNav";
import Footer from "@/components/Footer";
import VideoEmbed, { vimeoPoster } from "@/components/VideoEmbed";
import VideoPlayer from "@/components/VideoPlayer";
import WorkNav from "@/components/WorkNav";
import CaseCard from "@/components/CaseCard";
import { Section, Label, primaryButton } from "@/components/Section";
import NotFound from "@/pages/NotFound";
import { caseStudies, CONTACT_EMAIL } from "@/data/content";

const Case = () => {
  const { slug } = useParams();
  const i = caseStudies.findIndex((c) => c.slug === slug);
  if (i < 0) return <NotFound />;
  const study = caseStudies[i];
  const same = caseStudies.filter((c) => c.category === study.category);
  const next =
    same.length > 1 ? same[(same.indexOf(study) + 1) % same.length] : caseStudies[(i + 1) % caseStudies.length];

  return (
    <main className="min-h-screen">
      <PageNav />
      <WorkNav current={`/work/category/${study.category}`} />
      <div className="px-8 sm:px-12 lg:px-20 pt-16 pb-12 max-w-6xl mx-auto">
        <p className="animate-fade-up text-sm font-heading tracking-[0.3em] uppercase text-white/50 mb-6">
          {study.org} · {study.years}
        </p>
        <h1 className="animate-fade-up text-4xl sm:text-5xl font-heading font-semibold tracking-tight leading-[1.1] mb-6 max-w-4xl">
          {study.title}
        </h1>
        <p className="animate-fade-up-delay-2 text-lg text-white/80 leading-relaxed max-w-3xl">{study.summary}</p>
        <p className="animate-fade-up-delay-2 mt-6 text-xs font-heading tracking-[0.2em] uppercase text-white/50">
          Role: {study.role}
        </p>
      </div>

      {study.videos?.length ? (
        <div className="px-8 sm:px-12 lg:px-20 pb-12 max-w-6xl mx-auto grid gap-6">
          {study.videos.map((v) => (
            <VideoEmbed key={v.title} video={v} />
          ))}
        </div>
      ) : null}

      <Section dark>
        <div className="grid gap-12 md:grid-cols-[2fr_1fr]">
          <div className="space-y-5">
            {study.body.map((para) => (
              <p key={para.slice(0, 32)} className="text-base sm:text-lg text-white/75 leading-relaxed">
                {para}
              </p>
            ))}
          </div>
          <aside className="space-y-8">
            {study.stat && (
              <div className="border border-white/10 rounded-lg p-6">
                <p className="text-4xl font-heading font-semibold">{study.stat.value}</p>
                <p className="mt-2 text-xs font-heading tracking-[0.2em] uppercase text-white/50">{study.stat.label}</p>
              </div>
            )}
            {study.highlights && (
              <div>
                <Label>Highlights</Label>
                <ul className="space-y-3 text-sm text-white/70">
                  {study.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/40 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {study.links && (
              <div>
                <Label>Read more</Label>
                <ul className="space-y-2 text-sm">
                  {study.links.map((l) => (
                    <li key={l.href}>
                      <a href={l.href} target="_blank" rel="noreferrer" className="text-white/70 hover:text-white underline underline-offset-4 decoration-white/30">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </Section>

      {study.related && (
        <Section>
          <Label>Explore</Label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {study.related.map((slug) => {
              const r = caseStudies.find((c) => c.slug === slug);
              return r ? <CaseCard key={slug} study={r} /> : null;
            })}
          </div>
        </Section>
      )}

      {study.reel?.map((group) => (
        <Section key={group.title}>
          <Label>{group.title}</Label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {group.videos.map((v) => (
              <VideoPlayer key={v.id} id={v.id} title={v.title} poster={vimeoPoster(v.id)} />
            ))}
          </div>
        </Section>
      ))}

      {study.gallery && (
        <Section>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {study.gallery.map((g) => (
              <img key={g.src} src={g.src} alt={g.alt} loading="lazy" className="w-full aspect-square object-cover rounded-lg border border-white/10" />
            ))}
          </div>
          {study.slug === "sim2real" && (
            <Link to="/lab" className="inline-block mt-8 text-xs font-heading tracking-[0.2em] uppercase text-white/60 hover:text-white">
              See the canvas experiments in the lab →
            </Link>
          )}
        </Section>
      )}

      <Section>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <Link to={`/work/${next.slug}`} className="group">
            <p className="text-xs font-heading tracking-[0.25em] uppercase text-muted-foreground mb-2">Next</p>
            <p className="text-xl sm:text-2xl font-heading font-semibold group-hover:text-white/80 transition-colors">
              {next.title} →
            </p>
          </Link>
          <a href={`mailto:${CONTACT_EMAIL}`} className={primaryButton}>
            Get in touch
          </a>
        </div>
      </Section>

      <Footer />
    </main>
  );
};

export default Case;
