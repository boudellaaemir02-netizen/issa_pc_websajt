import { Menu, X, Cpu } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Početna", href: "#" },
  { label: "Konfiguracije", href: "#builds" },
  { label: "Polovni PC", href: "#used" },
  { label: "Usluge", href: "#services" },
  { label: "Kontakt", href: "#contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-nav text-nav-foreground sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#" className="flex items-center gap-2">
          <Cpu className="h-7 w-7 text-primary" />
          <span className="text-2xl font-black tracking-tight font-display">
            <span className="text-primary">Pro</span>Build
            <span className="text-muted-foreground text-sm font-semibold ml-2 hidden sm:inline">SARAJEVO</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-sm font-medium rounded-lg hover:bg-primary/20 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center px-5 py-2 bg-primary text-primary-foreground font-bold rounded-lg hover:opacity-90 transition-opacity text-sm"
          >
            Naruči Build
          </a>
          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="md:hidden border-t border-border">
          <ul className="divide-y divide-border">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block px-6 py-3 text-sm font-medium hover:bg-primary/20 hover:text-primary transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
