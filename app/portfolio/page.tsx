import type { Metadata } from "next";
import { TrendingUp, ShoppingCart, GitBranch, Bot, BarChart2, Users, Building2, Dices, type LucideIcon } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CaseStudy from "@/components/portfolio/CaseStudy";
import CurrentlyWorking from "@/components/portfolio/CurrentlyWorking";
import { projects } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Case studies and selected work from JM Reyes — full-stack engineering, DevOps, and AI automation projects.",
};

const categoryColor: Record<string, string> = {
  eCommerce: "text-blue-400",
  DevOps: "text-cyan-400",
  "AI Automation": "text-violet-400",
  "Marketing Technology": "text-orange-400",
  CRM: "text-emerald-400",
  "Enterprise Application": "text-pink-400",
  "Betting Platform": "text-amber-400",
};

const categoryIcon: Record<string, LucideIcon> = {
  eCommerce: ShoppingCart,
  DevOps: GitBranch,
  "AI Automation": Bot,
  "Marketing Technology": BarChart2,
  CRM: Users,
  "Enterprise Application": Building2,
  "Betting Platform": Dices,
};

const caseStudies = projects.filter((p) => p.gallery && p.gallery.length > 0);
const rest = projects.filter((p) => !p.gallery || p.gallery.length === 0);

export default function PortfolioPage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-6">Portfolio</p>
            <h1 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
              Case studies from selected work
            </h1>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
              A closer look at projects I&apos;ve built end to end — from architecture and
              backend systems to the interfaces people actually use.
            </p>
          </div>
        </section>

        <CurrentlyWorking />

        {/* Featured case studies */}
        <section className="pb-20 px-6 border-b border-border">
          <div className="max-w-3xl mx-auto flex flex-col gap-10">
            {caseStudies.map((project) => (
              <CaseStudy
                key={project.title}
                project={project}
                icon={categoryIcon[project.category]}
                iconColor={categoryColor[project.category] ?? "text-muted-foreground"}
              />
            ))}
          </div>
        </section>

        {/* Other projects */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-8">More work</p>
            <div className="flex flex-col gap-4">
              {rest.map((project) => {
                const Icon = categoryIcon[project.category];
                const iconColor = categoryColor[project.category] ?? "text-muted-foreground";
                return (
                  <div
                    key={project.title}
                    className="p-5 rounded-xl border border-border bg-card hover:border-white/10 hover:bg-secondary/30 transition-all duration-200"
                  >
                    <div className="flex items-center gap-2.5 flex-wrap mb-3">
                      {Icon && <Icon className={`w-4 h-4 shrink-0 ${iconColor}`} />}
                      <h3 className="text-sm font-semibold text-white">{project.title}</h3>
                      <span className={`text-xs font-mono ${iconColor}`}>{project.category}</span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="text-xs text-muted-foreground/50 font-mono">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-emerald-400 shrink-0">
                        <TrendingUp className="w-3 h-3" />
                        <span className="max-w-[180px] text-right leading-tight">{project.impact}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
