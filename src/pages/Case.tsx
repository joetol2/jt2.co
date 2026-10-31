import { Link, Navigate, useLocation, useParams } from "react-router-dom";
import PageNav from "@/components/PageNav";
import Footer from "@/components/Footer";
import VideoEmbed, { vimeoPoster } from "@/components/VideoEmbed";
import VideoPlayer from "@/components/VideoPlayer";
import WorkNav from "@/components/WorkNav";
import LabNav from "@/components/LabNav";
import CaseCard from "@/components/CaseCard";
import ArmCanvas, { DEFAULTS as ARM_DEFAULTS } from "@/components/MuscleArmCanvas";
import { Section, Label, primaryButton } from "@/components/Section";
import NotFound from "@/pages/NotFound";
import { caseHref, caseStudies, isLab, CONTACT_EMAIL } from "@/data/content";

const Case = () => {
  const { slug } = useParams();
  const { pathname } = useLocation();
  const i = caseStudies.findIndex((c) => c.slug === slug);
  if (i < 0) return <NotFound />;
  const study = caseStudies[i];
  const lab = isLab(study.category);
  // A study moved between Work and Lab keeps its old URL working.
  if (!pathname.startsWith(lab ? "/lab/" : "/work/")) return <Navigate to={caseHref(study)} replace />;
  // Next stays in the same category, or failing that the same section.
  const same = caseStudies.filter((c) => c.category === study.category);
  const pool = same.length > 1 ? same : caseStudies.filter((c) => isLab(c.category) === isLab(study.category));
  const next = pool[(pool.indexOf(study) + 1) % pool.length];

  return (
    <main className="min-h-screen">
      <PageNav />
      {lab ? <LabNav current={`/lab/category/${study.category}`} /> : <WorkNav current={`/work/category/${study.category}`} />}
      <div className="px-8 sm:px-12 lg:px-20 pt-16 pb-12 max-w-6xl mx-auto">
        <p className="animate-fade-up text-sm font-heading tracking-[0.3em] uppercase text-white/50 mb-6">
          {study.org} · {study.years}
        </p>
        <h1 className="animate-fade-up text-4xl sm:text-5xl font-heading font-semibold tracking-tight leading-[1.1] mb-6 max-w-4xl">
          {study.title}
        </h1>
        {study.subtitle && (
          <p className="animate-fade-up text-xl sm:text-2xl font-heading text-white/70 mb-6">{study.subtitle}</p>
        )}
        <p className="animate-fade-up-delay-2 text-lg text-white/80 leading-relaxed max-w-3xl">{study.summary}</p>
        <p className="animate-fade-up-delay-2 mt-6 text-xs font-heading tracking-[0.2em] uppercase text-white/50">
          Role: {study.role}
        </p>
        {study.paper && (
          <a href="#paper" className={`${primaryButton} mt-8`}>
            Read the full paper ↓
          </a>
        )}
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

      {study.paper && (
        <section className="py-16 sm:py-24 px-4 sm:px-8">
          <article
            id="paper"
            className="max-w-4xl mx-auto rounded-xl bg-white text-[#0b1b33] shadow-2xl px-6 py-10 sm:px-16 sm:py-16"
          >
            <header className="mb-12 border-b border-slate-200 pb-8">
              <p className="text-xs font-heading tracking-[0.3em] uppercase text-slate-500 mb-4">The full paper</p>
              <h2 className="text-2xl sm:text-3xl font-heading font-semibold tracking-tight leading-snug mb-3">{study.paper.title}</h2>
              <p className="text-base text-slate-600 mb-4">{study.paper.subtitle}</p>
              <p className="text-sm text-slate-500">
                {study.paper.author} · {study.paper.date}
              </p>
            </header>
            {study.paper.blocks.map((b, k) => {
              if (b.type === "figure")
                return (
                  <figure key={k} className="my-10">
                    <img
                      src={`${study.paper!.figures}${b.src}.png`}
                      alt={b.alt}
                      loading="lazy"
                      className="w-full"
                    />
                  </figure>
                );
              if (b.type === "h2")
                return (
                  <h3 key={k} className="mt-12 mb-4 text-xl sm:text-2xl font-heading font-semibold tracking-tight">
                    {b.text}
                  </h3>
                );
              if (b.type === "h3")
                return (
                  <h4 key={k} className="mt-8 mb-3 text-lg font-heading font-semibold">
                    {b.text}
                  </h4>
                );
              if (b.type === "ref") {
                const [text, url] = b.text.split(/ (?=https?:\/\/\S+$)/);
                return (
                  <p key={k} className="mb-3 pl-6 -indent-6 text-sm text-slate-600 leading-relaxed break-words">
                    {text}{" "}
                    {url && (
                      <a href={url} target="_blank" rel="noreferrer" className="underline underline-offset-2 decoration-slate-300 text-[#016fb5] hover:text-[#012b62]">
                        {url}
                      </a>
                    )}
                  </p>
                );
              }
              return (
                <p key={k} className="mb-5 text-base text-slate-700 leading-[1.8]">
                  {b.text}
                </p>
              );
            })}
          </article>
        </section>
      )}

      {study.chapters?.map((ch, n) => (
        <Section key={ch.title} dark={n % 2 === 1}>
          <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-start">
            <div>
              <p className="text-xs font-heading tracking-[0.3em] uppercase text-muted-foreground mb-4">
                {String(n + 1).padStart(2, "0")}
              </p>
              <h2 className="text-2xl sm:text-3xl font-heading font-semibold tracking-tight mb-5">{ch.title}</h2>
              <div className="space-y-4">
                {ch.text.map((t) => (
                  <p key={t.slice(0, 32)} className="text-base text-white/75 leading-relaxed">
                    {t}
                  </p>
                ))}
              </div>
              {ch.title === "An arm that reaches" && (
                <Link to="/lab/muscle-arm" className="inline-block mt-6 text-xs font-heading tracking-[0.2em] uppercase text-white/70 hover:text-white">
                  Open the Muscle Arm full screen →
                </Link>
              )}
            </div>
            {ch.media && (
              <div className="grid gap-4">
                {ch.media.map((m, k) => (
                  <figure key={k}>
                    {m.kind === "image" ? (
                      <img src={m.src} alt={m.alt} loading="lazy" className="w-full rounded-lg border border-white/10 bg-white" />
                    ) : m.kind === "loop" ? (
                      <video
                        src={m.src}
                        poster={m.poster}
                        autoPlay
                        muted
                        loop
                        playsInline
                        disablePictureInPicture
                        controlsList="nodownload"
                        onContextMenu={(e) => e.preventDefault()}
                        aria-label={m.alt}
                        className="w-full rounded-lg border border-white/10 bg-black"
                      />
                    ) : (
                      <div className="overflow-hidden rounded-lg border border-white/10 bg-[#05060a]">
                        <ArmCanvas settings={ARM_DEFAULTS} className="h-[300px] sm:h-[420px]" />
                      </div>
                    )}
                    {m.caption && <figcaption className="mt-2 text-xs text-white/55 leading-relaxed">{m.caption}</figcaption>}
                  </figure>
                ))}
              </div>
            )}
          </div>
        </Section>
      ))}

      {study.technical && (
        <Section dark>
          <Label>Under the hood</Label>
          <h2 className="text-2xl sm:text-3xl font-heading font-semibold tracking-tight mb-8">For engineers</h2>
          <div className="overflow-x-auto rounded-lg border border-white/10 mb-10">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="text-left text-xs font-heading tracking-[0.15em] uppercase text-white/50 border-b border-white/10">
                  <th className="px-4 py-3 font-medium">Version</th>
                  <th className="px-4 py-3 font-medium">Task</th>
                  <th className="px-4 py-3 font-medium">Reported result</th>
                </tr>
              </thead>
              <tbody>
                {study.technical.timeline.map((row) => (
                  <tr key={row.version} className="border-b border-white/5 last:border-0">
                    <td className="px-4 py-3 font-mono text-white whitespace-nowrap">{row.version}</td>
                    <td className="px-4 py-3 text-white/75">{row.task}</td>
                    <td className="px-4 py-3 text-white/75">{row.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid gap-4">
            {study.technical.sections.map((sec, n) => (
              <details key={sec.title} open={n === 0} className="group min-w-0 rounded-lg border border-white/10 px-5 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between font-heading font-semibold">
                  {sec.title}
                  <span className="text-white/50 transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="mt-4 space-y-4">
                  {sec.text?.map((t) => (
                    <p key={t.slice(0, 32)} className="text-sm text-white/75 leading-relaxed">
                      {t}
                    </p>
                  ))}
                  {sec.code && (
                    <pre className="overflow-x-auto rounded bg-black/40 p-4 text-xs leading-relaxed text-sky-100">
                      <code>{sec.code}</code>
                    </pre>
                  )}
                  {sec.rows && (
                    <dl className="divide-y divide-white/5 text-sm">
                      {sec.rows.map(([k, v]) => (
                        <div key={k} className="grid gap-1 py-2 sm:grid-cols-[12rem_1fr] sm:gap-4">
                          <dt className="font-heading text-white/90">{k}</dt>
                          <dd className="text-white/70">{v}</dd>
                        </div>
                      ))}
                    </dl>
                  )}
                </div>
              </details>
            ))}
          </div>
        </Section>
      )}

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
          <Link to={caseHref(next)} className="group">
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
