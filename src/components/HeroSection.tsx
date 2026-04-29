import heroPc from "@/assets/hero-pc.jpg";
import { ArrowRight, Wrench } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-hero">
      <div className="absolute inset-0">
        <img src={heroPc} alt="Custom Gaming PC Build" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
      </div>
      <div className="relative container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-2xl">
          <p className="text-primary font-bold text-sm uppercase tracking-widest mb-3 font-display">
            🔧 PC Building & Resseling — Sarajevo
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 text-foreground font-display">
            Sastavi svoj{" "}
            <span className="text-primary">savršen PC</span>
            <br />
            po mjeri.
          </h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-lg">
            Custom gaming, streaming i workstation konfiguracije. Polovni PC-jevi sa garancijom. Stručna ugradnja, dijagnostika i nadogradnja u Sarajevu.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#builds"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-bold rounded-lg hover:opacity-90 transition-opacity text-sm"
            >
              Pogledaj konfiguracije
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-border text-foreground font-bold rounded-lg hover:bg-secondary transition-colors text-sm"
            >
              <Wrench className="h-4 w-4" />
              Zatraži ponudu
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            <div>
              <div className="text-2xl md:text-3xl font-black text-primary font-display">500+</div>
              <div className="text-xs text-muted-foreground">Sastavljenih PC-jeva</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-black text-primary font-display">24mj</div>
              <div className="text-xs text-muted-foreground">Garancija</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-black text-primary font-display">5★</div>
              <div className="text-xs text-muted-foreground">Ocjena kupaca</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
