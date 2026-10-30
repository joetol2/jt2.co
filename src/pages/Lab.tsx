import PageNav from "@/components/PageNav";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import ReviewSection from "@/components/ReviewSection";
import { Section } from "@/components/Section";
import { projects, tools } from "@/data/projects";

const Lab = () => (
  <main className="min-h-screen">
    <PageNav />
    <div className="px-8 sm:px-12 lg:px-20 pt-16 pb-12 max-w-6xl mx-auto">
      <p className="animate-fade-up text-sm font-heading tracking-[0.3em] uppercase text-white/50 mb-6">The lab</p>
      <h1 className="animate-fade-up text-4xl sm:text-5xl font-heading font-semibold tracking-tight leading-[1.1] mb-6">
        Things that move, built on canvas
      </h1>
      <p className="animate-fade-up-delay-2 text-lg text-white/80 leading-relaxed max-w-2xl">
        Interactive experiments in motion, physics and play, drawn frame by frame. Open one to play with it.
      </p>
    </div>
    <Section>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>
    </Section>
    <Section dark>
      <p className="text-sm font-heading tracking-[0.3em] uppercase text-muted-foreground mb-6">Sites</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {tools.map((t) => {
          const body = (
            <>
              {t.image && (
                <div className="aspect-[16/10] overflow-hidden bg-[#05060a]">
                  <img src={t.image} alt="" loading="lazy" className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-base font-heading font-semibold text-foreground mb-2 flex items-center gap-2">
                  {t.title}
                  {t.href && <span className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">↗</span>}
                </h3>
                <p className="text-sm text-white/80 mb-3">{t.tagline}</p>
                <p className="text-sm text-white/60 leading-relaxed mb-4">{t.description}</p>
                <div className="flex flex-wrap gap-2">
                  {t.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-heading tracking-[0.15em] uppercase text-white/50 border border-white/10 rounded px-2 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </>
          );
          const cls = "group block border border-white/10 rounded-lg overflow-hidden";
          return t.href ? (
            <a key={t.title} href={t.href} target="_blank" rel="noreferrer" className={`${cls} hover:border-white/30 transition-colors duration-300`}>
              {body}
            </a>
          ) : (
            <div key={t.title} className={cls}>
              {body}
            </div>
          );
        })}
      </div>
    </Section>
    <ReviewSection />
    <Footer />
  </main>
);

export default Lab;
