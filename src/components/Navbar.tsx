import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { label: "Fleet", href: "#fleet" },
  { label: "Packages", href: "#packages" },
  { label: "Routes", href: "#routes" },
  { label: "Why Us", href: "#why" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-xl bg-black/70 border-b border-gold/20 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
          <a href="#hero"><Logo /></a>
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-body uppercase tracking-widest text-foreground/80 hover:text-gold transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="#booking"
              className="px-5 py-2 border border-gold text-gold uppercase tracking-widest text-xs font-bold hover:bg-gold hover:text-black transition-all clip-parallelogram"
            >
              Book Now
            </a>
          </nav>
          <button
            className="lg:hidden text-gold p-2"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex flex-col">
          <div className="flex items-center justify-between p-5 border-b border-gold/20">
            <Logo />
            <button onClick={() => setOpen(false)} className="text-gold" aria-label="Close menu">
              <X size={32} />
            </button>
          </div>
          <nav className="flex-1 flex flex-col items-center justify-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-4xl text-gold hover:text-gold-light"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#booking"
              onClick={() => setOpen(false)}
              className="mt-4 px-8 py-3 gold-gradient text-black font-bold uppercase tracking-widest clip-parallelogram"
            >
              Book Now
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
