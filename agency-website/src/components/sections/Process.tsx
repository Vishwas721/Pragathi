"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { PhoneCall, ClipboardList, Hammer, Rocket } from "lucide-react";
import { useReveal } from "@/lib/useReveal";

const steps = [
  {
    num: "01",
    title: "Free consultation",
    desc: "A 20–30 minute call to understand your business, your customers and what's slowing you down.",
    icon: PhoneCall,
  },
  {
    num: "02",
    title: "Proposal & fixed quote",
    desc: "A clear plan of what we'll build, the timeline and the price, before you commit to anything.",
    icon: ClipboardList,
  },
  {
    num: "03",
    title: "Build & review",
    desc: "We build in short rounds and share progress so you can give feedback early and often.",
    icon: Hammer,
  },
  {
    num: "04",
    title: "Launch & support",
    desc: "We go live, train your team if needed, and stay available for updates and improvements.",
    icon: Rocket,
  },
];

export default function Process() {
  const ref = useReveal<HTMLElement>();
  const lineRef = useRef<HTMLDivElement>(null);

  // Progress line that fills as the visitor scrolls through the steps.
  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { trigger: lineRef.current, start: "top 85%", end: "top 35%", scrub: 0.6 },
        }
      );
    });
    return () => mm.revert();
  }, []);

  return (
    <section ref={ref} id="process" className="py-24 bg-surface-dim border-y border-foreground/5">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-16 text-center max-w-2xl mx-auto" data-reveal>
          <p className="text-sm font-bold uppercase tracking-widest text-secondary mb-3">How it works</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight mb-5">
            From first call to launch in four simple steps.
          </h2>
          <p className="text-lg text-foreground/70">No tech jargon. You always know what&apos;s happening and what comes next.</p>
        </div>

        <div className="relative lg:pt-10">
          <div className="hidden lg:block absolute top-[7px] left-8 right-8 h-0.5 bg-foreground/10" aria-hidden="true">
            <div ref={lineRef} className="h-full bg-gradient-to-r from-primary via-secondary to-accent origin-left" />
          </div>
          <ol className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map(({ num, title, desc, icon: Icon }) => (
              <li key={num} data-reveal="flip" className="relative bg-white rounded-2xl p-7 border border-foreground/5 shadow-sm">
                <span className="hidden lg:block absolute -top-10 left-7 w-4 h-4 rounded-full bg-white border-[3px] border-secondary" aria-hidden="true" />
                <div className="flex items-center justify-between mb-6">
                  <span className="w-12 h-12 rounded-full bg-background border border-foreground/10 text-primary flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </span>
                  <span className="font-heading font-extrabold text-3xl text-foreground/10">{num}</span>
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">{title}</h3>
                <p className="text-foreground/70 text-[15px] leading-relaxed">{desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
