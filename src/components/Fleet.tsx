import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Section } from "./Section";
import sedanImg from "@/assets/car-sedan.jpg";
import innovaImg from "@/assets/car-innova.jpg";
import ertigaImg from "@/assets/car-ertiga.jpg";
import amazeImg from "@/assets/car-amaze.jpg";

interface PackageRow {
  package: string;
  details: string;
  rate: string;
}

interface CarItem {
  type: string;
  name: string;
  models: string;
  seats: string;
  features: string[];
  price: string;
  image: string;
  accentColor: string;
  packages: PackageRow[];
}

const cars: CarItem[] = [
  {
    type: "Economy Class",
    name: "Sedan",
    models: "Toyota Etios / Dzire",
    seats: "4+1 Seater",
    features: ["AC", "Music System", "GPS"],
    price: "₹1,600 / 4 hrs",
    image: sedanImg,
    accentColor: "#4A90D9",
    packages: [
      { package: "4 Hours", details: "40 KM Limit", rate: "₹1,600" },
      { package: "8 Hours", details: "80 KM Limit", rate: "₹2,800" },
      { package: "Extra KM", details: "After Limit", rate: "₹15/KM" },
      { package: "Extra Hour", details: "After 8 Hours", rate: "₹100/Hour" },
      { package: "Outstation", details: "Per KM", rate: "₹14/KM" },
      { package: "Minimum KM", details: "Outstation", rate: "350 KM" },
      { package: "Driver Bata", details: "Per Day", rate: "₹500" },
    ],
  },
  {
    type: "Premium Class",
    name: "Innova Crysta",
    models: "Toyota Innova Crysta",
    seats: "7 Seater",
    features: ["AC", "Push-back Seats", "Music", "GPS"],
    price: "₹2,500 / 4 hrs",
    image: innovaImg,
    accentColor: "#2E7D32",
    packages: [
      { package: "4 Hours", details: "40 KM Limit", rate: "₹2,500" },
      { package: "8 Hours", details: "80 KM Limit", rate: "₹4,500" },
      { package: "Extra KM", details: "After Limit", rate: "₹20/KM" },
      { package: "Extra Hour", details: "After 8 Hours", rate: "₹200/Hour" },
      { package: "Outstation", details: "Per KM", rate: "₹18/KM" },
      { package: "Minimum KM", details: "Outstation", rate: "400 KM" },
      { package: "Driver Bata", details: "Per Day", rate: "₹500" },
    ],
  },
  {
    type: "Family MPV",
    name: "Ertiga",
    models: "Maruti Suzuki Ertiga",
    seats: "6 Seater",
    features: ["AC", "Push-back Seats", "Music", "Boot Space"],
    price: "₹1,800 / 4 hrs",
    image: ertigaImg,
    accentColor: "#7B1FA2",
    packages: [
      { package: "4 Hours", details: "40 KM Limit", rate: "₹1,800" },
      { package: "8 Hours", details: "80 KM Limit", rate: "₹3,200" },
      { package: "Extra KM", details: "After Limit", rate: "₹18/KM" },
      { package: "Extra Hour", details: "After 8 Hours", rate: "₹200/Hour" },
      { package: "Outstation", details: "Per KM", rate: "₹16/KM" },
      { package: "Minimum KM", details: "Outstation", rate: "400 KM" },
      { package: "Driver Bata", details: "Per Day", rate: "₹500" },
    ],
  },
  {
    type: "Hatchback Class",
    name: "Baleno",
    models: "Maruti Suzuki Baleno",
    seats: "4 Seater",
    features: ["AC", "Music System", "GPS", "Comfort Seats"],
    price: "₹1,600 / 4 hrs",
    image: amazeImg,
    accentColor: "#C62828",
    packages: [
      { package: "4 Hours", details: "40 KM Limit", rate: "₹1,600" },
      { package: "8 Hours", details: "80 KM Limit", rate: "₹2,800" },
      { package: "Extra KM", details: "After Limit", rate: "₹15/KM" },
      { package: "Extra Hour", details: "After 8 Hours", rate: "₹100/Hour" },
      { package: "Outstation", details: "Per KM", rate: "₹14/KM" },
      { package: "Minimum KM", details: "Outstation", rate: "350 KM" },
      { package: "Driver Bata", details: "Per Day", rate: "₹500" },
    ],
  },
];

function PackageModal({ car, onClose }: { car: CarItem; onClose: () => void }) {
  const waMsg = `Hi, I want to book a ${car.name} from Sri Vijaya Durga Cars And Travels`;
  const waLink = `https://wa.me/917893228193?text=${encodeURIComponent(waMsg)}`;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="relative bg-[#0a0a0a] border border-gold/30 w-full max-w-lg rounded-lg overflow-hidden shadow-[0_0_80px_rgba(201,168,76,0.2)]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-6 py-4 border-b border-gold/20"
            style={{ background: `linear-gradient(135deg, ${car.accentColor}22, transparent)` }}
          >
            <div>
              <div className="text-[10px] uppercase tracking-widest text-gold/60 mb-1">{car.type}</div>
              <h3 className="font-display text-2xl text-gold">{car.name}</h3>
              <p className="text-xs text-foreground/50 mt-0.5">{car.models} · {car.seats}</p>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-colors"
            >
              <X size={16} />
            </button>
          </div>

          {/* Package Table */}
          <div className="px-6 py-4">
            <table className="w-full text-sm">
              <thead>
                <tr
                  className="text-black text-[11px] uppercase tracking-widest"
                  style={{ background: `linear-gradient(90deg, ${car.accentColor}, ${car.accentColor}99)` }}
                >
                  <th className="py-2.5 px-3 text-left rounded-tl font-bold">Package</th>
                  <th className="py-2.5 px-3 text-left font-bold">Details</th>
                  <th className="py-2.5 px-3 text-right rounded-tr font-bold">Rate</th>
                </tr>
              </thead>
              <tbody>
                {car.packages.map((row, i) => (
                  <tr
                    key={row.package}
                    className={`border-b border-gold/10 transition-colors hover:bg-gold/5 ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}
                  >
                    <td className="py-2.5 px-3 text-foreground/80 font-medium">{row.package}</td>
                    <td className="py-2.5 px-3 text-foreground/55">{row.details}</td>
                    <td className="py-2.5 px-3 text-right text-gold font-bold">{row.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Terms */}
            <div className="mt-4 space-y-1 text-[11px] text-foreground/45">
              <p>• Toll Gate & Parking Charges Extra</p>
              <p>• Night Halt: Driver Bata + Food Charges Extra</p>
              <p>• All vehicles are AC Cars (Diesel / CNG / Petrol)</p>
            </div>
          </div>

          {/* CTA */}
          <div className="px-6 pb-6">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="shimmer block text-center clip-parallelogram gold-gradient text-black font-bold uppercase tracking-widest py-3.5 text-sm"
            >
              Book Now on WhatsApp
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function CarCard({ car, index, onBookNow }: { car: CarItem; index: number; onBookNow: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="group relative bg-[#0f0f0f] border border-gold/15 hover:border-gold/60 transition-all duration-500 hover:-translate-y-2 hover:gold-glow-strong"
    >
      <div className="absolute top-3 left-3 z-10 px-2.5 py-1 bg-black/70 backdrop-blur text-[10px] uppercase tracking-widest text-gold border border-gold/40">
        {car.type}
      </div>

      <div
        className="relative h-56 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at center top, rgba(201,168,76,0.22), transparent 60%), #060606",
        }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-full pointer-events-none"
             style={{ background: "radial-gradient(ellipse at top, rgba(255,240,200,0.18), transparent 60%)" }} />
        <img
          src={car.image}
          alt={`${car.name} — ${car.models} car rental Amalapuram`}
          loading="lazy"
          width={1024}
          height={1024}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="font-display text-2xl text-foreground">{car.name}</h3>
        <p className="text-sm text-foreground/50 mt-1">{car.models}</p>
        <div className="flex items-center gap-3 mt-3 text-xs uppercase tracking-widest text-gold/80">
          <span>{car.seats}</span>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {car.features.map((f) => (
            <span
              key={f}
              className="text-[10px] px-2 py-1 border border-gold/30 text-gold/80 uppercase tracking-widest"
            >
              {f}
            </span>
          ))}
        </div>

        {/* Starting price */}
        <div className="mt-4 text-xs text-foreground/50">
          Starting from <span className="text-gold font-bold">{car.price}</span>
        </div>

        <button
          onClick={onBookNow}
          className="shimmer mt-4 w-full text-center clip-parallelogram gold-gradient text-black font-bold uppercase tracking-widest py-3 text-sm cursor-pointer"
        >
          Book Now
        </button>
      </div>
    </motion.div>
  );
}

export function Fleet() {
  const [selectedCar, setSelectedCar] = useState<CarItem | null>(null);

  return (
    <>
      <Section
        id="fleet"
        label="Our Fleet"
        title="Choose Your Perfect Ride"
        bgClass="bg-[#050505]"
        subtitle="Step into our virtual showroom — every vehicle, immaculately maintained."
      >
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {cars.map((car, i) => (
            <CarCard
              key={car.name}
              car={car}
              index={i}
              onBookNow={() => setSelectedCar(car)}
            />
          ))}
        </div>
      </Section>

      {selectedCar && (
        <PackageModal car={selectedCar} onClose={() => setSelectedCar(null)} />
      )}
    </>
  );
}
