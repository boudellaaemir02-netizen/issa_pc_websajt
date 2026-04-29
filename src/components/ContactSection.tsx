import { MapPin, Instagram, Facebook } from "lucide-react";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.1Z" />
  </svg>
);

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-3 font-display">
            KONTAKT
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Javi nam se preko društvenih mreža za besplatnu konsultaciju.
          </p>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Instagram className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Instagram</div>
                <div className="font-bold text-foreground">@probuild.sarajevo</div>
              </div>
            </a>

            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Facebook className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Facebook</div>
                <div className="font-bold text-foreground">ProBuild Sarajevo</div>
              </div>
            </a>

            <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <TikTokIcon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">TikTok</div>
                <div className="font-bold text-foreground">@probuild.sarajevo</div>
              </div>
            </a>
          </div>

          <div className="p-6 rounded-xl bg-card border border-border">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="h-5 w-5 text-primary" />
              <h3 className="font-bold text-foreground font-display text-lg">Lokacija</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Ferhadija 25<br />
              71000 Sarajevo<br />
              Bosna i Hercegovina
            </p>
            <h4 className="font-bold text-foreground mb-2 mt-6">Radno vrijeme</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li className="flex justify-between"><span>Ponedjeljak - Petak</span><span className="text-foreground">09:00 - 20:00</span></li>
              <li className="flex justify-between"><span>Subota</span><span className="text-foreground">10:00 - 17:00</span></li>
              <li className="flex justify-between"><span>Nedjelja</span><span className="text-primary">Zatvoreno</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
