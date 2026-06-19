"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 border-b border-border">
      <div className="max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs text-muted-foreground uppercase tracking-widest mb-6"
        >
          Skills
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-heading font-bold text-white mb-10"
        >
          Technical expertise across the full stack
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-3">
                {cat.title}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`px-2.5 py-1 rounded-md text-xs border transition-colors cursor-default ${
                      skill.level === "Expert"
                        ? "border-primary/30 text-primary bg-primary/5 hover:bg-primary/10"
                        : skill.level === "Advanced"
                        ? "border-border text-foreground hover:border-white/20"
                        : "border-border/50 text-muted-foreground"
                    }`}
                  >
                    {skill.name}
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
