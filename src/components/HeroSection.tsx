import heroPc from "@/assets/hero-pc.png";

const HeroSection = () => {
  return (
    <section className="bg-hero text-hero-foreground overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <div className="flex-1 text-center md:text-left">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Vaš lokalni PC stručnjak
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
            Izgradite Vaš <span className="text-primary">savršeni</span> računar
          </h1>
          <p className="text-hero-foreground/70 text-lg mb-8 max-w-lg">
            Prilagođeni gaming, radni i streaming računari izrađeni od vrhunskih komponenti. Besplatna konsultacija i garancija na svaki build.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#categories"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-primary-foreground font-bold rounded-lg hover:opacity-90 transition-opacity text-sm"
            >
              Pogledajte ponudu
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-hero-foreground/30 text-hero-foreground font-bold rounded-lg hover:bg-hero-foreground/10 transition-colors text-sm"
            >
              Kontaktirajte nas
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src={heroPc}
            alt="Custom gaming PC"
            width={1024}
            height={1024}
            className="w-full max-w-md md:max-w-lg drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
