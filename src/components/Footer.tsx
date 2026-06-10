
import { Logo } from "./Logo";
import { Phone, MessageCircle, Star } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#020202] border-t border-gold/15 pt-16 pb-6 grain relative">
      {/* SEO keyword block — screen-reader & crawler friendly */}
      <div className="sr-only" aria-hidden="true">
        Sri Vijaya Durga Cars And Travels — best car rental service in Amalapuram, Andhra Pradesh.
        Book outstation cab from Amalapuram to Hyderabad, Visakhapatnam, Vijayawada, Tirupati, Rajahmundry.
        Toyota Innova Crysta hire Amalapuram. Tempo Traveller booking Amalapuram. Sedan taxi Amalapuram.
        Airport transfer Rajahmundry airport. Airport cab Vizag airport. Wedding car rental Amalapuram.
        Corporate cab service Amalapuram. 24 hour taxi Amalapuram. Local cab Amalapuram. Tour packages Amalapuram.
        Araku Valley tour from Amalapuram. Tirupati tour cab Amalapuram. East Godavari car travels.
        Best travels in Amalapuram. Amalapuram cab booking WhatsApp. Sri Vijaya Durga Cars And Travels.
        Call +91 78932 28193. srivijyadurgatravels.vercel.app
      </div>
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Logo />
            <p className="mt-4 text-sm text-foreground/55 leading-relaxed">
              Premium car rental services in Amalapuram, Andhra Pradesh — serving passengers across AP and Telangana with 5-star care.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="https://wa.me/917893228193" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-colors">
                <MessageCircle size={18} />
              </a>
              <a href="tel:+917893228193" className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-colors">
                <Phone size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg text-gold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              {["Local City Drops", "Outstation Trips", "Airport Transfers", "Tour Packages", "Wedding & Events", "Corporate Travel"].map((s) => (
                <li key={s} className="hover:text-gold cursor-pointer transition-colors">{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-gold mb-4">Our Fleet</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              {["Sedan — Etios / Dzire", "Innova Crysta", "Tempo Traveller", "Fortuner / Luxury", "Camry", "Custom Fleet"].map((s) => (
                <li key={s} className="hover:text-gold cursor-pointer transition-colors">{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-gold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              {[["Fleet", "#fleet"], ["Packages", "#packages"], ["Routes", "#routes"], ["Why Us", "#why"], ["Book Now", "#booking"], ["Contact", "#contact"]].map(([l, h]) => (
                <li key={l}><a href={h} className="hover:text-gold transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-gold/10 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-foreground/40">
          <div>© 2026 Sri Vijaya Durga Cars And Travels, Amalapuram. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-gold"><Star size={12} fill="currentColor" /> 5.0 · 58 Reviews</span>
            <a href="tel:+917893228193" className="text-gold hover:text-gold-light">+91 78932 28193</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
