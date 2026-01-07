import { useState } from "react";
import { Link } from "react-router-dom";
import { Globe, Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Header = () => {
  const { t, otherLang, otherLangPath, lang } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  window.addEventListener("scroll", () => {
    setIsScrolled(window.scrollY > 50);
  });

  const navLinks = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.gallery, href: "#gallery" },
    { label: t.nav.hours, href: "#hours" },
    { label: t.nav.contact, href: "#contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <a href="#" className="flex flex-col gap-1">
          <span className={`font-serif text-xl font-semibold transition-colors ${
            isScrolled ? "text-primary" : "text-white"
          }`}>
            Nurdina
          </span>
          <span className={`text-xs tracking-widest transition-colors ${
            isScrolled ? "text-muted-foreground" : "text-white/70"
          }`}>
            {t.nav.profession}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isScrolled ? "text-foreground" : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Switcher */}
          <Link
            to={otherLangPath}
            className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
              isScrolled
                ? "text-foreground hover:text-primary"
                : "text-white/80 hover:text-white"
            }`}
          >
            <Globe className="h-4 w-4" />
            {otherLang.toUpperCase()}
          </Link>

          <Button asChild className="gap-2">
            <a href="tel:+41526255941">
              <Phone className="h-4 w-4" />
              {t.nav.call}
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? (
            <X className={isScrolled ? "text-foreground" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-foreground" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-sm font-medium text-foreground hover:text-primary"
                onClick={() => setIsMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t space-y-3">
              <Link
                to={otherLangPath}
                className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary"
              >
                <Globe className="h-4 w-4" />
                {otherLang.toUpperCase()}
              </Link>
              <Button asChild className="w-full gap-2" onClick={() => setIsMobileOpen(false)}>
                <a href="tel:+41526255941">
                  <Phone className="h-4 w-4" />
                  {t.nav.call}
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
