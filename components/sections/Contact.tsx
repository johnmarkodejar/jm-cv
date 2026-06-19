"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { personal } from "@/data/portfolio";
import type { ContactFormData } from "@/types";

const budgetOptions = [
  "< $1,000", "$1,000 – $5,000", "$5,000 – $15,000",
  "$15,000 – $50,000", "$50,000+", "Let's discuss",
];

const initialForm: ContactFormData = {
  name: "", company: "", email: "", phone: "", budget: "", message: "",
};

export default function Contact() {
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const validate = () => {
    const errs: Partial<ContactFormData> = {};
    if (!form.name.trim()) errs.name = "Required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Valid email required";
    if (!form.message.trim()) errs.message = "Required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  };

  const field = (key: keyof ContactFormData, val: string) => {
    setForm((f) => ({ ...f, [key]: val }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const inputClass = (key?: keyof ContactFormData) =>
    `w-full bg-secondary/40 border rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-muted-foreground/40 focus:outline-none focus:ring-1 transition-all ${
      key && errors[key]
        ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
        : "border-border focus:border-primary/50 focus:ring-primary/10"
    }`;

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs text-muted-foreground uppercase tracking-widest mb-6"
        >
          Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-heading font-bold text-white mb-4"
        >
          Let&apos;s work together
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-sm text-muted-foreground mb-10"
        >
          Got a project in mind? Reach out directly at{" "}
          <a href={`mailto:${personal.email}`} className="text-white hover:text-primary transition-colors">
            {personal.email}
          </a>{" "}
          or use the form below.
        </motion.p>

        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-16 gap-4 text-center"
          >
            <CheckCircle2 className="w-10 h-10 text-emerald-400" />
            <p className="text-white font-semibold">Message sent!</p>
            <p className="text-sm text-muted-foreground">I&apos;ll get back to you within 24 hours.</p>
            <button onClick={() => setStatus("idle")} className="text-xs text-primary hover:underline mt-2">
              Send another
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input
                  placeholder="Name *"
                  value={form.name}
                  onChange={(e) => field("name", e.target.value)}
                  className={inputClass("name")}
                />
                {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
              </div>
              <input
                placeholder="Company"
                value={form.company}
                onChange={(e) => field("company", e.target.value)}
                className={inputClass()}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input
                  type="email"
                  placeholder="Email *"
                  value={form.email}
                  onChange={(e) => field("email", e.target.value)}
                  className={inputClass("email")}
                />
                {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
              </div>
              <input
                placeholder="Phone"
                value={form.phone}
                onChange={(e) => field("phone", e.target.value)}
                className={inputClass()}
              />
            </div>

            <select
              value={form.budget}
              onChange={(e) => field("budget", e.target.value)}
              className={inputClass()}
            >
              <option value="">Budget range</option>
              {budgetOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
            </select>

            <div>
              <textarea
                placeholder="Tell me about your project... *"
                value={form.message}
                onChange={(e) => field("message", e.target.value)}
                rows={5}
                className={`${inputClass("message")} resize-none`}
              />
              {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
            </div>

            {status === "error" && (
              <div className="flex items-center gap-2 text-xs text-red-400 p-3 rounded-lg border border-red-500/20 bg-red-500/5">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                Something went wrong. Email me directly at {personal.email}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="flex items-center gap-2 px-5 py-2.5 bg-white text-black text-sm font-medium rounded-lg hover:bg-white/90 disabled:opacity-50 transition-all"
            >
              {status === "loading" ? (
                <div className="w-3.5 h-3.5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
              ) : (
                <Send className="w-3.5 h-3.5" />
              )}
              {status === "loading" ? "Sending..." : "Send message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
