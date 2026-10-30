import { Link } from "react-router-dom";
import PageNav from "@/components/PageNav";
import Footer from "@/components/Footer";
import VideoPlayer from "@/components/VideoPlayer";
import { vimeoPoster } from "@/components/VideoEmbed";
import { Section, Label } from "@/components/Section";
import { caseStudies } from "@/data/content";

// Every Vimeo video on the site, grouped by the case study it belongs to.
const withVideos = caseStudies
  .map((c) => ({
    study: c,
    videos: [
      ...(c.videos ?? []).flatMap((v) => (v.kind === "vimeo" ? [{ id: v.id, title: v.title }] : [])),
      ...(c.reel ?? []).flatMap((g) => g.videos),
    ],
  }))
  .filter((c) => c.videos.length > 0);

const Videos = () => (
  <main className="min-h-screen">
    <PageNav />
    <div className="px-8 sm:px-12 lg:px-20 pt-16 pb-12 max-w-6xl mx-auto">
      <p className="animate-fade-up text-sm font-heading tracking-[0.3em] uppercase text-white/50 mb-6">Videos</p>
      <h1 className="animate-fade-up text-4xl sm:text-5xl font-heading font-semibold tracking-tight leading-[1.1] mb-6">
        The work, in motion
      </h1>
      <p className="animate-fade-up-delay-2 text-lg text-white/80 leading-relaxed max-w-2xl">
        Digital experiences, web series, social video, ad products and robots. Press play on anything.
      </p>
    </div>
    {withVideos.map(({ study, videos }, i) => (
      <Section key={study.slug} dark={i % 2 === 1}>
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <Label>
              {study.org} · {study.years}
            </Label>
            <h2 className="text-2xl sm:text-3xl font-heading font-semibold tracking-tight">{study.title}</h2>
          </div>
          <Link
            to={`/work/${study.slug}`}
            className="text-xs font-heading tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors"
          >
            The story →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {videos.map((v) => (
            <VideoPlayer key={v.id} id={v.id} title={v.title} poster={vimeoPoster(v.id)} />
          ))}
        </div>
      </Section>
    ))}
    <Footer />
  </main>
);

export default Videos;
