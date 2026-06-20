"use client";

import { motion } from "framer-motion";

const capabilities = [
  "Marketing Funnels", "Funnel Tracking", "Conversion Optimization",
  "User Analytics", "Event Tracking", "Lead Generation Systems",
  "CRM Automation", "Form Development", "Customer Journey Analysis",
];

const tools = ["Amplitude", "Google Analytics", "FunnelFlux", "Pipedrive", "Infusionsoft", "Twilio"];

const funnelSteps = ["Traffic", "Landing Page", "Lead Form", "CRM", "Automation", "Sales Team"];

export default function MarketingTech() {
  return (
    <section id="marketing" className="py-20 px-6 border-b border-border">
      <div className="max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs text-muted-foreground uppercase tracking-widest mb-6"
        >
          Marketing Technology
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-heading font-bold text-white mb-4"
        >
          Technology meets marketing
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-sm text-muted-foreground leading-relaxed mb-10 max-w-xl"
        >
          I bridge the gap between engineering and revenue — implementing the full marketing stack
          from tracking to conversion optimization to CRM automation.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Funnel */}
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">Conversion funnel</p>
            <div className="flex flex-col">
              {funnelSteps.map((step, i) => (
                <div key={step} className="flex flex-col items-start">
                  <div className="flex items-center gap-3 py-2">
                    <span className="text-muted-foreground/60 font-mono text-xs w-4">{i + 1}</span>
                    <span className="text-sm text-foreground">{step}</span>
                  </div>
                  {i < funnelSteps.length - 1 && (
                    <div className="ml-[22px] w-px h-3 bg-border" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Capabilities */}
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">Capabilities</p>
            <div className="flex flex-col gap-2 mb-8">
              {capabilities.map((cap) => (
                <div key={cap} className="flex items-center gap-2 text-xs text-muted-foreground hover:text-white transition-colors">
                  <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                  {cap}
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">Tools</p>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span key={tool} className="px-2.5 py-1 text-xs border border-border rounded-md text-muted-foreground hover:border-white/20 hover:text-white transition-all cursor-default">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
