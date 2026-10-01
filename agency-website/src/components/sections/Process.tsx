"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Search, PenTool, Cpu, Rocket } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    num: "01",
    title: "Discovery & Blueprinting",
    desc: "We analyze your operational bottlenecks to design a tailored technical architecture that scales with your business.",
    icon: Search,
  },
  {
    num: "02",
    title: "UI/UX & Prototyping",
    desc: "Crafting bespoke, high-converting interfaces that command authority and guide user behavior seamlessly.",
    icon: PenTool,
  },
  {
    num: "03",
    title: "Agentic Engineering",
    desc: "Building the engine. We integrate AI agents, automated scraping tools, and scalable backends into your existing workflows.",
    icon: Cpu,
  },
  {
    num: "04",
    title: "Deployment & Optimization",
    desc: "Launching your unfair advantage with zero-downtime CI/CD and providing ongoing, proactive optimization.",
    icon: Rocket,
  }
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        itemsRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-surface-dim relative border-t border-foreground/5">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground tracking-tight mb-4">
            The Workflow
          </h2>
          <p className="text-lg text-foreground/70 font-medium font-sans max-w-xl mx-auto">
            A systematic approach to engineering your digital leverage.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.num}
                ref={(el) => {
                  itemsRef.current[index] = el;
                }}
                className="bg-white rounded-2xl p-8 md:p-10 border border-foreground/5 flex flex-col md:flex-row gap-8 items-start md:items-center shadow-sm"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-background flex items-center justify-center border border-foreground/10 text-primary">
                  <Icon className="w-6 h-6" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-sm font-bold text-primary/50 tracking-widest">{step.num}</span>
                    <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-base text-foreground/70 font-medium font-sans">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
