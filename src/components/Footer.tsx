import { Cpu } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Cpu className="h-6 w-6 text-primary" />
              <span className="text-xl font-black tracking-tight font-display">
                <span className="text-primary">Pro</span>Build
              </span>
            </div>
            <p className="text-sm">
              PC building & resseling u Sarajevu. Custom konfiguracije, polovni PC-jevi i servis.
            </p>
          </div>
          <div>
            <h4 className="text-footer-heading font-bold mb-4 text-sm uppercase tracking-wider">
              Ponuda
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#builds" className="hover:text-primary transition-colors">Konfiguracije</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Servis</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-footer-heading font-bold mb-4 text-sm uppercase tracking-wider">
              Kontakt
            </h4>
            <ul className="space-y-2 text-sm">
              <li>+387 61 234 567</li>
              <li>info@probuild.ba</li>
              <li>Ferhadija 25, Sarajevo</li>
            </ul>
          </div>
          <div>
            <h4 className="text-footer-heading font-bold mb-4 text-sm uppercase tracking-wider">
              Radno vrijeme
            </h4>
            <ul className="space-y-2 text-sm">
              <li>Pon - Pet: 09:00 - 20:00</li>
              <li>Subota: 10:00 - 17:00</li>
              <li>Nedjelja: zatvoreno</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-footer-foreground/20">
        <div className="container mx-auto px-4 py-4 text-center text-xs">
          © 2026 ProBuild Sarajevo. Sva prava zadržana.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
