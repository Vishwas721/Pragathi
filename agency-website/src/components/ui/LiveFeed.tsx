"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { UserPlus, CalendarCheck, BellRing, Star, CreditCard, MessageCircle } from "lucide-react";

// Illustrative examples of what the systems we build do day to day.
const events = [
  { icon: UserPlus, title: "New enquiry from website", meta: "Auto-reply sent on WhatsApp", tone: "text-primary bg-primary/10" },
  { icon: CalendarCheck, title: "Trial session booked", meta: "Added to calendar · Reminder scheduled", tone: "text-secondary bg-secondary/10" },
  { icon: BellRing, title: "Fee reminders sent", meta: "Members due this week notified", tone: "text-[#B07F00] bg-accent/15" },
  { icon: Star, title: "Review request sent", meta: "After a completed visit", tone: "text-violet-600 bg-violet-500/10" },
  { icon: CreditCard, title: "Payment received", meta: "Invoice generated & emailed", tone: "text-emerald-600 bg-emerald-500/10" },
  { icon: MessageCircle, title: "Missed call follow-up", meta: "WhatsApp message sent automatically", tone: "text-rose-600 bg-rose-500/10" },
];

const VISIBLE = 3;
const GAP = 12; // matches gap-3

export default function LiveFeed() {
  // Each row gets a unique key so React treats every arrival as a new element.
  const [rows, setRows] = useState(() => events.slice(0, VISIBLE + 1).map((e, i) => ({ ...e, key: i })));
  const [count, setCount] = useState(128);
  const listRef = useRef<HTMLUListElement>(null);
  const next = useRef(VISIBLE + 1);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      if (document.hidden) return;
      const n = next.current++;
      setRows((r) => [{ ...events[n % events.length], key: n }, ...r].slice(0, VISIBLE + 1));
      setCount((c) => c + 1);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  // Slide the list down by one row so the new event drops in at the top
  // while the oldest one slides out under the mask.
  useLayoutEffect(() => {
    const list = listRef.current;
    const first = list?.firstElementChild as HTMLElement | null;
    if (!list || !first || rows[0].key < VISIBLE + 1) return;
    const shift = first.offsetHeight + GAP;
    gsap.fromTo(list, { y: -shift }, { y: 0, duration: 0.7, ease: "power3.out" });
    gsap.fromTo(first, { opacity: 0, scale: 0.92 }, { opacity: 1, scale: 1, duration: 0.6, delay: 0.1, ease: "back.out(1.6)" });
  }, [rows]);

  return (
    <div className="relative bg-white rounded-2xl border border-foreground/10 shadow-xl shadow-primary/5 p-6">
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-foreground/40">Today</p>
          <p className="font-heading font-bold text-lg">Your business, on autopilot</p>
        </div>
        <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Live
        </span>
      </div>

      <div className="relative h-[228px] overflow-hidden [mask-image:linear-gradient(to_bottom,black_75%,transparent)]">
        <ul ref={listRef} className="flex flex-col gap-3">
          {rows.map(({ key, icon: Icon, title, meta, tone }) => (
            <li
              key={key}
              data-hero-card
              className="flex items-center gap-4 p-4 rounded-xl bg-surface-dim/60 border border-foreground/5 shrink-0"
            >
              <span className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${tone}`}>
                <Icon className="w-5 h-5" />
              </span>
              <span className="min-w-0">
                <span className="block font-semibold text-sm text-foreground truncate">{title}</span>
                <span className="block text-xs text-foreground/55 truncate">{meta}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 pt-4 border-t border-foreground/5 flex items-center justify-between text-sm">
        <span className="text-foreground/55">Tasks handled automatically</span>
        <span key={count} className="inline-block font-heading font-extrabold text-xl text-primary tabular-nums animate-[pop_0.4s_ease-out]">
          {count}
        </span>
      </div>
    </div>
  );
}
