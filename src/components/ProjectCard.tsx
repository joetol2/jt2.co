import { Link } from "react-router-dom";
import type { Project } from "@/data/projects";

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <Link
    to={`/work/${project.slug}`}
    className="group block border border-white/10 rounded-lg overflow-hidden hover:border-white/30 transition-colors duration-300"
  >
    <div className="aspect-[16/10] overflow-hidden bg-[#05060a]">
      <img
        src={project.image}
        alt={`${project.title} screenshot`}
        loading="lazy"
        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500"
      />
    </div>
    <div className="p-6">
      <p className="text-xs font-heading tracking-[0.3em] uppercase text-muted-foreground mb-3">
        {String(index + 1).padStart(2, "0")}
      </p>
      <h3 className="text-base font-heading font-semibold text-foreground mb-2 flex items-center gap-2">
        {project.title}
        <span className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all duration-300">→</span>
      </h3>
      <p className="text-sm text-white/60 leading-relaxed mb-4">{project.tagline}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="text-[10px] font-heading tracking-[0.15em] uppercase text-white/50 border border-white/10 rounded px-2 py-1">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </Link>
);

export default ProjectCard;
