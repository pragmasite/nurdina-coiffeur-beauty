import { motion } from "framer-motion";
import { Clock, CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Hours = () => {
  const { t } = useLanguage();

  // Opening hours: Mon closed, Tue-Fri 08:30-18:00, Sat 08:00-14:00, Sun closed
  const schedule = [
    { hours: t.hours.closed }, // Monday
    { hours: "08:30 - 18:00" }, // Tuesday
    { hours: "08:30 - 12:00" }, // Wednesday
    { hours: "08:30 - 18:00" }, // Thursday
    { hours: "08:30 - 18:00" }, // Friday
    { hours: "08:00 - 14:00" }, // Saturday
    { hours: t.hours.closed }, // Sunday
  ];

  const todayIndex = new Date().getDay();
  const adjustedIndex = todayIndex === 0 ? 6 : todayIndex - 1; // Convert to 0-6 starting from Monday

  return (
    <section id="hours" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-xl rounded-2xl border border-border bg-background shadow-soft overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center gap-3 border-b bg-primary/5 px-6 py-4">
            <Clock className="h-5 w-5 text-primary" />
            <span className="font-serif text-lg">{t.hours.header}</span>
          </div>

          {/* Hours */}
          <div className="divide-y">
            {schedule.map((item, i) => {
              const isToday = i === adjustedIndex;
              const isClosed = item.hours === t.hours.closed;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className={`px-6 py-4 flex justify-between items-center transition-colors ${
                    isToday ? "bg-primary/5" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {isToday && <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />}
                    <span className={`text-sm ${isToday ? "font-semibold text-primary" : "text-foreground"}`}>
                      {t.hours.days[i]}
                    </span>
                    {isToday && (
                      <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full whitespace-nowrap">
                        {t.hours.today}
                      </span>
                    )}
                  </div>
                  <span className={`text-sm ${isClosed ? "text-muted-foreground" : "font-medium"}`}>
                    {item.hours}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          Bitte machen Sie einen Termin / Please make an appointment
        </motion.p>
      </div>
    </section>
  );
};

export default Hours;
