"use client";

import { motion } from "framer-motion";

const pillars = [
  "Software Engineering",
  "Cloud Architecture",
  "DevOps & CI/CD",
  "AI Automation",
  "Marketing Technology",
  "Business Process Optimization",
];

export default function About() {
  return (
    <section id="about" className="py-20 px-6 border-b border-border">
      <div className="max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs text-muted-foreground uppercase tracking-widest mb-10"
        >
          About
        </motion.p>

        <div className="grid grid-cols-1 gap-10 items-start">

          {/* Bio + pillars */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div>
              <p className="text-white leading-relaxed mb-4">
                I&apos;ve been writing code since 2007 — starting with Visual Basic desktop apps, moving
                through PHP and full-stack web development, and eventually into cloud infrastructure,
                DevOps, and AI automation.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                What sets me apart isn&apos;t just technical depth — it&apos;s the breadth. I can pick up a
                project from the idea stage, architect the system, write the code, ship it to AWS,
                set up CI/CD, wire up the CRM, and build the analytics stack to measure it.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                I&apos;m based in Pasig City, Philippines and work with clients globally — from startups
                to enterprises across Southeast Asia, the US, and Australia.
              </p>
            </div>

            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">What I do</p>
              <div className="flex flex-col gap-2">
                {pillars.map((p, i) => (
                  <div key={p} className="flex items-center gap-3 text-sm text-muted-foreground hover:text-white transition-colors">
                    <span className="text-muted-foreground/60 font-mono text-xs w-5 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {p}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
