const Footer = () => {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-footer-heading font-bold mb-4 text-sm uppercase tracking-wider">
              Upoznajte nas
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">O nama</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Zašto kupiti od nas?</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Kontaktirajte nas</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-footer-heading font-bold mb-4 text-sm uppercase tracking-wider">
              Trebate pomoć?
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Kako naručiti?</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Reklamacija i povrati</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Servis</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-footer-heading font-bold mb-4 text-sm uppercase tracking-wider">
              Plaćanje i dostava
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Načini plaćanja</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Načini dostave</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-footer-heading font-bold mb-4 text-sm uppercase tracking-wider">
              Informacije
            </h4>
            <p className="text-sm">PCBuilder d.o.o.</p>
            <p className="text-sm">Zmaja od Bosne 1</p>
            <p className="text-sm">72000 Zenica</p>
            <p className="text-sm mt-2">Prodaja: 032 221 654</p>
            <p className="text-sm">Servis: 032 465 805</p>
          </div>
        </div>
      </div>
      <div className="border-t border-footer-foreground/20">
        <div className="container mx-auto px-4 py-4 text-center text-xs">
          © 2026 PCBuilder. Sva prava zadržana.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
