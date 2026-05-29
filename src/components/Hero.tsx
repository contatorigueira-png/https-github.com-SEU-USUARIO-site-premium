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
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 110]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative h-[100svh] min-h-[640px] overflow-hidden">
      {/* Warm cinematic atmosphere — layered light + grain */}
      <motion.div style={{ y }} className="absolute inset-0 ambient-warm" aria-hidden />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_-10%,rgba(255,250,240,0.7),transparent_55%)]"
      />
      {/* bottom fade into the page so content meets the cream surface */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-[var(--bg)]"
      />
      <div aria-hidden className="absolute inset-0 grain" />

      {/* Soft drifting warmth — subtle ambient light */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: reduce ? 0.5 : [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-24 left-[18%] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(232,205,158,0.6),transparent_60%)] blur-3xl"
      />

      <motion.div
        style={{ opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center container-x text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.3 }}
          className="text-caption uppercase tracking-[0.34em] text-[var(--accent)]"
        >
          Padaria Artesanal · Café · Recife
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease, delay: 0.45 }}
          className="mt-3 font-display font-light text-display-md md:text-display-lg lg:text-display-xl text-balance leading-[1.02] text-[var(--fg)]"
        >
          Feito todo dia para
          <span className="block italic text-[var(--accent)]"> momentos extraordinários.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.7 }}
          className="mt-3 max-w-2xl text-body-lg text-[var(--fg-muted)] text-pretty"
        >
          Pães de fermentação natural, confeitaria fina, café de especialidade e
          uma delicatessen gourmet — assados frescos a cada amanhecer, no coração
          de Recife.
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
            className="group relative inline-flex items-center gap-1.5 rounded-sm bg-[var(--accent)] px-4 py-2.5 text-body text-cream-50 hover:bg-[var(--accent-soft)] transition-all duration-300 ease-luxe shadow-[0_12px_36px_-12px_rgba(169,120,63,0.6)]"
          >
            Fazer um pedido
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </a>
          <a
            href="#produtos"
            className="inline-flex items-center gap-1.5 rounded-sm border border-[var(--line)] bg-cream-50/40 px-4 py-2.5 text-body text-[var(--fg)] hover:border-[var(--accent)]/50 transition-colors duration-300"
          >
            Ver o que assamos hoje
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
