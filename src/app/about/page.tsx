import About from "@/components/About";
import { FloatingHeader } from "@/components/ui/floating-header";
import Footer from "@/components/Footer";
import { SubPageHero } from "@/components/SubPageHero";
import aboutHeroImg from "../../../public/images/jacinta-christos-pJ8WXG5C_5U-unsplash.jpg";
import Image from "next/image";
import teamImg from "../../../public/images/noah-silliman-EBB45rCSjrU-unsplash.jpg";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <FloatingHeader />
      <SubPageHero 
        title="Our Legacy of Care" 
        description="For generations, Capetrust has been a pillar of strength and compassion for families in Lagos, providing dignified farewells that honor every life."
        image={aboutHeroImg}
      />
      
      <About />

      {/* Additional Content: Mission & Values */}
      <section className="py-24 bg-[var(--color-accent)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-8">
              <h3 className="font-serif text-2xl font-bold text-[var(--color-primary)] mb-6">Our Mission</h3>
              <p className="text-gray-600 font-light leading-relaxed">To provide families with the highest standard of compassionate care, ensuring every final farewell is a beautiful celebration of legacy.</p>
            </div>
            <div className="p-8 border-x border-[var(--color-primary)]/10">
              <h3 className="font-serif text-2xl font-bold text-[var(--color-primary)] mb-6">Our Vision</h3>
              <p className="text-gray-600 font-light leading-relaxed">To be Africa's leading provider of premium funeral services, rooted in tradition and elevated by world-class standards.</p>
            </div>
            <div className="p-8">
              <h3 className="font-serif text-2xl font-bold text-[var(--color-primary)] mb-6">Our Values</h3>
              <p className="text-gray-600 font-light leading-relaxed">Reverence, integrity, and compassion are at the heart of everything we do. We treat every family as our own.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Content: Our Team */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="w-full lg:w-1/2">
              <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-primary)] font-bold mb-8 leading-tight">Expertise rooted in compassion.</h2>
              <p className="text-gray-600 font-light text-lg leading-relaxed mb-10">Our team consists of certified funeral directors, grief counselors, and planning specialists who are dedicated to supporting you through every step of the journey. With years of experience in both Nigerian traditions and global practices, we ensure no detail is overlooked.</p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-[var(--color-secondary)] text-3xl mb-2">50+</h4>
                  <p className="text-sm font-bold uppercase tracking-widest text-[var(--color-primary)]/60">Years of Service</p>
                </div>
                <div>
                  <h4 className="font-bold text-[var(--color-secondary)] text-3xl mb-2">10k+</h4>
                  <p className="text-sm font-bold uppercase tracking-widest text-[var(--color-primary)]/60">Families Assisted</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image src={teamImg} alt="Our Team" fill className="object-cover" placeholder="blur" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
