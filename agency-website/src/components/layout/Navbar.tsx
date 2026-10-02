"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { navLinks, site } from "@/config/site";
import { cn } from "@/lib/utils";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-2.5" aria-label={`${site.name} home`}>
      <span
        className={cn(
          "w-9 h-9 rounded-lg flex items-center justify-center font-heading font-extrabold text-lg shadow-sm",
          inverted ? "bg-white text-foreground" : "bg-primary text-white"
        )}
      >
        P
      </span>
      <span className={cn("font-heading font-bold text-lg tracking-tight", inverted ? "text-white" : "text-foreground")}>
        {site.shortName}
        <span className="text-secondary">.</span>
        <span className={cn("font-semibold", inverted ? "text-white/60" : "text-foreground/60")}> Solutions</span>
      </span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled || open
          ? "bg-background/90 backdrop-blur-md border-b border-foreground/10 shadow-[0_1px_12px_rgba(10,17,40,0.04)]"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <nav className="container mx-auto px-6 max-w-6xl h-[72px] flex items-center justify-between">
        <Logo />

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-semibold text-foreground/70 hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors"
          >
            Get a free quote
            <ArrowRight className="w-4 h-4" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="md:hidden p-2 -mr-2 text-foreground"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="md:hidden border-t border-foreground/10 bg-background">
          <ul className="container mx-auto px-6 py-4 flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-semibold text-foreground/80 hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 px-5 py-3 font-bold text-white bg-primary rounded-lg"
              >
                Get a free quote
                <ArrowRight className="w-4 h-4" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
