"use client";

import { motion } from "framer-motion";

const aiTools = ["ChatGPT", "Claude", "Gemini", "n8n", "Botpress", "Zapier"];

const workflow = [
  { label: "Lead Capture", desc: "Form, ad, or landing page" },
  { label: "AI Qualification", desc: "LLM scores and categorizes" },
  { label: "CRM Entry", desc: "Auto-create deal & contact" },
  { label: "Email Automation", desc: "Trigger personalized sequence" },
  { label: "Sales Team Alert", desc: "Slack / SMS notification" },
];

const useCases = [
  "Lead qualification and routing",
  "CRM data entry and deal management",
  "Email and SMS follow-up sequences",
  "Customer onboarding workflows",
  "Invoice generation and payment reminders",
  "Internal reporting and alerts",
  "AI-powered chatbots and assistants",
];

export default function AIAutomation() {
  return (
    <section id="ai" className="py-20 px-6 border-b border-border">
      <div className="max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs text-muted-foreground uppercase tracking-widest mb-6"
        >
          AI Automation
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-heading font-bold text-white mb-4"
        >
          AI-powered business automation
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-sm text-muted-foreground leading-relaxed mb-10 max-w-xl"
        >
          I build intelligent workflows that cut repetitive work, reduce manual effort,
          and create compounding leverage across your entire operation.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Workflow */}
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">Example pipeline</p>
            <div className="flex flex-col">
              {workflow.map((step, i) => (
                <div key={step.label} className="flex flex-col items-start">
                  <div className="flex items-start gap-3 py-2">
                    <span className="text-muted-foreground/60 font-mono text-xs w-4 mt-0.5 shrink-0">{i + 1}</span>
                    <div>
                      <p className="text-sm text-white">{step.label}</p>
                      <p className="text-xs text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                  {i < workflow.length - 1 && (
                    <div className="ml-[22px] w-px h-3 bg-border" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Use cases + tools */}
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">What I automate</p>
            <div className="flex flex-col gap-2 mb-8">
              {useCases.map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs text-muted-foreground hover:text-white transition-colors">
                  <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                  {item}
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">Tools</p>
            <div className="flex flex-wrap gap-2">
              {aiTools.map((tool) => (
                <span key={tool} className="px-2.5 py-1 text-xs border border-border rounded-md text-muted-foreground hover:border-primary/30 hover:text-primary transition-all cursor-default">
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
