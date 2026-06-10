import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./Logo";

export function LoadingScreen() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1800);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Logo size={1.4} />
          </motion.div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "200px" }}
            transition={{ duration: 1.4, delay: 0.3 }}
            className="mt-6 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
          />
          <div className="mt-4 text-[10px] uppercase tracking-[0.4em] text-gold/60">Loading Luxury</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
