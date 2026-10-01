import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Trust from "@/components/sections/Trust";
import Process from "@/components/sections/Process";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <Services />
      <Trust />
      <Process />
      <Footer />
    </main>
  );
}
