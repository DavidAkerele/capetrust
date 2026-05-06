import { FloatingHeader } from "@/components/ui/floating-header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Planning from "@/components/Planning";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <FloatingHeader />
      <Hero />
      <Services />
      <Planning />
      <Testimonials />
      <About />
      <Footer />
    </main>
  );
}
