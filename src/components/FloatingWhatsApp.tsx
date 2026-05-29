"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { WhatsappIcon } from "./Navbar";
import { whatsappLink } from "@/lib/site";

export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={whatsappLink()}
          target="_blank"
          rel="noreferrer"
          aria-label="Pedir no WhatsApp"
          initial={{ opacity: 0, scale: 0.8, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 12 }}
          whileHover={reduce ? undefined : { scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 right-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[var(--accent)] text-cream-50 shadow-luxe ring-1 ring-cream-50/30"
        >
          <span className="sr-only">Pedir no WhatsApp</span>
          <WhatsappIcon className="relative h-7 w-7" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
