"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { ArrowUpRight, HeartPulse, Radar, ShieldCheck, Palette, Briefcase, Activity } from "lucide-react";
import GitHubIcon from "@/components/ui/GitHubIcon";
import { site } from "@/config/site";
import { useReveal } from "@/lib/useReveal";
import { cn } from "@/lib/utils";

gsap.registerPlugin(Flip);

type Category = "AI Systems" | "Automation" | "Web Platforms";

const projects: {
  name: string;
  repo: string;
  category: Category;
  summary: string;
  features: string[];
  goodFor: string;
  tech: string[];
  icon: typeof HeartPulse;
  tone: string;
}[] = [
  {
    name: "SummAID",
    repo: "SummAID",
    category: "AI Systems",
    summary: "On-premise AI assistant that turns long patient histories into short, verifiable summaries for doctors.",
    features: ["Citations back to source reports", "Chat with patient history", "Allergy safety checks"],
    goodFor: "Clinics & hospitals",
    tech: ["Python", "RAG", "LLMs"],
    icon: HeartPulse,
    tone: "from-rose-500/15 to-rose-500/0 text-rose-600",
  },
  {
    name: "Sisu",
    repo: "Sisu",
    category: "Automation",
    summary: "Lead discovery pipeline that finds local businesses, collects contact details and drafts personalised outreach.",
    features: ["Finds businesses by city & niche", "Automatic contact extraction", "AI-written outreach drafts"],
    goodFor: "Agencies & B2B sales teams",
    tech: ["Python", "Playwright", "PostgreSQL"],
    icon: Radar,
    tone: "from-secondary/20 to-secondary/0 text-secondary",
  },
  {
    name: "Honesta",
    repo: "Honesta",
    category: "Web Platforms",
    summary: "Real-time proctoring for online exams that flags tab switching and unusual typing or mouse behaviour.",
    features: ["Live risk score per student", "Admin monitoring dashboard", "Full event log for review"],
    goodFor: "Coaching & tuition centres",
    tech: ["React", "Node.js", "Socket.io"],
    icon: ShieldCheck,
    tone: "from-primary/15 to-primary/0 text-primary",
  },
  {
    name: "ArtisanAI",
    repo: "Artisan-AI",
    category: "AI Systems",
    summary: "AI co-pilot that helps local artisans sell online: product stories, design ideas and marketing in one place.",
    features: ["Product stories from a photo + voice note", "Trend-aware design suggestions", "Automated marketing copy"],
    goodFor: "Retail & small sellers",
    tech: ["JavaScript", "Generative AI"],
    icon: Palette,
    tone: "from-accent/25 to-accent/0 text-[#B07F00]",
  },
  {
    name: "FreelanceHub",
    repo: "FreelanceHub",
    category: "Web Platforms",
    summary: "Full-stack marketplace where clients post projects and freelancers bid, with separate dashboards per role.",
    features: ["Client, freelancer & admin dashboards", "Google sign-in", "Real-time notifications"],
    goodFor: "Service marketplaces",
    tech: ["React", "Express", "MySQL"],
    icon: Briefcase,
    tone: "from-emerald-500/15 to-emerald-500/0 text-emerald-600",
  },
  {
    name: "Aegis Command",
    repo: "aura-sentinel",
    category: "AI Systems",
    summary: "Real-time monitoring platform that detects threats and explains them in plain language, with live dashboards.",
    features: ["Live event monitoring", "AI-generated explanations", "Executive & analytics dashboards"],
    goodFor: "Businesses that need live dashboards",
    tech: ["RAG", "WebSockets", "React"],
    icon: Activity,
    tone: "from-violet-500/15 to-violet-500/0 text-violet-600",
  },
];

const filters: ("All" | Category)[] = ["All", "AI Systems", "Automation", "Web Platforms"];

/** Subtle 3D tilt that follows the cursor. */
function tilt(e: React.MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width - 0.5;
  const y = (e.clientY - r.top) / r.height - 0.5;
  gsap.to(el, { rotateY: x * 8, rotateX: -y * 8, duration: 0.4, ease: "power2.out", transformPerspective: 900 });
}
function untilt(e: React.MouseEvent<HTMLElement>) {
  gsap.to(e.currentTarget, { rotateY: 0, rotateX: 0, duration: 0.6, ease: "elastic.out(1, 0.5)" });
}

export default function Work() {
  const ref = useReveal<HTMLElement>();
  const gridRef = useRef<HTMLDivElement>(null);
  const flipState = useRef<Flip.FlipState | null>(null);
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  function choose(f: (typeof filters)[number]) {
    if (f === active || !gridRef.current) return;
    flipState.current = Flip.getState(gridRef.current.querySelectorAll("[data-card]"));
    setActive(f);
  }

  // After React re-renders with the new filter, animate cards from their old spots.
  useLayoutEffect(() => {
    const state = flipState.current;
    if (!state) return;
    flipState.current = null;
    Flip.from(state, {
      duration: 0.6,
      ease: "power3.inOut",
      absolute: true,
      onEnter: (els) => gsap.fromTo(els, { opacity: 0, scale: 0.85 }, { opacity: 1, scale: 1, duration: 0.5, delay: 0.15 }),
      onLeave: (els) => gsap.to(els, { opacity: 0, scale: 0.85, duration: 0.35 }),
    });
  }, [active]);

  return (
    <section ref={ref} id="work" className="py-24 relative bg-surface-dim border-y border-foreground/5 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10">
          <div className="max-w-2xl" data-reveal>
            <p className="text-sm font-bold uppercase tracking-widest text-secondary mb-3">Our work</p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight mb-5">
              Real systems we&apos;ve designed and built.
            </h2>
            <p className="text-lg text-foreground/70">
              From AI assistants to automation pipelines and full web platforms. The same skills go into every
              project we take on for you.
            </p>
          </div>
          <a
            data-reveal
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-5 py-3 rounded-lg bg-foreground text-white font-semibold hover:bg-foreground/85 transition-colors shrink-0"
          >
            <GitHubIcon className="w-5 h-5" />
            View all on GitHub
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        <div data-reveal className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Filter projects">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={active === f}
              onClick={() => choose(f)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-semibold border transition-colors",
                active === f
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-foreground/70 border-foreground/10 hover:border-foreground/30"
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 [perspective:1000px]">
          {projects.map(({ name, repo, category, summary, features, goodFor, tech, icon: Icon, tone }) => (
            <article
              key={name}
              data-card
              data-reveal
              onMouseMove={tilt}
              onMouseLeave={untilt}
              className={cn(
                "group relative bg-white rounded-2xl border border-foreground/5 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden [transform-style:preserve-3d]",
                active !== "All" && active !== category && "hidden"
              )}
            >
              <div className={cn("h-28 bg-gradient-to-br relative flex items-end p-6", tone)}>
                <span className="absolute top-5 right-5 text-[11px] font-bold uppercase tracking-widest text-foreground/50 bg-white/70 backdrop-blur px-2.5 py-1 rounded-full">
                  {category}
                </span>
                <span className="w-14 h-14 rounded-xl bg-white shadow-md flex items-center justify-center translate-y-10 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
                  <Icon className="w-7 h-7" />
                </span>
              </div>

              <div className="p-6 pt-12 flex flex-col flex-1">
                <h3 className="text-xl font-heading font-bold mb-2">{name}</h3>
                <p className="text-foreground/70 text-[15px] leading-relaxed mb-5">{summary}</p>
                <ul className="space-y-1.5 mb-5">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground/75">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="text-xs font-semibold text-foreground/50 mb-5">
                  Useful for: <span className="text-foreground/80">{goodFor}</span>
                </p>

                <div className="mt-auto flex items-center justify-between gap-3 pt-5 border-t border-foreground/5">
                  <div className="flex flex-wrap gap-1.5">
                    {tech.map((t) => (
                      <span key={t} className="px-2 py-0.5 text-[11px] font-semibold rounded bg-surface-dim text-foreground/70">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={`${site.github}/${repo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${name} on GitHub`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-secondary transition-colors shrink-0"
                  >
                    <GitHubIcon className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
