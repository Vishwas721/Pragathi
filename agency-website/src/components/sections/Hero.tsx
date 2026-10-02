"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight, Check } from "lucide-react";
import LiveFeed from "@/components/ui/LiveFeed";

const highlights = ["Fixed quotes, no surprises", "Delivered in weeks, not months", "Ongoing support included"];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from("[data-hero]", { y: 28, opacity: 0, duration: 0.9, stagger: 0.12, delay: 0.1 })
        .from("[data-hero-visual]", { x: 40, opacity: 0, rotate: 2, duration: 1 }, "-=0.7")
        .from("[data-hero-card]", { y: 16, opacity: 0, duration: 0.5, stagger: 0.12 }, "-=0.6");

      // Glows drift with the cursor for a bit of depth.
      const onMove = (e: MouseEvent) => {
        const x = e.clientX / window.innerWidth - 0.5;
        const y = e.clientY / window.innerHeight - 0.5;
        gsap.to("[data-glow]", { x: x * 60, y: y * 40, duration: 1.2, ease: "power2.out" });
      };
      window.addEventListener("mousemove", onMove);
      return () => window.removeEventListener("mousemove", onMove);
    }, ref);
    return () => mm.revert();
  }, []);

  return (
    <section
      id="top"
      ref={ref}
      className="relative w-full overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
    >
      <div data-glow className="glow-subtle bg-secondary w-[500px] h-[500px] -top-20 -left-40" />
      <div data-glow className="glow-subtle bg-primary w-[600px] h-[600px] -bottom-60 -right-40 opacity-10" />

      <div className="container relative z-10 mx-auto px-6 max-w-6xl grid lg:grid-cols-[1.15fr_1fr] gap-14 items-center">
        <div>
          <div
            data-hero
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-foreground/10 bg-white/60 backdrop-blur-sm shadow-sm mb-7"
          >
            <span className="w-2 h-2 rounded-full bg-secondary" />
            <span className="text-xs font-semibold tracking-wider text-foreground/80 uppercase">
              Technology partner for growing businesses
            </span>
          </div>

          <h1
            data-hero
            className="text-4xl md:text-5xl lg:text-[3.6rem] font-heading font-extrabold tracking-tight text-foreground leading-[1.1]"
          >
            Websites & automation that bring in customers{" "}
            <span className="text-primary">and save you hours.</span>
          </h1>

          <p data-hero className="mt-6 text-lg md:text-xl text-foreground/70 max-w-xl leading-relaxed">
            We build professional websites, online booking and enquiry systems, and custom software for gyms,
            coaching centres, clinics and other local businesses, so you can focus on running yours.
          </p>

          <div data-hero className="flex flex-col sm:flex-row gap-4 mt-9">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 font-bold text-white bg-primary rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              Get a free consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-7 py-4 font-semibold text-foreground bg-white border border-foreground/10 rounded-lg hover:border-foreground/30 hover:shadow-sm transition-all duration-300"
            >
              See what we do
            </a>
          </div>

          <ul data-hero className="flex flex-wrap gap-x-6 gap-y-2 mt-9">
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-2 text-sm font-medium text-foreground/70">
                <Check className="w-4 h-4 text-secondary" strokeWidth={3} />
                {h}
              </li>
            ))}
          </ul>
        </div>

        {/* Product-style visual: what an automated front desk looks like */}
        <div className="relative" aria-hidden="true" data-hero-visual>
          <div className="absolute inset-0 -m-4 rounded-3xl bg-primary/[0.04] rotate-2" />
          <LiveFeed />
          <div className="absolute -left-6 -bottom-6 hidden sm:flex items-center gap-2 bg-white rounded-xl border border-foreground/10 shadow-lg px-4 py-3 animate-[float_6s_ease-in-out_infinite]">
            <span className="w-2 h-2 rounded-full bg-secondary" />
            <span className="text-sm font-semibold">Website live in 2 weeks</span>
          </div>
          <div className="absolute -right-4 -top-5 hidden sm:flex items-center gap-2 bg-foreground text-white rounded-xl shadow-lg px-4 py-2.5 animate-[float_7s_ease-in-out_1s_infinite]">
            <span className="text-sm font-semibold">Enquiries answered 24/7</span>
          </div>
        </div>
      </div>
    </section>
  );
}
