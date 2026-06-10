import { MessageCircle, Phone } from "lucide-react";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href="tel:+917893228193"
        aria-label="Call"
        className="pulse-gold w-12 h-12 rounded-full gold-gradient flex items-center justify-center text-black shadow-lg hover:scale-110 transition-transform"
      >
        <Phone size={20} />
      </a>
      <a
        href="https://wa.me/917893228193"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="pulse-ring w-[58px] h-[58px] rounded-full bg-[#25d366] flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
      >
        <MessageCircle size={26} />
      </a>
    </div>
  );
}
