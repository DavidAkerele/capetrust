import { FloatingHeader } from "@/components/ui/floating-header";
import Hero from "@/components/Hero";
import ServiceGrid from "@/components/ServiceGrid";
import TranquilSpaces from "@/components/TranquilSpaces";
import CulturalDiversity from "@/components/CulturalDiversity";
import FuneralServices from "@/components/FuneralServices";
import Events from "@/components/Events";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden">
      <FloatingHeader />
      <Hero />
      <ServiceGrid />
      <TranquilSpaces />
      <CulturalDiversity />
      <FuneralServices />
      <Events />
      <div className="bg-white">
        <FAQ />
      </div>
      <Contact />
      <Footer />
    </main>
  );
}
