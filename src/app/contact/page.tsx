import Contact from "@/components/Contact";
import { FloatingHeader } from "@/components/ui/floating-header";
import Footer from "@/components/Footer";
import { SubPageHero } from "@/components/SubPageHero";
import contactHeroImg from "../../../public/images/noah-silliman-EBB45rCSjrU-unsplash.jpg";
import { ContactForm } from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <FloatingHeader />
      <SubPageHero 
        title="We are here to help" 
        description="Reach out to our dedicated team of advisors for immediate assistance or to begin your pre-planning journey. Your peace of mind is our priority."
        image={contactHeroImg}
      />
      
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-20">
            
            {/* Left: Contact Information */}
            <div className="w-full lg:w-1/3">
              <h2 className="font-serif text-4xl text-[var(--color-primary)] font-bold mb-10">Get in Touch</h2>
              
              <div className="space-y-12">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[var(--color-accent)] rounded-full flex items-center justify-center shrink-0 mr-6">
                    <Phone className="w-5 h-5 text-[var(--color-secondary)]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--color-primary)] mb-2">24/7 Support Line</h4>
                    <p className="text-gray-600 font-light text-lg">1-888-700-7766</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[var(--color-accent)] rounded-full flex items-center justify-center shrink-0 mr-6">
                    <Mail className="w-5 h-5 text-[var(--color-secondary)]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--color-primary)] mb-2">Email Address</h4>
                    <p className="text-gray-600 font-light text-lg">consult@capetrust.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[var(--color-accent)] rounded-full flex items-center justify-center shrink-0 mr-6">
                    <MapPin className="w-5 h-5 text-[var(--color-secondary)]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--color-primary)] mb-2">Lagos Office</h4>
                    <p className="text-gray-600 font-light text-lg leading-relaxed">123 Memorial Way,<br/>Ikorodu, Lagos, Nigeria</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[var(--color-accent)] rounded-full flex items-center justify-center shrink-0 mr-6">
                    <Clock className="w-5 h-5 text-[var(--color-secondary)]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--color-primary)] mb-2">Office Hours</h4>
                    <p className="text-gray-600 font-light text-lg">Monday – Friday: 9am – 5pm<br/>Weekends: By Appointment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="w-full lg:w-2/3">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] bg-[var(--color-accent)] relative overflow-hidden grayscale contrast-125 hover:grayscale-0 transition-all duration-1000">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126834.05834888746!2d3.4357467364135544!3d6.601552554411132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bed600985c493%3A0xc3f5f3e9c323f469!2sIkorodu%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1714950000000!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Capetrust Location Map"
        ></iframe>
      </section>

      <Footer />
    </main>
  );
}
