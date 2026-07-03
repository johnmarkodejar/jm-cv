import type { Metadata } from "next";
import Image from "next/image";
import { TrendingUp, ShoppingCart, GitBranch, Bot, BarChart2, Users, Building2, type LucideIcon } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { projects } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Case studies and selected work from JM Reyes — full-stack engineering, DevOps, and AI automation projects.",
};

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

const featuredTitle = "HOAS — HOA Management Platform";
const featured = projects.find((p) => p.title === featuredTitle)!;
const rest = projects.filter((p) => p.title !== featuredTitle);

const gallery = [
  { src: "/hoas-screenshot.png", alt: "HOAS sign-in screen", caption: "Sign-in" },
  { src: "/portfolio/hoas-property-detail.png", alt: "Single property detail page with homeowner and invoice history", caption: "Property detail" },
  { src: "/portfolio/hoas-billing.png", alt: "Billing and invoicing dashboard with outstanding balances", caption: "Billing & invoicing" },
  { src: "/portfolio/hoas-chart-of-accounts.png", alt: "Chart of accounts for double-entry bookkeeping", caption: "Chart of accounts" },
  { src: "/portfolio/hoas-journal-entries.png", alt: "Journal entries ledger with posted transactions", caption: "Journal entries" },
  { src: "/portfolio/hoas-trial-balance.png", alt: "Generated trial balance report, balanced", caption: "Trial balance" },
  { src: "/portfolio/hoas-amenities.png", alt: "Amenities management with rates for shared facilities", caption: "Amenities" },
];

export default function PortfolioPage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-6">Portfolio</p>
            <h1 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
              Case studies from selected work
            </h1>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
              A closer look at projects I&apos;ve built end to end — from architecture and
              backend systems to the interfaces people actually use.
            </p>
          </div>
        </section>

        {/* Featured case study */}
        <section className="pb-20 px-6 border-b border-border">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-xl border border-border bg-card overflow-hidden">
              <div className="bg-secondary/40 p-4 sm:p-6">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {gallery.map((shot) => (
                    <figure key={shot.src} className="group">
                      <div className="rounded-lg border border-border overflow-hidden bg-background">
                        <Image
                          src={shot.src}
                          alt={shot.alt}
                          width={1440}
                          height={900}
                          className="w-full h-auto group-hover:scale-[1.03] transition-transform duration-300"
                        />
                      </div>
                      <figcaption className="text-[11px] text-muted-foreground mt-1.5 text-center">
                        {shot.caption}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-2.5 flex-wrap mb-3">
                  <Building2 className="w-4 h-4 shrink-0 text-pink-400" />
                  <h2 className="text-base font-semibold text-white">{featured.title}</h2>
                  <span className="text-xs font-mono text-pink-400">{featured.category}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {featured.description}
                </p>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {featured.technologies.map((tech) => (
                      <span key={tech} className="text-xs text-muted-foreground/60 font-mono px-2 py-0.5 rounded border border-border">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>{featured.impact}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other projects */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs text-muted-foreground uppercase tracking-widest mb-8">More work</p>
            <div className="flex flex-col gap-4">
              {rest.map((project) => {
                const Icon = categoryIcon[project.category];
                const iconColor = categoryColor[project.category] ?? "text-muted-foreground";
                return (
                  <div
                    key={project.title}
                    className="p-5 rounded-xl border border-border bg-card hover:border-white/10 hover:bg-secondary/30 transition-all duration-200"
                  >
                    <div className="flex items-center gap-2.5 flex-wrap mb-3">
                      {Icon && <Icon className={`w-4 h-4 shrink-0 ${iconColor}`} />}
                      <h3 className="text-sm font-semibold text-white">{project.title}</h3>
                      <span className={`text-xs font-mono ${iconColor}`}>{project.category}</span>
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
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
