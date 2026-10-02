// Single source of truth for business details. Update these values and the
// whole site (nav, contact section, footer, metadata) follows.
export const site = {
  name: "Pragathi Solutions",
  shortName: "Pragathi",
  tagline: "Websites, automation & custom software for growing businesses",
  description:
    "Pragathi Solutions builds websites, booking and enquiry systems, and business automations for gyms, coaching centres, clinics and other small and mid-sized businesses.",
  url: "https://pragathisolutions.com",
  email: "hello@pragathisolutions.com",
  // Digits only with country code, e.g. "919876543210". Leave empty to hide
  // the WhatsApp button and phone line.
  whatsapp: "",
  phoneDisplay: "",
  github: "https://github.com/Vishwas721",
  location: "Remote · Working with clients everywhere",
  responseTime: "We reply within one business day",
};

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Industries", href: "#industries" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

export function whatsappLink(text = "Hi Pragathi Solutions, I'd like to discuss a project.") {
  if (!site.whatsapp) return null;
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}
