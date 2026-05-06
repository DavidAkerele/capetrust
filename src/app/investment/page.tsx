import Investment from "@/components/Investment";
import { FloatingHeader } from "@/components/ui/floating-header";
import Footer from "@/components/Footer";
import { SubPageHero } from "@/components/SubPageHero";
import investmentHeroImg from "../../../public/images/suhyeon-choi-V6UJIenfLME-unsplash.jpg";
import { ContactForm } from "@/components/ContactForm";

export default function InvestmentPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <FloatingHeader />
      <SubPageHero 
        title="Secure Your Legacy" 
        description="Pre-planning is a profound gift to your loved ones. Lock in today's prices and ensure your final wishes are respected with absolute dignity."
        image={investmentHeroImg}
      />
      
      <Investment />

      {/* Additional Content: Investment Benefits */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-primary)] font-bold mb-6">Why Pre-Plan with Capetrust?</h2>
            <p className="text-gray-500 font-light text-lg max-w-2xl mx-auto">We offer structured financial products that provide peace of mind and long-term security for you and your family.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <div className="border-l-4 border-[var(--color-secondary)] pl-8 py-2">
                <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">Price Guarantee</h3>
                <p className="text-gray-600 font-light leading-relaxed">Once you lock in your arrangements, the price is guaranteed. Your family will never have to pay more for the services you've selected, regardless of inflation or rising costs.</p>
              </div>
              <div className="border-l-4 border-[var(--color-secondary)] pl-8 py-2">
                <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">Flexible Payment Terms</h3>
                <p className="text-gray-600 font-light leading-relaxed">We offer monthly, quarterly, and annual payment structures tailored to your financial capabilities, allowing you to build your legacy gradually.</p>
              </div>
              <div className="border-l-4 border-[var(--color-secondary)] pl-8 py-2">
                <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">Transferable Benefits</h3>
                <p className="text-gray-600 font-light leading-relaxed">Our planning products are designed with flexibility in mind. Benefits can often be transferred to other services or family members should your needs change.</p>
              </div>
            </div>

            {/* Contact Form Integration */}
            <div id="inquiry">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
