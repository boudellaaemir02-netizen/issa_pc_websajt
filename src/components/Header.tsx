import { Search, User, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Početna", href: "#" },
  { label: "Gaming računari", href: "#categories" },
  { label: "Komponente", href: "#categories" },
  { label: "Usluge", href: "#services" },
  { label: "O nama", href: "#about" },
  { label: "Kontakt", href: "#contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-nav text-nav-foreground sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="text-2xl font-black tracking-tight">
            <span className="text-primary">PC</span>Builder
          </span>
        </a>

        {/* Search */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Pretražite proizvode..."
              className="w-full rounded-lg bg-background/10 border border-nav-foreground/20 px-4 py-2 text-sm text-nav-foreground placeholder:text-nav-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-nav-foreground/50" />
          </div>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-4">
          <a href="#contact" className="hidden sm:flex items-center gap-1.5 text-sm hover:text-primary transition-colors">
            <User className="h-4 w-4" />
            Kontaktirajte nas
          </a>
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Desktop nav */}
      <nav className="hidden md:block border-t border-nav-foreground/10">
        <div className="container mx-auto px-4">
          <ul className="flex items-center gap-0">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block px-5 py-3 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-nav-foreground/10">
          <ul className="divide-y divide-nav-foreground/10">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block px-6 py-3 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
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
