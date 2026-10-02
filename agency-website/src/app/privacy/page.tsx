import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} handles information you share with us.`,
};

export default function PrivacyPage() {
  return (
    <main className="container mx-auto px-6 max-w-3xl py-20">
      <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline mb-10">
        <ArrowLeft className="w-4 h-4" /> Back to home
      </Link>

      <h1 className="text-4xl md:text-5xl font-heading font-extrabold tracking-tight mb-3">Privacy Policy</h1>
      <p className="text-foreground/60 mb-12">Last updated: October 2026</p>

      <div className="space-y-8 text-foreground/80 leading-relaxed [&_h2]:font-heading [&_h2]:font-bold [&_h2]:text-xl [&_h2]:text-foreground [&_h2]:mb-2">
        <section>
          <h2>What we collect</h2>
          <p>
            When you contact us through the form or by email, we receive the details you choose to share, such as your
            name, business name, email address, phone number and message.
          </p>
        </section>
        <section>
          <h2>How we use it</h2>
          <p>
            We use this information only to reply to your enquiry, prepare quotes and deliver the work you ask for. We
            do not sell or rent your information to anyone.
          </p>
        </section>
        <section>
          <h2>Analytics</h2>
          <p>
            We use privacy-friendly analytics (Vercel Analytics) to understand overall site traffic. It does not use
            cookies and does not identify individual visitors.
          </p>
        </section>
        <section>
          <h2>Your choices</h2>
          <p>
            You can ask us to see, correct or delete any information we hold about you by emailing{" "}
            <a href={`mailto:${site.email}`} className="text-primary underline">{site.email}</a>.
          </p>
        </section>
      </div>
    </main>
  );
}
