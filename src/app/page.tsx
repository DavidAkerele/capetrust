import { FloatingHeader } from "@/components/ui/floating-header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Investment from "@/components/Investment";
import Products from "@/components/Products";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <FloatingHeader />
      <Hero />
      <About />
      <Investment />
      <Products />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
