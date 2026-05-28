"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { whatsappLink } from "@/lib/site";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative h-[100svh] min-h-[640px] overflow-hidden">
      {/* Cinematic background — layered radial + vignette + grain */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 ambient-warm"
        aria-hidden
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,rgba(199,155,95,0.22),transparent_60%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-[rgba(8,8,11,0.55)] via-transparent to-[rgba(8,8,11,0.95)]"
      />
      <div aria-hidden className="absolute inset-0 grain" />

      {/* Soft moving glow — subtle ambient lighting */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: reduce ? 0.4 : [0.35, 0.6, 0.35] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 left-1/2 -translate-x-1/2 h-[640px] w-[640px] rounded-full bg-[radial-gradient(circle,rgba(212,190,122,0.22),transparent_60%)] blur-3xl"
      />

      <motion.div
        style={{ opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center container-x text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.3 }}
          className="text-caption uppercase tracking-[0.32em] text-[var(--accent)]/90"
        >
          Recife — Pernambuco
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease, delay: 0.45 }}
          className="mt-3 font-display font-light text-display-md md:text-display-lg lg:text-display-xl text-balance leading-[1.02]"
        >
          Onde o mar
          <span className="block italic text-[var(--accent)]/95"> encontra a mesa.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.7 }}
          className="mt-3 max-w-2xl text-body-lg text-[var(--fg-muted)] text-pretty"
        >
          Uma experiência inesquecível de frutos do mar e gastronomia à beira-mar
          em Recife — atmosfera sofisticada, hospitalidade calorosa, momentos memoráveis.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.85 }}
          className="mt-5 flex flex-col sm:flex-row items-center gap-2"
        >
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center gap-1.5 rounded-sm bg-[var(--accent)] px-4 py-2 text-body text-[#0b0b0f] hover:bg-[var(--accent-warm)] transition-all duration-300 ease-luxe shadow-[0_8px_32px_rgba(212,190,122,0.25)]"
          >
            Reservar uma mesa
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </a>
          <a
            href="#assinatura"
            className="inline-flex items-center gap-1.5 rounded-sm border border-white/15 px-4 py-2 text-body text-[var(--fg)] hover:border-white/30 transition-colors duration-300"
          >
            Ver assinatura
          </a>
        </motion.div>
      </motion.div>

      {/* Subtle scroll cue */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-[var(--fg-muted)]"
      >
        <span className="text-caption uppercase tracking-[0.28em]">Role</span>
        <motion.div
          animate={{ y: reduce ? 0 : [0, 6, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="h-5 w-px bg-gradient-to-b from-[var(--fg-muted)] to-transparent"
        />
      </motion.div>
    </section>
  );
}
