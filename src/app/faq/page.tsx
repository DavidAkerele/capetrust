import FAQ from "@/components/FAQ";
import { FloatingHeader } from "@/components/ui/floating-header";
import Footer from "@/components/Footer";
import { SubPageHero } from "@/components/SubPageHero";
import faqHeroImg from "../../../public/images/panyawat-auitpol-eq254Cqvmk8-unsplash.jpg";

export default function FAQPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <FloatingHeader />
      <SubPageHero 
        title="Guidance & Support" 
        description="We understand that you may have many questions during this time. Find answers to common inquiries about our services, planning, and traditions."
        image={faqHeroImg}
      />
      
      <FAQ />

      {/* Additional Content: Helpful Resources */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="font-serif text-4xl text-[var(--color-primary)] font-bold mb-16 text-center">Grief Support & Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-10 rounded-2xl bg-[var(--color-accent)] border border-[var(--color-primary)]/5">
              <h3 className="font-serif text-2xl font-bold text-[var(--color-primary)] mb-4">Planning Guide</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-6">Download our comprehensive checklist for immediate assistance and pre-planning steps.</p>
              <button className="text-[var(--color-secondary)] font-bold uppercase text-xs tracking-widest hover:underline">Download PDF</button>
            </div>
            <div className="p-10 rounded-2xl bg-[var(--color-accent)] border border-[var(--color-primary)]/5">
              <h3 className="font-serif text-2xl font-bold text-[var(--color-primary)] mb-4">Grief Counseling</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-6">We partner with top specialists in Lagos to provide emotional support for your entire family.</p>
              <button className="text-[var(--color-secondary)] font-bold uppercase text-xs tracking-widest hover:underline">Learn More</button>
            </div>
            <div className="p-10 rounded-2xl bg-[var(--color-accent)] border border-[var(--color-primary)]/5">
              <h3 className="font-serif text-2xl font-bold text-[var(--color-primary)] mb-4">Legal Assistance</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-6">Understanding documentation and estate requirements during the funeral planning process.</p>
              <button className="text-[var(--color-secondary)] font-bold uppercase text-xs tracking-widest hover:underline">Read Article</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
