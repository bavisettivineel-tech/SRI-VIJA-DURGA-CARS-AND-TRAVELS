import { Section } from "./Section";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";

const cards = [
  { icon: Phone, label: "Phone / Call", value: "+91 78932 28193", link: "tel:+917893228193" },
  { icon: MessageCircle, label: "WhatsApp", value: "+91 78932 28193", link: "https://wa.me/917893228193" },
  { icon: MapPin, label: "Address", value: "surya narayanapeta , opposite hdfc bank -2, near RED bridge , amalapuram rural, andhrapradesh" },
  { icon: Clock, label: "Working Hours", value: "Open 24 Hours · 7 Days a Week", highlight: true },
];

export function Contact() {
  return (
    <Section id="contact" label="Get In Touch" title="Reach Out To Us">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          {cards.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.link || undefined}
              target={c.link?.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`block bg-[#0f0f0f] border border-gold/20 p-5 hover:border-gold/60 hover:-translate-y-0.5 transition-all duration-300 ${
                c.link ? "cursor-pointer" : "cursor-default"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-gold/40 bg-black/40 flex items-center justify-center flex-shrink-0">
                  <c.icon className="text-gold" size={22} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/50">{c.label}</div>
                  <div className={`mt-1 font-display text-xl ${c.highlight ? "text-gold" : "text-foreground"}`}>
                    {c.value}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="border border-gold/20 overflow-hidden h-full min-h-[400px]"
        >
          <iframe
            title="Sri Vijaya Durga Cars And Travels — Amalapuram"
            src="https://www.google.com/maps?q=surya+narayanapeta,+opposite+hdfc+bank+-2,+near+RED+bridge,+amalapuram+rural,+andhrapradesh&output=embed"
            className="w-full h-full min-h-[400px]"
            style={{ filter: "grayscale(0.6) invert(0.92) hue-rotate(180deg)" }}
            loading="lazy"
          />
        </motion.div>
      </div>
    </Section>
  );
}
