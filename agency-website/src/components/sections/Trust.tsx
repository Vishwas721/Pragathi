"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  {
    name: "Lead Radar",
    category: "Intelligent Web Scraping",
    impact: "Increased qualified leads by 340% within 60 days.",
    tech: ["Python", "Playwright", "FastAPI"],
  },
  {
    name: "SummAID",
    category: "AI-Powered Automation",
    impact: "Reduced manual data entry hours by 85% per week.",
    tech: ["OpenAI API", "Node.js", "LangChain"],
  },
  {
    name: "ArtisanAI",
    category: "Custom Web Application",
    impact: "Scaled to 50k MRR with zero downtime infrastructure.",
    tech: ["Next.js", "Tailwind CSS", "Zustand"],
  },
];

export default function Trust() {
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
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="work" className="py-24 relative overflow-hidden bg-background border-t border-foreground/5">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-foreground tracking-tight">
              Selected Work
            </h2>
            <p className="text-lg text-foreground/70 font-medium font-sans">
              We engineer systems that solve complex business bottlenecks.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.name}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="group relative bg-white rounded-2xl p-8 transition-all duration-300 cursor-pointer border border-foreground/5 shadow-sm hover:shadow-lg hover:-translate-y-1 flex flex-col h-full"
            >
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-6">
                  <p className="text-xs font-bold tracking-widest uppercase text-primary/70">
                    {project.category}
                  </p>
                  <ArrowRight className="w-5 h-5 text-foreground/20 group-hover:text-secondary transition-colors" />
                </div>
                
                <h3 className="text-2xl font-heading font-bold mb-4 text-foreground">
                  {project.name}
                </h3>
                
                <p className="text-base text-foreground/70 font-medium font-sans mb-8">
                  {project.impact}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 text-xs font-semibold rounded-md bg-surface-dim text-foreground/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
