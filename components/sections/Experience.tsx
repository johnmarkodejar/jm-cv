"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 border-b border-border">
      <div className="max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs text-muted-foreground uppercase tracking-widest mb-6"
        >
          Experience
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-heading font-bold text-white mb-10"
        >
          Where I&apos;ve worked
        </motion.h2>

        <div className="flex flex-col gap-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={`${exp.title}-${i}`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-4 sm:gap-8 pb-8 border-b border-border/50 last:border-0 last:pb-0"
            >
              {/* Date + company */}
              <div className="shrink-0">
                <p className="text-xs text-muted-foreground font-mono">{exp.period}</p>
                {exp.company && (
                  <p className="text-xs text-primary mt-1">{exp.company}</p>
                )}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-sm font-semibold text-white mb-2">{exp.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  {exp.description}
                </p>
                <ul className="flex flex-col gap-1.5">
                  {exp.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <span className="text-primary mt-0.5 shrink-0">–</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
