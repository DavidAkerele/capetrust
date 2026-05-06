import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 lg:px-24 bg-background relative overflow-hidden">
      {/* Blue Spotlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-secondary/10 rounded-full blur-[200px] pointer-events-none"></div>

      <div className="w-full mx-auto space-y-20 relative z-10">
        <div className="space-y-6">
          <span className="inline-block text-[10px] uppercase tracking-[0.3em] font-bold text-secondary">
            Get in Touch
          </span>
          <h2 className="font-serif text-4xl md:text-7xl font-medium leading-tight italic text-primary">
            Schedule a <br/> consultation.
          </h2>
          <p className="text-primary/50 font-light text-xl leading-relaxed max-w-2xl">
            Whether you are planning ahead as an investment or need immediate assistance, our advisors are here to guide you with compassion.
          </p>
        </div>

        <div className="bg-white/50 backdrop-blur-md rounded-[3rem] p-12 md:p-20 relative overflow-hidden group shadow-2xl border border-primary/5">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary/20 to-transparent z-0 transition-opacity duration-700 opacity-50 group-hover:opacity-100"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="space-y-4">
              <h3 className="text-4xl md:text-5xl font-serif text-primary font-medium italic">Ready to start planning?</h3>
              <p className="text-primary/60 font-light max-w-md text-xl leading-relaxed">Our planning forms are available 24/7. Connect with an advisor today.</p>
            </div>
            
            <Link href="/contact" className="shrink-0 bg-secondary hover:bg-secondary-hover text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest text-[10px] flex items-center transition-all duration-300 transform hover:scale-105 shadow-2xl">
              Open Inquiry Form
              <ArrowRight className="w-5 h-5 ml-4" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { icon: Phone, label: "Call Us", value: "+234 (0) 800 000 0000" },
            { icon: Mail, label: "Email Us", value: "consult@capetrust.com" },
            { icon: MapPin, label: "Visit Us", value: "Ikorodu, Lagos, Nigeria" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-start group p-10 rounded-[2.5rem] bg-white/40 border border-primary/5 shadow-sm hover:shadow-xl transition-all duration-500 backdrop-blur-sm">
              <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mb-8 group-hover:bg-secondary transition-all duration-500 transform group-hover:rotate-12">
                <item.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
              </div>
              <h4 className="font-bold text-2xl text-primary mb-3 italic font-serif">{item.label}</h4>
              <p className="text-primary/50 font-light text-lg">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
