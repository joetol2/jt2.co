import { Link } from "react-router-dom";
import { Section, Label } from "@/components/Section";
import { reviewProjects } from "@/data/projects";

const ReviewSection = () => (
  <Section>
    <Label>For review</Label>
    <p className="text-base text-white/70 leading-relaxed mb-8 max-w-2xl">
      Older physics experiments, parked here until they make the main list.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {reviewProjects.map((p) => (
        <Link
          key={p.slug}
          to={`/review/${p.slug}`}
          className="group block border border-dashed border-white/20 rounded-lg p-6 hover:border-white/40 transition-colors duration-300"
        >
          <h3 className="text-base font-heading font-semibold text-foreground mb-2 flex items-center gap-2">
            {p.title}
            <span className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">→</span>
          </h3>
          <p className="text-sm text-white/60 leading-relaxed">{p.tagline}</p>
        </Link>
      ))}
    </div>
  </Section>
);

export default ReviewSection;
