import type { Metadata } from "next";
import { Syne, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroller from "@/components/layout/SmoothScroller";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pragathi Solutions | Premium Web & AI Agency",
  description: "Architecting Unfair Advantages for Modern Businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${spaceGrotesk.variable} antialiased`}>
      <body className="bg-background text-foreground overflow-x-hidden font-sans">
        <SmoothScroller>
          {children}
        </SmoothScroller>
      </body>
    </html>
  );
}
