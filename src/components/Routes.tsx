import { Section } from "./Section";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const routes = [
  { to: "Hyderabad", distance: "~500 km", time: "~8 hrs" },
  { to: "Visakhapatnam", distance: "~150 km", time: "~3 hrs" },
  { to: "Vijayawada", distance: "~220 km", time: "~4 hrs" },
  { to: "Tirupati", distance: "~530 km", time: "~9 hrs" },
  { to: "Rajahmundry", distance: "~65 km", time: "~1.5 hr" },
  { to: "Araku / Vizag", distance: "~270 km", time: "~5.5 hrs" },
  { to: "Srisailam", distance: "~520 km", time: "~9 hrs" },
  { to: "Borra Caves", distance: "~290 km", time: "~6 hrs" },
  { to: "Mothugudem", distance: "~180 km", time: "~4 hrs" },
  { to: "Lambasingi / Vanajangi", distance: "~220 km", time: "~5 hrs" },
  { to: "Annavaram", distance: "~80 km", time: "~1.5 hrs" },
  { to: "Pancharamalu (5 Temples)", distance: "Custom Tour", time: "1–2 Days" },
  { to: "Antarvedi", distance: "~120 km", time: "~2.5 hrs" },
  { to: "Bhadrachalam", distance: "~190 km", time: "~4 hrs" },
  { to: "Maredumilli", distance: "~120 km", time: "~3 hrs" },
  { to: "All AP & Telangana", distance: "Any Distance", time: "Custom Quote" },
];

export function Routes() {
  return (
    <Section id="routes" label="Destinations" title="Where We Take You" bgClass="bg-[#050505]">
      <div className="flex justify-center mb-12">
        <div className="clip-parallelogram gold-gradient text-black font-bold uppercase tracking-widest px-8 py-3 text-sm gold-glow">
          Amalapuram · Your Starting Point
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {routes.map((r, i) => (
          <motion.div
            key={r.to}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative bg-[#0f0f0f] border border-gold/15 p-6 hover:border-gold/50 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/50">From Amalapuram</div>
            <div className="flex items-center gap-3 mt-3">
              <ArrowRight size={20} className="text-gold" />
              <h3 className="font-display text-2xl text-foreground">{r.to}</h3>
            </div>
            <div className="mt-4 flex items-center gap-4 text-sm text-foreground/60">
              <span>{r.distance}</span>
              <span className="w-1 h-1 rounded-full bg-gold/50" />
              <span>{r.time}</span>
            </div>
            <span className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-gold to-transparent group-hover:w-full transition-all duration-500" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
