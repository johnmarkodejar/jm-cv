"use client";

import { motion } from "framer-motion";
import { Code2, GitBranch, Repeat2, Cloud, Bot, Users, TrendingUp, Lightbulb, type LucideIcon } from "lucide-react";
import { services } from "@/data/portfolio";

const iconMap: Record<string, LucideIcon> = {
  Code2, GitBranch, Repeat2, Cloud, Bot, Users, TrendingUp, Lightbulb,
};

function ServiceIcon({ name }: { name: string }) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon className="w-4 h-4 text-primary shrink-0 mt-0.5" />;
}

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 border-b border-border">
      <div className="max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs text-muted-foreground uppercase tracking-widest mb-6"
        >
          Services
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-heading font-bold text-white mb-10"
        >
          What I build & deliver
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border rounded-xl overflow-hidden border border-border">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="bg-card p-6 hover:bg-secondary/40 transition-colors group"
            >
              <div className="flex items-start gap-3 mb-2">
                <ServiceIcon name={service.icon} />
                <h3 className="text-sm font-semibold text-white group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {service.technologies.map((tech) => (
                  <span key={tech} className="text-xs text-muted-foreground/60 font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
