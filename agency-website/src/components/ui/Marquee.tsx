const items = [
  "Business Websites",
  "Online Booking",
  "WhatsApp Automation",
  "Fee & Renewal Reminders",
  "Admin Dashboards",
  "Lead Capture",
  "Google Maps & SEO",
  "Custom Software",
];

/** Endless strip of services; the list is doubled so the loop is seamless. */
export default function Marquee() {
  return (
    <div className="relative bg-foreground text-white py-5 overflow-hidden group" aria-label="What we build">
      <div className="flex w-max animate-[marquee_35s_linear_infinite] group-hover:[animation-play-state:paused]">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-8 pr-8 font-heading font-bold text-lg md:text-xl whitespace-nowrap" aria-hidden={i >= items.length}>
            {item}
            <span className="text-secondary">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
