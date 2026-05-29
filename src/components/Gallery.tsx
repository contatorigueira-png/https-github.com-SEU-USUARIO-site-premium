"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";

type Tile = { label: string; tone: string; span: string; ratio: string };

const tiles: Tile[] = [
  {
    label: "O balcão da manhã",
    tone: "from-[#e7cda0] via-[#cda069] to-[#8f6235]",
    span: "md:col-span-7 md:row-span-2",
    ratio: "aspect-[4/5] md:aspect-auto md:h-full",
  },
  {
    label: "Fornada do dia",
    tone: "from-[#d9b380] to-[#8a5a2e]",
    span: "md:col-span-5",
    ratio: "aspect-[4/3]",
  },
  {
    label: "Salão & café",
    tone: "from-[#e4c79a] to-[#a3753f]",
    span: "md:col-span-3",
    ratio: "aspect-square",
  },
  {
    label: "Vitrine gourmet",
    tone: "from-[#ddbe8d] to-[#9a6c3a]",
    span: "md:col-span-2",
    ratio: "aspect-square",
  },
  {
    label: "Mesa de brunch",
    tone: "from-[#ecd2a6] via-[#c89c63] to-[#8a5d31]",
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
      className={`group relative overflow-hidden rounded-md border border-[var(--line-soft)] shadow-soft ${tile.span}`}
    >
      <div
        className={`relative w-full ${tile.ratio} bg-gradient-to-br ${tile.tone} transition-transform duration-[1200ms] ease-luxe ${
          reduce ? "" : "group-hover:scale-[1.05]"
        }`}
        aria-hidden
      >
        <div className="absolute inset-0 grain opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_22%,rgba(255,248,236,0.5),transparent_55%)] opacity-80 transition-opacity duration-700 group-hover:opacity-100" />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(42,33,23,0.42)] via-transparent to-transparent" />
      </div>
      <figcaption className="absolute inset-x-0 bottom-0 p-2 lg:p-3 flex items-end justify-between gap-1">
        <span className="text-caption uppercase tracking-[0.28em] text-cream-50/80">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="font-display text-h3 text-cream-50">{tile.label}</span>
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
              A experiência
            </p>
            <h2 className="mt-2 font-display font-light text-h1 md:text-display-md text-balance leading-[1.05] text-[var(--fg)]">
              Um vislumbre da casa
              <span className="italic text-[var(--accent)]"> ao amanhecer.</span>
            </h2>
          </div>
          <p className="text-body-sm text-[var(--fg-muted)] max-w-sm">
            Imagens são convites. As nossas pedem que você chegue cedo, sinta o
            aroma do forno e fique para mais um café.
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
