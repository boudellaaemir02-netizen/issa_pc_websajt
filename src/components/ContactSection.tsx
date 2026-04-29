import { Phone, Mail, MapPin, MessageCircle, Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-3 font-display">
            KONTAKT
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Javi nam se za besplatnu konsultaciju i ponudu po mjeri.
          </p>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <a href="tel:+38761234567" className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Telefon</div>
                <div className="font-bold text-foreground">+387 61 234 567</div>
              </div>
            </a>

            <a href="https://wa.me/38761234567" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">WhatsApp / Viber</div>
                <div className="font-bold text-foreground">+387 61 234 567</div>
              </div>
            </a>

            <a href="mailto:info@probuild.ba" className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Email</div>
                <div className="font-bold text-foreground">info@probuild.ba</div>
              </div>
            </a>

            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Instagram className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Instagram</div>
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

            <a
              href="https://wa.me/38761234567"
              target="_blank"
              rel="noreferrer"
              className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:opacity-90 transition-opacity text-sm"
            >
              <MessageCircle className="h-4 w-4" />
              Pošalji upit na WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
