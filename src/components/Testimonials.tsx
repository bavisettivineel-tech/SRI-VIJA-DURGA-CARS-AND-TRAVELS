import { Section } from "./Section";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Excellent service! The driver was very professional and reached on time. The car was clean and comfortable. Highly recommend Sri Vijaya Durga Cars And Travels for any trip.",
    name: "Ravi Kumar",
    location: "Amalapuram",
    source: "Google Review",
    initial: "R",
  },
  {
    text: "Booked for my wedding and they exceeded all expectations. Beautiful decorated cars, punctual service, and the driver was very cooperative throughout the event.",
    name: "Priya Reddy",
    location: "Amalapuram",
    source: "Google Review",
    initial: "P",
  },
  {
    text: "Used their service for Hyderabad outstation. Comfortable Innova, experienced driver who knew all the routes well. Reached safely and on time. Will definitely book again.",
    name: "Suresh Babu",
    location: "Amalapuram",
    source: "Google Review",
    initial: "S",
  },
];

export function Testimonials() {
  return (
    <Section
      id="testimonials"
      label="Reviews"
      title="What Our Passengers Say"
      bgClass="bg-[#050505]"
    >
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="relative bg-[#0f0f0f] border border-gold/20 p-7 overflow-hidden"
          >
            <Quote className="absolute -top-2 -left-2 text-gold/10" size={120} strokeWidth={1} />
            <div className="relative">
              <div className="flex gap-1 text-gold mb-4">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="font-accent italic text-lg text-foreground/85 leading-relaxed mb-6">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gold/15">
                <div className="w-11 h-11 rounded-full gold-gradient flex items-center justify-center font-display text-xl text-black">
                  {t.initial}
                </div>
                <div>
                  <div className="font-display text-foreground">{t.name}</div>
                  <div className="text-xs text-foreground/50 uppercase tracking-widest">
                    {t.location} · {t.source}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
