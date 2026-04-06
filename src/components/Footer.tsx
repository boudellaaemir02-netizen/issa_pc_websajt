const Footer = () => {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-footer-heading font-bold mb-4 text-sm uppercase tracking-wider">
              Server Info
            </h4>
            <ul className="space-y-2 text-sm">
              <li>IP: delaasmp.aternos.me</li>
              <li>Verzija: 1.20+</li>
              <li>Tip: Java Edition</li>
            </ul>
          </div>
          <div>
            <h4 className="text-footer-heading font-bold mb-4 text-sm uppercase tracking-wider">
              Linkovi
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#modes" className="hover:text-primary transition-colors">Game Modovi</a></li>
              <li><a href="#rules" className="hover:text-primary transition-colors">Pravila</a></li>
              <li><a href="#join" className="hover:text-primary transition-colors">Kako se pridružiti</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-footer-heading font-bold mb-4 text-sm uppercase tracking-wider">
              DelaaSMP
            </h4>
            <p className="text-sm">Crystal PVP & Survival SMP server za Minecraft Java Edition.</p>
            <p className="text-sm mt-2">Pridruži se i budi dio zajednice! ⚔</p>
          </div>
        </div>
      </div>
      <div className="border-t border-footer-foreground/20">
        <div className="container mx-auto px-4 py-4 text-center text-xs">
          © 2026 DelaaSMP. Svi modovi i slike su vlasništvo Mojang Studios.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
