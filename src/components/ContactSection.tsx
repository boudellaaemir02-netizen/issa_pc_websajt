import { Instagram, Facebook } from "lucide-react";

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

        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors">
            <div className="w-14 h-14 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <Instagram className="h-6 w-6" />
            </div>
            <div className="text-center">
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Instagram</div>
              <div className="font-bold text-foreground">@probuild.sarajevo</div>
            </div>
          </a>

          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors">
            <div className="w-14 h-14 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <Facebook className="h-6 w-6" />
            </div>
            <div className="text-center">
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Facebook</div>
              <div className="font-bold text-foreground">ProBuild Sarajevo</div>
            </div>
          </a>

          <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors">
            <div className="w-14 h-14 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
              <TikTokIcon className="h-6 w-6" />
            </div>
            <div className="text-center">
              <div className="text-xs text-muted-foreground uppercase tracking-wider">TikTok</div>
              <div className="font-bold text-foreground">@probuild.sarajevo</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
