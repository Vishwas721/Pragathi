import Link from "next/link";
import { Logo } from "@/components/layout/Navbar";
import { navLinks, site, whatsappLink } from "@/config/site";

const services = ["Business Websites", "Booking & Enquiry Systems", "Workflow Automation", "Custom Software", "Local SEO", "Maintenance & Support"];

export default function Footer() {
  const wa = whatsappLink();

  return (
    <footer className="bg-foreground text-white/70 pt-16 pb-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr] pb-12 border-b border-white/10">
          <div>
            <Logo inverted />
            <p className="mt-5 text-sm leading-relaxed max-w-xs">
              Websites, automation and custom software for gyms, coaching centres, clinics and growing local
              businesses.
            </p>
          </div>

          <div>
            <h3 className="text-white font-heading font-bold text-sm mb-4">Company</h3>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-white transition-colors">{l.label}</a>
                </li>
              ))}
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-heading font-bold text-sm mb-4">Services</h3>
            <ul className="space-y-2.5 text-sm">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="hover:text-white transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-heading font-bold text-sm mb-4">Get in touch</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-white transition-colors break-all">{site.email}</a>
              </li>
              {wa && (
                <li>
                  <a href={wa} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    {site.phoneDisplay || "WhatsApp"}
                  </a>
                </li>
              )}
              <li>{site.location}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-sm">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
