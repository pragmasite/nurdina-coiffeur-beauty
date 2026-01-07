import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Phone,
      label: t.contact.phone,
      value: "+41 52 625 59 41",
      href: "tel:+41526255941",
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: "medic.nurdina.cb@gmx.ch",
      href: "mailto:medic.nurdina.cb@gmx.ch",
    },
    {
      icon: MapPin,
      label: t.contact.address,
      value: "Stauffacherstrasse 32, 8200 Schaffhausen",
      href: "https://maps.google.com/?q=Stauffacherstrasse+32,+8200+Schaffhausen",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">{t.contact.label}</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4">
            {t.contact.title1} <span className="text-primary">{t.contact.title2}</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto mt-4">{t.contact.description}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={i}
                  href={item.href}
                  target={item.href.includes("maps") ? "_blank" : undefined}
                  rel={item.href.includes("maps") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 group cursor-pointer"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-lg text-primary mb-1">{item.label}</h3>
                    <p className="text-foreground/70 group-hover:text-foreground transition-colors">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="pt-8 border-t border-border"
            >
              <Button size="lg" className="w-full" asChild>
                <a href="tel:+41526255941">
                  <Phone className="h-5 w-5 mr-2" />
                  {t.contact.callNow}
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-96 rounded-2xl overflow-hidden border border-border shadow-soft"
          >
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2717.3644825438566!2d8.650232!3d47.699369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479a6f5c5e5e5e5d%3A0x5e5e5e5e5e5e5e5e!2sStauffacherstrasse%2032%2C%208200%20Schaffhausen!5e0!3m2!1sde!2sch!4v1234567890"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
