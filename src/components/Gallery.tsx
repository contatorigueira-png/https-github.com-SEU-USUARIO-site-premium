"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";

type Tile = { label: string; tone: string; span: string; ratio: string };

const tiles: Tile[] = [
  {
    label: "Salão principal",
    tone: "from-[#1c1410] via-[#2a1c12] to-[#08070a]",
    span: "md:col-span-7 md:row-span-2",
    ratio: "aspect-[4/5] md:aspect-auto md:h-full",
  },
  {
    label: "Sashimi",
    tone: "from-[#1b1d28] to-[#08080b]",
    span: "md:col-span-5",
    ratio: "aspect-[4/3]",
  },
  {
    label: "Terraço",
    tone: "from-[#2a1d0e] to-[#0a0805]",
    span: "md:col-span-3",
    ratio: "aspect-square",
  },
  {
    label: "Carta de vinhos",
    tone: "from-[#2c1a1a] to-[#0a0706]",
    span: "md:col-span-2",
    ratio: "aspect-square",
  },
  {
    label: "Pôr-do-sol",
    tone: "from-[#3b2412] via-[#1a1208] to-[#08070a]",
    span: "md:col-span-12",
    ratio: "aspect-[21/9]",
  },
];

function GalleryTile({ tile, index }: { tile: Tile; index: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.figure
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.06 }}
      className={`group relative overflow-hidden rounded-md border border-white/[0.07] ${tile.span}`}
    >
      <div
        className={`relative w-full ${tile.ratio} bg-gradient-to-br ${tile.tone} transition-transform duration-[1200ms] ease-luxe ${
          reduce ? "" : "group-hover:scale-[1.04]"
        }`}
        aria-hidden
      >
        <div className="absolute inset-0 grain" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(212,190,122,0.18),transparent_55%)] opacity-70 transition-opacity duration-700 group-hover:opacity-100" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080b]/85 via-transparent to-transparent" />
      </div>
      <figcaption className="absolute inset-x-0 bottom-0 p-2 lg:p-3 flex items-end justify-between gap-1">
        <span className="text-caption uppercase tracking-[0.28em] text-[var(--fg-muted)]">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="font-display text-h3 text-[var(--fg)]">{tile.label}</span>
      </figcaption>
    </motion.figure>
  );
}

export function Gallery() {
  return (
    <section id="galeria" className="relative py-12 lg:py-20">
      <div className="container-x">
        <Reveal className="flex items-end justify-between gap-4 flex-wrap">
          <div className="max-w-xl">
            <p className="text-caption uppercase tracking-[0.28em] text-[var(--accent)]">
              Atmosfera
            </p>
            <h2 className="mt-2 font-display font-light text-h1 md:text-display-md text-balance leading-[1.05]">
              Um vislumbre da noite
              <span className="italic text-[var(--accent)]/90"> à beira-mar.</span>
            </h2>
          </div>
          <p className="text-body-sm text-[var(--fg-muted)] max-w-sm">
            Imagens são convites. As nossas convidam você a respirar fundo,
            chegar mais cedo e ficar até depois da última taça.
          </p>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-2 lg:gap-3 auto-rows-[minmax(0,1fr)]">
          {tiles.map((t, i) => (
            <GalleryTile key={t.label} tile={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
