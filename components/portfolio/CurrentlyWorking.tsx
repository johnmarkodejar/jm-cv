"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const shipped = [
  "Fully-offline tenant activation — serial-number onboarding for businesses with no reliable internet",
  "Convert-to-Cloud migration path, moving an offline tenant's data online without downtime",
  "Product variants extended to offline mode, matching the cloud admin",
  "Customer management — purchase history and lifetime spend, attached right at checkout",
  "Full audit trail across the tenant and platform APIs — logins, product, customer, and sale actions",
  "Dashboard with today's sales, hourly trends, top products, and low-stock alerts",
];

export default function CurrentlyWorking() {
  return (
    <section className="py-20 px-6 border-b border-border">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 mb-6"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          <p className="text-xs text-emerald-400 uppercase tracking-widest font-medium">
            Currently working on
          </p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-heading font-bold text-white mb-4"
        >
          Building TindaOne, a multi-branch POS SaaS
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-xl"
        >
          An offline-first, multi-tenant point of sale for growing Philippine businesses —
          designed so a single tindahan or a multi-branch operation can keep selling through
          an internet outage and sync automatically the moment it&apos;s back. It&apos;s in
          active, daily development right now.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="rounded-xl border border-border bg-card p-5 sm:p-6"
        >
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">
            Recently shipped
          </p>
          <ul className="flex flex-col gap-3">
            {shipped.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed"
              >
                <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                {item}
              </motion.li>
            ))}
          </ul>

          <a
            href="https://tindaone.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-primary font-medium mt-6 hover:underline underline-offset-2"
          >
            See TindaOne live
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
