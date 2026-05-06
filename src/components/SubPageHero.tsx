import Image, { StaticImageData } from "next/image";

interface SubPageHeroProps {
  title: string;
  description: string;
  image: StaticImageData;
}

export function SubPageHero({ title, description, image }: SubPageHeroProps) {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image 
          src={image} 
          alt={title} 
          fill 
          priority 
          placeholder="blur"
          sizes="100vw"
          className="object-cover" 
        />
        <div className="absolute inset-0 bg-[var(--color-primary)]/60 z-10 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-transparent to-transparent z-10"></div>
      </div>
      
      <div className="relative z-20 text-center px-6 max-w-4xl pt-16">
        <h1 className="font-serif text-5xl md:text-6xl text-white font-bold mb-6 drop-shadow-xl animate-[fadeInUp_1s_ease-out] italic leading-[0.95]">
          {title}
        </h1>
        <div className="w-16 h-[1px] bg-[var(--color-secondary)] mx-auto mb-8 animate-[fadeIn_1.5s_ease-out]"></div>
        <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed drop-shadow-md animate-[fadeInUp_1.2s_ease-out] max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
}
