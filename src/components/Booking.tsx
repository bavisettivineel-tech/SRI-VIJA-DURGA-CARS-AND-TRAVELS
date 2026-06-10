import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const initial = {
  name: "",
  phone: "",
  tripType: "Local City Drop",
  vehicle: "Sedan (4 Seater)",
  pickup: "",
  drop: "",
  date: "",
  time: "",
  notes: "",
};

const trips = ["Local City Drop", "Outstation Trip", "Airport Transfer", "Tour Package", "Wedding / Event", "Corporate Travel", "Hourly Rental"];
const vehicles = ["Sedan (4 Seater)", "SUV Innova (7 Seater)", "Tempo Traveller (12-17 Seats)", "Luxury Car"];

export function Booking() {
  const [form, setForm] = useState(initial);

  function update<K extends keyof typeof form>(k: K, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const msg = `*New Booking — Sri Vijaya Durga Cars And Travels*` +
      `*Name:* ${form.name}%0A` +
      `*Phone:* ${form.phone}%0A` +
      `*Trip Type:* ${form.tripType}%0A` +
      `*Vehicle:* ${form.vehicle}%0A` +
      `*Pickup:* ${form.pickup}%0A` +
      `*Drop:* ${form.drop}%0A` +
      `*Date:* ${form.date}%0A` +
      `*Time:* ${form.time}%0A` +
      `*Notes:* ${form.notes}`;
    window.open(`https://wa.me/917893228193?text=${msg}`, "_blank");
  }

  const inputCls =
    "w-full bg-transparent border-b border-gold/30 focus:border-gold py-2.5 px-1 text-foreground placeholder:text-foreground/30 outline-none transition-colors";
  const labelCls = "text-[11px] uppercase tracking-[0.25em] text-gold/80 mb-1 block";

  return (
    <section
      id="booking"
      className="relative py-24 md:py-32 grain overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0d0a00 0%, #050505 60%)" }}
    >
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="font-accent italic text-gold/80 text-lg mb-3">— Reserve Now —</div>
          <h2 className="font-display text-4xl md:text-6xl gold-text-gradient">Reserve Your Ride Now</h2>
          <p className="mt-4 text-foreground/60">Fill the form and we confirm within minutes.</p>
        </motion.div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-black/40 backdrop-blur-sm border border-gold/20 p-8 md:p-10 rounded-lg"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className={labelCls}>Your Name</label>
              <input required value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Full Name" className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Phone Number</label>
              <input required value={form.phone} onChange={(e) => update("phone", e.target.value)} type="tel" placeholder="+91 XXXXX XXXXX" className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Trip Type</label>
              <select value={form.tripType} onChange={(e) => update("tripType", e.target.value)} className={inputCls + " bg-[#0a0a0a]"}>
                {trips.map((t) => (<option key={t}>{t}</option>))}
              </select>
            </div>
            <div>
              <label className={labelCls}>Vehicle Type</label>
              <select value={form.vehicle} onChange={(e) => update("vehicle", e.target.value)} className={inputCls + " bg-[#0a0a0a]"}>
                {vehicles.map((t) => (<option key={t}>{t}</option>))}
              </select>
            </div>
            <div>
              <label className={labelCls}>Pickup Location</label>
              <input value={form.pickup} onChange={(e) => update("pickup", e.target.value)} placeholder="From where?" className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Drop Location</label>
              <input value={form.drop} onChange={(e) => update("drop", e.target.value)} placeholder="Where to?" className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Travel Date</label>
              <input type="date" value={form.date} onChange={(e) => update("date", e.target.value)} className={inputCls + " text-foreground/80"} />
            </div>
            <div>
              <label className={labelCls}>Pickup Time</label>
              <input type="time" value={form.time} onChange={(e) => update("time", e.target.value)} className={inputCls + " text-foreground/80"} />
            </div>
            <div className="md:col-span-2">
              <label className={labelCls}>Additional Notes</label>
              <textarea value={form.notes} onChange={(e) => update("notes", e.target.value)} rows={3} placeholder="Number of passengers, return trip, special requests" className={inputCls + " resize-none"} />
            </div>
          </div>

          <button
            type="submit"
            className="shimmer mt-8 w-full clip-parallelogram gold-gradient text-black font-bold uppercase tracking-widest py-4 flex items-center justify-center gap-2 gold-glow"
          >
            <Send size={18} /> Send Booking via WhatsApp
          </button>
        </motion.form>
      </div>
    </section>
  );
}
