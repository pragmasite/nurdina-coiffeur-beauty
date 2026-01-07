import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl mb-2">Nurdina</h3>
            <p className="text-sm text-background/70 mb-4">{t.footer.tagline}</p>
            <p className="text-xs text-background/60">{t.footer.description}</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">{t.footer.navigation}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-sm text-background/70 hover:text-background transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-background/70 hover:text-background transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-sm text-background/70 hover:text-background transition-colors">
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a href="#hours" className="text-sm text-background/70 hover:text-background transition-colors">
                  {t.nav.hours}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-background/70 hover:text-background transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">{t.contact.label}</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+41526255941"
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  +41 52 625 59 41
                </a>
              </li>
              <li>
                <a
                  href="mailto:medic.nurdina.cb@gmx.ch"
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  medic.nurdina.cb@gmx.ch
                </a>
              </li>
              <li className="text-sm text-background/70">
                Stauffacherstrasse 32<br />
                8200 Schaffhausen
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">{t.hours.label}</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>Di - Fr: 08:30 - 18:00</li>
              <li>Mi: 08:30 - 12:00</li>
              <li>Sa: 08:00 - 14:00</li>
              <li>Mo, So: {t.hours.closed}</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <p className="text-center text-xs text-background/60">
            &copy; {currentYear} Nurdina Coiffeur & Beauty. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
