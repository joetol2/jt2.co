import { Link } from "react-router-dom";
import type { CaseStudy } from "@/data/content";

// Cards without a screenshot get a big stat instead, so every card has a
// strong visual anchor.
const CaseCard = ({ study }: { study: CaseStudy }) => (
  <Link
    to={`/work/${study.slug}`}
    className="group flex flex-col border border-white/10 rounded-lg overflow-hidden hover:border-white/30 transition-colors duration-300"
  >
    <div className="relative aspect-[16/10] overflow-hidden" style={{ background: "linear-gradient(135deg, #012b62 0%, #05060a 100%)" }}>
      {study.image ? (
        <img
          src={study.image}
          alt=""
          loading="lazy"
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500"
        />
      ) : (
        study.stat && (
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <p className="text-5xl sm:text-6xl font-heading font-semibold tracking-tight text-white/90 group-hover:text-white transition-colors">
              {study.stat.value}
            </p>
            <p className="mt-2 text-xs font-heading tracking-[0.2em] uppercase text-white/50">{study.stat.label}</p>
          </div>
        )
      )}
    </div>
    <div className="p-6 flex-1">
      <p className="text-xs font-heading tracking-[0.25em] uppercase text-muted-foreground mb-3">
        {study.org} · {study.years}
      </p>
      <h3 className="text-lg font-heading font-semibold text-foreground mb-2 flex items-center gap-2">
        {study.title}
        <span className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">→</span>
      </h3>
      <p className="text-sm text-white/60 leading-relaxed">{study.summary}</p>
    </div>
  </Link>
);

export default CaseCard;
