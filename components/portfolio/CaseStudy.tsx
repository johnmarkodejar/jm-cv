import { TrendingUp, type LucideIcon } from "lucide-react";
import type { Project } from "@/types";
import ProjectGallery from "./ProjectGallery";

export default function CaseStudy({
  project,
  icon: Icon,
  iconColor,
}: {
  project: Project;
  icon?: LucideIcon;
  iconColor: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      {project.gallery && project.gallery.length > 0 && (
        <div className="bg-secondary/40 p-4 sm:p-6">
          <ProjectGallery images={project.gallery} />
        </div>
      )}
      <div className="p-6 sm:p-8">
        <div className="flex items-center gap-2.5 flex-wrap mb-3">
          {Icon && <Icon className={`w-4 h-4 shrink-0 ${iconColor}`} />}
          <h2 className="text-base font-semibold text-white">{project.title}</h2>
          <span className={`text-xs font-mono ${iconColor}`}>{project.category}</span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-5">
          {project.description}
        </p>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span key={tech} className="text-xs text-muted-foreground/60 font-mono px-2 py-0.5 rounded border border-border">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-1.5 text-xs text-emerald-400">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>{project.impact}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
