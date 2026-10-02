"use client";

import { Plus } from "lucide-react";
import { useReveal } from "@/lib/useReveal";

const faqs = [
  {
    q: "How much does a website cost?",
    a: "It depends on what you need: a simple business website costs far less than a booking system or custom dashboard. After a short call we send a fixed quote, so you know the full price before we start.",
  },
  {
    q: "How long will it take?",
    a: "Most business websites are ready in 1–3 weeks. Automations and custom software usually take 2–6 weeks depending on scope. We'll give you a timeline in the proposal.",
  },
  {
    q: "I'm not technical. Is that a problem?",
    a: "Not at all. Most of our clients aren't. We explain everything in plain language, handle the technical setup (domain, hosting, email) and show you how to use what we build.",
  },
  {
    q: "Can you work with the tools I already use?",
    a: "Usually, yes. We connect with WhatsApp, Google Sheets, Google Calendar, payment gateways, CRMs and most popular tools, so you don't have to change how you work.",
  },
  {
    q: "What happens after the website goes live?",
    a: "We offer ongoing support for updates, fixes and new features. You can reach us directly whenever something needs changing.",
  },
  {
    q: "Do I own the website and code?",
    a: "Yes. Once the project is paid for, the website, domain and code belong to you.",
  },
];

export default function FAQ() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="mb-12 text-center" data-reveal>
          <p className="text-sm font-bold uppercase tracking-widest text-secondary mb-3">FAQ</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight">Common questions</h2>
        </div>

        <div className="space-y-3">
          {faqs.map(({ q, a }) => (
            <details
              key={q}
              data-reveal
              className="group bg-white rounded-xl border border-foreground/5 shadow-sm open:shadow-md transition-shadow"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-6 font-heading font-bold text-lg [&::-webkit-details-marker]:hidden">
                {q}
                <Plus className="w-5 h-5 shrink-0 text-primary transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="px-6 pb-6 -mt-1 text-foreground/70 leading-relaxed">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
