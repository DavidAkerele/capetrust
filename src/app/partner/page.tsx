import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FloatingHeader } from "@/components/ui/floating-header";

export default function PartnerPage() {
  return (
    <main className="h-screen w-full bg-white flex flex-col lg:flex-row overflow-hidden relative">
      <FloatingHeader />
      
      {/* Left Side: Editorial Image */}
      <div className="w-full lg:w-1/2 relative h-[40vh] lg:h-screen hidden md:block">
        <Image 
          src="/images/noah-silliman-EBB45rCSjrU-unsplash.jpg" 
          alt="Capetrust Partnership" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/90 via-[var(--color-primary)]/20 to-transparent"></div>
        <div className="absolute bottom-12 left-12 right-12 text-white">
          <div className="w-12 h-[2px] bg-[var(--color-secondary)] mb-4"></div>
          <h2 className="font-serif text-3xl lg:text-4xl font-bold mb-2 leading-tight">Partner with Capetrust</h2>
          <p className="text-white/80 text-base max-w-md font-light leading-relaxed">
            Join our network of elite vendors, corporate partners, and B2B service providers to deliver world-class care in Lagos.
          </p>
        </div>
      </div>

      {/* Right Side: Partnership Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-12 lg:px-16 pt-24 pb-8 bg-[var(--color-accent)] h-screen overflow-y-auto lg:overflow-hidden">
        <div className="max-w-xl w-full mx-auto lg:mx-0">
          
          <div className="mb-8 mt-4 lg:mt-0">
            <h1 className="font-serif text-3xl md:text-4xl text-[var(--color-primary)] font-bold mb-2">Partnership Inquiry</h1>
            <p className="text-gray-600 text-sm font-light leading-relaxed">
              Please fill out the form below and our partnership team will reach out to you within 24 hours to discuss collaboration opportunities.
            </p>
          </div>

          <form className="space-y-4 lg:space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-[var(--color-primary)] uppercase tracking-[0.15em]">Full Name</label>
                <input 
                  type="text" 
                  className="w-full border-b border-[var(--color-primary)]/20 bg-transparent py-2 focus:outline-none focus:border-[var(--color-secondary)] transition-colors rounded-none px-0 text-[var(--color-primary)] placeholder:text-gray-400 text-sm" 
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-[var(--color-primary)] uppercase tracking-[0.15em]">Organization</label>
                <input 
                  type="text" 
                  className="w-full border-b border-[var(--color-primary)]/20 bg-transparent py-2 focus:outline-none focus:border-[var(--color-secondary)] transition-colors rounded-none px-0 text-[var(--color-primary)] placeholder:text-gray-400 text-sm" 
                  placeholder="Company Name"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-[var(--color-primary)] uppercase tracking-[0.15em]">Email Address</label>
                <input 
                  type="email" 
                  className="w-full border-b border-[var(--color-primary)]/20 bg-transparent py-2 focus:outline-none focus:border-[var(--color-secondary)] transition-colors rounded-none px-0 text-[var(--color-primary)] placeholder:text-gray-400 text-sm" 
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-[var(--color-primary)] uppercase tracking-[0.15em]">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full border-b border-[var(--color-primary)]/20 bg-transparent py-2 focus:outline-none focus:border-[var(--color-secondary)] transition-colors rounded-none px-0 text-[var(--color-primary)] placeholder:text-gray-400 text-sm" 
                  placeholder="+234 ..."
                />
              </div>
            </div>

            <div className="space-y-1 pt-1">
              <label className="text-[10px] font-bold text-[var(--color-primary)] uppercase tracking-[0.15em]">Partnership Type</label>
              <select className="w-full border-b border-[var(--color-primary)]/20 bg-transparent py-2 focus:outline-none focus:border-[var(--color-secondary)] transition-colors rounded-none px-0 text-[var(--color-primary)] appearance-none cursor-pointer text-sm">
                <option value="" disabled selected>Select an option</option>
                <option value="vendor">Vendor / Supplier</option>
                <option value="b2b">B2B Service Provider</option>
                <option value="corporate">Corporate Partner</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="space-y-1 pt-1">
              <label className="text-[10px] font-bold text-[var(--color-primary)] uppercase tracking-[0.15em]">Message</label>
              <textarea 
                className="w-full border-b border-[var(--color-primary)]/20 bg-transparent py-2 focus:outline-none focus:border-[var(--color-secondary)] transition-colors rounded-none px-0 text-[var(--color-primary)] placeholder:text-gray-400 resize-none h-20 text-sm" 
                placeholder="Tell us about how we can collaborate..."
                required
              ></textarea>
            </div>

            <div className="pt-4 lg:pt-6">
              <Button type="submit" size="lg" className="w-full md:w-auto bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-hover)] text-white rounded-full px-10 py-5 text-base shadow-lg font-medium tracking-wide">
                Submit Inquiry
              </Button>
            </div>
          </form>

        </div>
      </div>
    </main>
  );
}
