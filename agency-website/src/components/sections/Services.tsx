"use client";

import { Globe, Workflow, LayoutDashboard, MessageCircle, Search, Wrench, Check } from "lucide-react";
import { useReveal } from "@/lib/useReveal";

const services = [
  {
    title: "Business Websites",
    description: "Fast, mobile-friendly websites that explain what you offer and turn visitors into enquiries.",
    points: ["Custom design for your brand", "Enquiry & contact forms", "Google Maps & reviews"],
    icon: Globe,
  },
  {
    title: "Booking & Enquiry Systems",
    description: "Let customers book trials, appointments or classes online, with automatic confirmations.",
    points: ["Online booking & scheduling", "Lead capture into one place", "Automatic reminders"],
    icon: MessageCircle,
  },
  {
    title: "Workflow Automation",
    description: "Stop doing the same task every day. We automate follow-ups, reminders, reports and data entry.",
    points: ["WhatsApp & email follow-ups", "Fee & renewal reminders", "Google Sheets / CRM sync"],
    icon: Workflow,
  },
  {
    title: "Custom Software & Dashboards",
    description: "Tools built around how you actually work: member management, student records, admin panels.",
    points: ["Member / student portals", "Admin dashboards & reports", "Billing & attendance tracking"],
    icon: LayoutDashboard,
  },
  {
    title: "Local SEO & Google Presence",
    description: "Get found when people nearby search for what you do, on Google Search and Maps.",
    points: ["Google Business Profile setup", "On-page SEO", "Speed & performance tuning"],
    icon: Search,
  },
  {
    title: "Maintenance & Support",
    description: "We stay on after launch: updates, fixes, hosting and small changes whenever you need them.",
    points: ["Hosting & domain management", "Content updates", "Priority fixes"],
    icon: Wrench,
  },
];

export default function Services() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} id="services" className="py-24 relative bg-background border-t border-foreground/5">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-16 max-w-2xl" data-reveal>
          <p className="text-sm font-bold uppercase tracking-widest text-secondary mb-3">Services</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground tracking-tight mb-5">
            Everything your business needs online, from one team.
          </h2>
          <p className="text-lg text-foreground/70">
            Start with a website, add automation as you grow. One partner, no juggling multiple vendors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ title, description, points, icon: Icon }) => (
            <article
              key={title}
              data-reveal="scale"
              className="bg-white rounded-2xl p-8 border border-foreground/5 shadow-sm hover:shadow-md hover:border-primary/20 transition-[box-shadow,border-color] duration-300 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-foreground">{title}</h3>
              <p className="text-foreground/70 leading-relaxed mb-6">{description}</p>
              <ul className="mt-auto space-y-2 pt-5 border-t border-foreground/5">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-foreground/75">
                    <Check className="w-4 h-4 text-secondary mt-0.5 shrink-0" strokeWidth={3} />
                    {p}
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
