import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

const Gallery = () => {
  const { t } = useLanguage();

  const images = [
    { src: "/images/gallery-1.jpg", alt: "Salon Interior" },
  ];

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">{t.gallery.label}</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-4">{t.gallery.title}</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">{t.gallery.description}</p>
        </motion.div>

        {/* Gallery Grid - Simple layout for single image */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid gap-6 max-w-2xl mx-auto"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl border border-border hover:border-primary/50 transition-all"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-sm font-medium text-white">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Gallery Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mt-12"
        >
          Mehr Arbeiten und Projekte folgen in Kürze / More work and projects coming soon
        </motion.p>
      </div>
    </section>
  );
};

export default Gallery;
