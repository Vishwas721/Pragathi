"use client";

import { Dumbbell, GraduationCap, Stethoscope, UtensilsCrossed, Store, Building2, ArrowRight } from "lucide-react";
import { useReveal } from "@/lib/useReveal";

const industries = [
  {
    name: "Gyms & Fitness Studios",
    icon: Dumbbell,
    solutions: ["Trial-class booking", "Membership renewal reminders", "Attendance & payment tracking"],
  },
  {
    name: "Coaching & Tuition Centres",
    icon: GraduationCap,
    solutions: ["Admission enquiry forms", "Fee reminders to parents", "Student & batch management"],
  },
  {
    name: "Clinics & Wellness",
    icon: Stethoscope,
    solutions: ["Online appointments", "Automated visit reminders", "Patient enquiry handling"],
  },
  {
    name: "Restaurants & Cafés",
    icon: UtensilsCrossed,
    solutions: ["Digital menus", "Table reservations", "Google reviews & Maps presence"],
  },
  {
    name: "Retail & Local Shops",
    icon: Store,
    solutions: ["Product catalogue sites", "WhatsApp ordering", "Inventory sheets & alerts"],
  },
  {
    name: "Service & B2B Firms",
    icon: Building2,
    solutions: ["Lead capture & CRM sync", "Quote & invoice automation", "Internal dashboards"],
  },
];

export default function Industries() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} id="industries" className="py-24 relative bg-primary text-white overflow-hidden">
      <div className="glow-subtle bg-secondary w-[500px] h-[500px] -top-40 right-0 opacity-20" />
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl" data-reveal>
            <p className="text-sm font-bold uppercase tracking-widest text-accent mb-3">Who we work with</p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight mb-5">
              Built for the businesses that keep cities running.
            </h2>
            <p className="text-lg text-white/70">
              We understand the day-to-day of small and mid-sized businesses. Here are a few things we set up for
              them.
            </p>
          </div>
          <a
            data-reveal
            href="#contact"
            className="group inline-flex items-center gap-2 font-semibold text-accent hover:text-white transition-colors shrink-0"
          >
            Don&apos;t see your industry? Talk to us
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map(({ name, icon: Icon, solutions }, i) => (
            <article
              key={name}
              data-reveal={i % 2 ? "right" : "left"}
              className="rounded-2xl p-7 bg-white/[0.06] border border-white/10 hover:bg-white/[0.09] transition-colors"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-accent" />
                </span>
                <h3 className="font-heading font-bold text-lg">{name}</h3>
              </div>
              <ul className="space-y-2">
                {solutions.map((s) => (
                  <li key={s} className="flex items-center gap-2.5 text-sm text-white/75">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
