import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-8 md:px-16 lg:px-24 bg-white border-b border-[var(--color-primary)]/10">
      
      <div className="flex items-center space-x-4 mb-12">
        <div className="w-12 h-[2px] bg-[var(--color-secondary)]"></div>
        <span className="text-[var(--color-secondary)] text-xs font-bold uppercase tracking-[0.15em]">
          Get in Touch
        </span>
      </div>

      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[var(--color-primary)] font-bold mb-8 leading-tight italic">
        Schedule a <br/> consultation.
      </h2>

      <p className="text-gray-600 font-light text-lg leading-relaxed mb-16 max-w-2xl">
        Whether you are planning ahead as an investment or need immediate assistance, our advisors are here to guide you with compassion.
      </p>

      <div className="bg-[var(--color-primary)] rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden group shadow-2xl">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/10 to-transparent z-0 transition-opacity duration-700 opacity-50 group-hover:opacity-100"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <h3 className="text-3xl font-serif text-white font-bold mb-4 italic">Ready to start planning?</h3>
            <p className="text-white/70 font-light max-w-md text-lg">Our planning forms are available 24/7. Connect with an advisor today.</p>
          </div>
          
          <Link href="/contact" className="shrink-0 bg-[var(--color-secondary)] hover:bg-white text-white hover:text-[var(--color-primary)] px-10 py-5 rounded-full font-bold uppercase tracking-widest text-[9px] flex items-center transition-all duration-300 transform hover:scale-105 shadow-2xl">
            Open Inquiry Form
            <ArrowRight className="w-5 h-5 ml-4" />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">
        <div className="flex flex-col items-start group p-6 rounded-[1.5rem] bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-[var(--color-primary)]/5">
          <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[var(--color-secondary)] transition-all duration-500 transform group-hover:scale-110">
            <Phone className="w-5 h-5 text-[var(--color-secondary)] group-hover:text-white transition-colors" />
          </div>
          <h4 className="font-bold text-xl text-[var(--color-primary)] mb-2 italic font-serif">Call Us</h4>
          <p className="text-gray-500 font-light text-sm">+234 (0) 800 000 0000</p>
        </div>
        
        <div className="flex flex-col items-start group p-6 rounded-[1.5rem] bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-[var(--color-primary)]/5">
          <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[var(--color-secondary)] transition-all duration-500 transform group-hover:scale-110">
            <Mail className="w-5 h-5 text-[var(--color-secondary)] group-hover:text-white transition-colors" />
          </div>
          <h4 className="font-bold text-xl text-[var(--color-primary)] mb-2 italic font-serif">Email Us</h4>
          <p className="text-gray-500 font-light text-sm">consult@capetrust.com</p>
        </div>

        <div className="flex flex-col items-start group p-6 rounded-[1.5rem] bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-[var(--color-primary)]/5">
          <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[var(--color-secondary)] transition-all duration-500 transform group-hover:scale-110">
            <MapPin className="w-5 h-5 text-[var(--color-secondary)] group-hover:text-white transition-colors" />
          </div>
          <h4 className="font-bold text-xl text-[var(--color-primary)] mb-2 italic font-serif">Visit Us</h4>
          <p className="text-gray-500 font-light text-sm">Ikorodu, Lagos, Nigeria</p>
        </div>
      </div>

    </section>
  );
}
