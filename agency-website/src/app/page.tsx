import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/ui/Marquee";
import Work from "@/components/sections/Work";
import Services from "@/components/sections/Services";
import Industries from "@/components/sections/Industries";
import WhyUs from "@/components/sections/WhyUs";
import Process from "@/components/sections/Process";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col w-full">
        <Hero />
        <Marquee />
        <Services />
        <Work />
        <Industries />
        <WhyUs />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
