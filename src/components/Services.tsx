import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Services = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">{t.services.label}</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-4">{t.services.title}</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">{t.services.description}</p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.items.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-background rounded-2xl p-8 border border-border hover:shadow-medium hover:border-primary/30 transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Sparkles className="h-6 w-6 text-accent" />
                </div>
              </div>
              <h3 className="font-serif text-xl text-primary mb-3">{service.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
