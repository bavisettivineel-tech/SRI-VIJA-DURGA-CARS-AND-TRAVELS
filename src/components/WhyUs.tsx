import { Section } from "./Section";
import { motion } from "framer-motion";
import { Star, Clock, Car, User, MapPin, IndianRupee, ShieldCheck, Phone } from "lucide-react";

const items = [
  { icon: Star, title: "Perfect 5.0 Rating", desc: "58 verified Google reviews with perfect 5-star rating" },
  { icon: Clock, title: "24/7 Availability", desc: "Available round the clock — early morning or late night" },
  { icon: Car, title: "Premium AC Cars", desc: "All vehicles fully air-conditioned and regularly serviced" },
  { icon: User, title: "Expert Drivers", desc: "Licensed experienced polite chauffeurs who know every route" },
  { icon: MapPin, title: "GPS Tracking", desc: "Every vehicle GPS tracked so your family knows your location" },
  { icon: IndianRupee, title: "No Hidden Costs", desc: "Transparent upfront pricing — what we quote is what you pay" },
  { icon: ShieldCheck, title: "Safe Travel", desc: "Fully insured vehicles with safety-trained drivers" },
  { icon: Phone, title: "Easy Booking", desc: "Book via WhatsApp or phone — instant confirmation" },
];

export function WhyUs() {
  return (
    <Section id="why" label="Why Choose Us" title="The Satya Sai Mahalakshmi Travels Difference">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group relative bg-[#0f0f0f] border border-gold/15 p-6 text-center hover:border-gold/50 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
          >
            <div className="mx-auto w-[72px] h-[72px] rounded-full border border-gold/40 bg-black/40 flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors">
              <it.icon className="text-gold" size={28} />
            </div>
            <h3 className="font-display text-xl text-foreground mb-2">{it.title}</h3>
            <p className="text-sm text-foreground/60 leading-relaxed">{it.desc}</p>
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-0 bg-gradient-to-r from-transparent via-gold to-transparent group-hover:w-3/4 transition-all duration-500" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
