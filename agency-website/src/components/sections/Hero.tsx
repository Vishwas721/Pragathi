"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight, ArrowDown } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      headingRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.2 }
    )
    .fromTo(
      textRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.8"
    )
    .fromTo(
      buttonsRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.6"
    );
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-center items-center text-center overflow-hidden pt-20"
    >
      {/* Subtle Background Glows */}
      <div className="glow-subtle bg-secondary w-[500px] h-[500px] top-0 left-[-100px]"></div>
      <div className="glow-subtle bg-primary w-[600px] h-[600px] bottom-[-200px] right-[-100px] opacity-10"></div>
      
      <div className="container relative z-10 mx-auto px-6 max-w-5xl">
        <div className="flex flex-col items-center space-y-8">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-foreground/10 bg-white/50 backdrop-blur-sm shadow-sm">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            <span className="text-xs font-semibold tracking-widest text-foreground uppercase">Pragathi Solutions</span>
          </div>

          <h1 
            ref={headingRef}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight text-foreground leading-[1.15]"
          >
            Architecting Unfair Advantages <br className="hidden md:block"/>
            for <span className="text-primary">Modern Businesses.</span>
          </h1>

          <p 
            ref={textRef}
            className="text-lg md:text-xl text-foreground/70 max-w-2xl font-medium leading-relaxed font-sans"
          >
            We engineer bespoke digital experiences, intelligent scraping engines, and automated workflows that streamline operations and drive scale.
          </p>

          <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center gap-5 pt-8">
            <button 
              onClick={() => handleScrollTo('contact')}
              className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-primary rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <span className="relative flex items-center gap-2 text-base">
                Automate Your Workflow
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button 
              onClick={() => handleScrollTo('work')}
              className="group inline-flex items-center justify-center px-8 py-4 font-semibold text-foreground bg-white border border-foreground/10 rounded-lg hover:border-foreground/30 hover:shadow-sm transition-all duration-300 text-base gap-2"
            >
              View Our Work
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform text-foreground/50" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
