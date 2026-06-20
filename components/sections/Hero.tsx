"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowDown } from "lucide-react";
import { personal, techStack } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Avatar + status */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-heading font-bold text-sm shrink-0 select-none">
            JM
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
              <span className="text-xs text-emerald-400 font-medium">Available for projects</span>
            </div>
            <div className="flex items-center gap-1.5 text-muted-foreground text-xs mt-0.5">
              <MapPin className="w-3 h-3" />
              {personal.location}
            </div>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-heading font-bold text-white leading-tight tracking-tight mb-6"
        >
          Hey, I&apos;m JM —{" "}
          <span className="text-white/55 font-normal">
            I build scalable software, automate businesses, and architect cloud systems.
          </span>
        </motion.h1>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground leading-relaxed mb-8 max-w-2xl"
        >
          Senior Full-Stack Engineer with 15+ years of experience. I help companies ship
          products, design infrastructure, implement DevOps, build AI workflows, and optimize
          their entire technology stack — from code to cloud to conversion.
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center gap-3 mb-12"
        >
<a
            href="/api/resume"
            download
            className="px-5 py-2 border border-border text-sm text-muted-foreground hover:text-white hover:border-white/20 rounded-lg transition-all"
          >
            Download resume
          </a>
          <span className="text-sm text-muted-foreground">
            You can reach me via{" "}
            <a
              href={`mailto:${personal.email}`}
              className="text-primary font-medium underline underline-offset-2 decoration-primary/40 hover:decoration-primary transition-colors"
            >
              {personal.email}
            </a>
          </span>
        </motion.div>

        {/* Tech stack row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-xs text-muted-foreground mb-3 uppercase tracking-widest">Stack</p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 + i * 0.04 }}
                className="px-3 py-1 text-xs rounded-full border border-border text-muted-foreground hover:border-primary/40 hover:text-white transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Scroll hint */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-white transition-colors mt-16"
        >
          <ArrowDown className="w-3.5 h-3.5" />
          scroll to explore
        </motion.a>
      </div>
    </section>
  );
}
