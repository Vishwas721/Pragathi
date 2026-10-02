"use client";

import { useState } from "react";
import { ArrowRight, Mail, MapPin, Clock, MessageCircle, CheckCircle2, Loader2 } from "lucide-react";
import { site, whatsappLink } from "@/config/site";
import { useReveal } from "@/lib/useReveal";

// Optional: set NEXT_PUBLIC_FORM_ENDPOINT (e.g. a Formspree form URL) to receive
// submissions by email without opening the visitor's mail app.
const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

const businessTypes = ["Gym / Fitness", "Coaching / Education", "Clinic / Wellness", "Restaurant / Café", "Retail / Shop", "Other"];
const needs = ["New website", "Website redesign", "Booking / enquiry system", "Automation", "Custom software", "Not sure yet"];

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "w-full bg-background/60 border border-foreground/15 rounded-lg px-4 py-3 text-base text-foreground placeholder:text-foreground/35 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition";
const labelClass = "text-sm font-semibold text-foreground/80 mb-1.5 block";

export default function Contact() {
  const ref = useReveal<HTMLElement>();
  const [status, setStatus] = useState<Status>("idle");
  const wa = whatsappLink();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    if (data._gotcha) return; // bot filled the hidden field

    if (!FORM_ENDPOINT) {
      // No form service configured: hand off to the visitor's email client.
      const body = [
        `Name: ${data.name}`,
        `Business: ${data.business}`,
        `Business type: ${data.type}`,
        `Looking for: ${data.need}`,
        `Contact: ${data.email}${data.phone ? ` / ${data.phone}` : ""}`,
        "",
        data.message,
      ].join("\n");
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        `Project enquiry from ${data.business || data.name}`
      )}&body=${encodeURIComponent(body)}`;
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`Form endpoint returned ${res.status}`);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section ref={ref} id="contact" className="relative py-24 bg-surface-dim border-t border-foreground/5 overflow-hidden">
      <div className="glow-subtle bg-secondary w-[500px] h-[500px] -bottom-60 -left-40" />
      <div className="container relative z-10 mx-auto px-6 max-w-6xl grid lg:grid-cols-[1fr_1.2fr] gap-14">
        <div data-reveal="left">
          <p className="text-sm font-bold uppercase tracking-widest text-secondary mb-3">Contact</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight leading-tight mb-5">
            Let&apos;s talk about your business.
          </h2>
          <p className="text-lg text-foreground/70 max-w-md mb-10">
            Tell us a little about what you need. We&apos;ll get back with ideas and a free, no-obligation quote.
          </p>

          <ul className="space-y-5">
            <li>
              <a href={`mailto:${site.email}`} className="flex items-center gap-4 group">
                <span className="w-12 h-12 rounded-full border border-foreground/10 bg-white flex items-center justify-center group-hover:border-primary transition-colors">
                  <Mail className="w-5 h-5 text-foreground/60 group-hover:text-primary transition-colors" />
                </span>
                <span className="font-semibold text-foreground/80 group-hover:text-foreground transition-colors break-all">
                  {site.email}
                </span>
              </a>
            </li>
            {wa && (
              <li>
                <a href={wa} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <span className="w-12 h-12 rounded-full border border-foreground/10 bg-white flex items-center justify-center group-hover:border-emerald-600 transition-colors">
                    <MessageCircle className="w-5 h-5 text-foreground/60 group-hover:text-emerald-600 transition-colors" />
                  </span>
                  <span className="font-semibold text-foreground/80 group-hover:text-foreground transition-colors">
                    {site.phoneDisplay || "Chat on WhatsApp"}
                  </span>
                </a>
              </li>
            )}
            <li className="flex items-center gap-4">
              <span className="w-12 h-12 rounded-full border border-foreground/10 bg-white flex items-center justify-center">
                <MapPin className="w-5 h-5 text-foreground/60" />
              </span>
              <span className="font-semibold text-foreground/80">{site.location}</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="w-12 h-12 rounded-full border border-foreground/10 bg-white flex items-center justify-center">
                <Clock className="w-5 h-5 text-foreground/60" />
              </span>
              <span className="font-semibold text-foreground/80">{site.responseTime}</span>
            </li>
          </ul>
        </div>

        <div data-reveal="right" className="bg-white rounded-2xl p-7 md:p-10 border border-foreground/5 shadow-sm">
          {status === "sent" ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12" role="status">
              <CheckCircle2 className="w-14 h-14 text-emerald-600 mb-5" />
              <h3 className="font-heading font-bold text-2xl mb-2">Thanks, we&apos;ve got it!</h3>
              <p className="text-foreground/70 max-w-sm">
                {FORM_ENDPOINT
                  ? "We'll get back to you within one business day."
                  : `Your email app should have opened with your details. If it didn't, write to us at ${site.email}.`}
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 text-sm font-semibold text-primary hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form className="grid sm:grid-cols-2 gap-5" onSubmit={handleSubmit}>
              <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

              <div>
                <label htmlFor="name" className={labelClass}>Your name *</label>
                <input id="name" name="name" required autoComplete="name" placeholder="Your full name" className={inputClass} />
              </div>
              <div>
                <label htmlFor="business" className={labelClass}>Business name *</label>
                <input id="business" name="business" required autoComplete="organization" placeholder="e.g. FitZone Gym" className={inputClass} />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>Email *</label>
                <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@business.com" className={inputClass} />
              </div>
              <div>
                <label htmlFor="phone" className={labelClass}>Phone / WhatsApp</label>
                <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="Optional" className={inputClass} />
              </div>
              <div>
                <label htmlFor="type" className={labelClass}>Type of business</label>
                <select id="type" name="type" defaultValue="" className={inputClass}>
                  <option value="" disabled>Select one</option>
                  {businessTypes.map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="need" className={labelClass}>What do you need?</label>
                <select id="need" name="need" defaultValue="" className={inputClass}>
                  <option value="" disabled>Select one</option>
                  {needs.map((n) => <option key={n}>{n}</option>)}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className={labelClass}>Tell us more *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="What would you like to improve or build?"
                  className={`${inputClass} resize-none`}
                />
              </div>

              {status === "error" && (
                <p className="sm:col-span-2 text-sm text-red-600" role="alert">
                  Something went wrong sending your message. Please email us at{" "}
                  <a href={`mailto:${site.email}`} className="underline">{site.email}</a>.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="sm:col-span-2 group inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-white bg-primary rounded-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-md disabled:opacity-70"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" /> Sending…
                  </>
                ) : (
                  <>
                    Request a free quote
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
