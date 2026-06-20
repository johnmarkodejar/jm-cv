"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, ShoppingCart, GitBranch, Bot, BarChart2, Users, Building2, type LucideIcon } from "lucide-react";
import { projects } from "@/data/portfolio";

const categoryColor: Record<string, string> = {
  eCommerce: "text-blue-400",
  DevOps: "text-cyan-400",
  "AI Automation": "text-violet-400",
  "Marketing Technology": "text-orange-400",
  CRM: "text-emerald-400",
  "Enterprise Application": "text-pink-400",
};

const categoryIcon: Record<string, LucideIcon> = {
  eCommerce: ShoppingCart,
  DevOps: GitBranch,
  "AI Automation": Bot,
  "Marketing Technology": BarChart2,
  CRM: Users,
  "Enterprise Application": Building2,
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 border-b border-border">
      <div className="max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs text-muted-foreground uppercase tracking-widest mb-6"
        >
          Projects
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-heading font-bold text-white mb-10"
        >
          Selected work
        </motion.h2>

        <div className="flex flex-col gap-4">
          {projects.map((project, i) => {
            const Icon = categoryIcon[project.category];
            const iconColor = categoryColor[project.category] ?? "text-muted-foreground";
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group p-5 rounded-xl border border-border bg-card hover:border-white/10 hover:bg-secondary/30 transition-all duration-200 cursor-default"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    {Icon && <Icon className={`w-4 h-4 shrink-0 ${iconColor}`} />}
                    <h3 className="text-sm font-semibold text-white">{project.title}</h3>
                    <span className={`text-xs font-mono ${iconColor}`}>
                      {project.category}
                    </span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground/30 group-hover:text-muted-foreground shrink-0 transition-colors mt-0.5" />
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
