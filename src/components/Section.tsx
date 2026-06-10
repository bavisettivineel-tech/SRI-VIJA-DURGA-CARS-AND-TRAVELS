import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  label?: string;
  title: string;
  subtitle?: string;
  className?: string;
  bgClass?: string;
  children: ReactNode;
}

export function Section({ id, label, title, subtitle, className = "", bgClass = "bg-[#0a0a0a]", children }: SectionProps) {
  return (
    <section id={id} className={`relative py-24 md:py-32 grain ${bgClass} ${className}`}>
      <div className="max-w-7xl mx-auto px-5 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          {label && (
            <div className="font-accent italic text-gold/80 text-lg mb-3">— {label} —</div>
          )}
          <h2 className="font-display text-4xl md:text-6xl gold-text-gradient leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-foreground/60 max-w-2xl mx-auto">{subtitle}</p>
          )}
          <div className="mx-auto mt-6 w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
        </motion.div>
        {children}
      </div>
    </section>
  );
}
