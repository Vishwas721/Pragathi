"use client";

import { Handshake, BadgeCheck, Zap, LifeBuoy } from "lucide-react";
import { useReveal } from "@/lib/useReveal";

const reasons = [
  {
    title: "You talk to the person building it",
    desc: "No account managers or hand-offs. You work directly with the developer, so nothing gets lost in translation.",
    icon: Handshake,
  },
  {
    title: "Clear, fixed pricing",
    desc: "You get a written quote with the scope spelled out before any work starts. No hidden costs later.",
    icon: BadgeCheck,
  },
  {
    title: "Fast turnaround",
    desc: "Most business websites go live in 1–3 weeks. You see progress early and give feedback along the way.",
    icon: Zap,
  },
  {
    title: "Support after launch",
    desc: "We don't disappear after delivery. Updates, fixes and new features are a message away.",
    icon: LifeBuoy,
  },
];

export default function WhyUs() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-6xl grid lg:grid-cols-[1fr_1.4fr] gap-14 items-start">
        <div data-reveal="left" className="lg:sticky lg:top-28">
          <p className="text-sm font-bold uppercase tracking-widest text-secondary mb-3">Why Pragathi</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight mb-5">
            A tech partner that treats your business like its own.
          </h2>
          <p className="text-lg text-foreground/70">
            Big agencies are expensive and slow. Cheap templates don&apos;t fit how you work. We sit in between:
            custom work, at a price that makes sense for small and mid-sized businesses.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {reasons.map(({ title, desc, icon: Icon }) => (
            <div key={title} data-reveal="right" className="bg-white rounded-2xl p-7 border border-foreground/5 shadow-sm">
              <Icon className="w-7 h-7 text-primary mb-5" />
              <h3 className="font-heading font-bold text-lg mb-2">{title}</h3>
              <p className="text-foreground/70 text-[15px] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
