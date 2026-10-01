"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, BrainCircuit, LineChart } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    title: "Custom Web Development",
    description: "High-performance, bespoke web applications engineered for scale. Built with Next.js, React, and seamless API integrations.",
    icon: Code2,
    accent: "text-primary",
  },
  {
    title: "Intelligent Web Scraping",
    description: "Extract structured data at scale. We build robust, reliable scrapers that bypass anti-bot systems securely.",
    icon: LineChart,
    accent: "text-secondary",
  },
  {
    title: "AI-Powered Automation",
    description: "Agentic workflows and tailored LLM integrations designed to put your repetitive business processes on autopilot.",
    icon: BrainCircuit,
    accent: "text-accent",
  }
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="capabilities" className="py-24 relative z-10 w-full bg-background border-t border-foreground/5">
      <div className="container relative z-10 mx-auto px-6 max-w-6xl">
        
        <div className="mb-16 max-w-3xl text-center mx-auto">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-foreground tracking-tight">
            Capabilities
          </h2>
          <p className="text-lg text-foreground/70 font-medium font-sans">
            We deliver highly focused, premium solutions designed to drive revenue and automate the mundane.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className="relative bg-white rounded-2xl p-10 flex flex-col items-start border border-foreground/5 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="p-4 rounded-xl bg-surface-dim mb-8">
                  <Icon className={`w-8 h-8 ${service.accent}`} />
                </div>

                <h3 className="text-xl md:text-2xl font-heading font-bold mb-4 text-foreground">
                  {service.title}
                </h3>
                <p className="text-base leading-relaxed text-foreground/70 font-medium font-sans">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
