"use client";

import { type ReactNode } from "react";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

type Product = {
  index: string;
  category: string;
  name: string;
  notes: string;
  tone: string;
  icon: ReactNode;
};

const products: Product[] = [
  {
    index: "I",
    category: "Forno",
    name: "Pães artesanais",
    notes: "Fermentação natural de 36 horas, casca rústica e miolo alveolado. Baguete, campagne e integral de centeio.",
    tone: "from-[#d8b27e] via-[#c69458] to-[#8a5a2c]",
    icon: <WheatIcon />,
  },
  {
    index: "II",
    category: "Padaria francesa",
    name: "Viennoiserie",
    notes: "Croissants de manteiga francesa, pain au chocolat e folhados laminados à mão, assados ao longo do dia.",
    tone: "from-[#e6c592] via-[#d2a262] to-[#a06b34]",
    icon: <CroissantIcon />,
  },
  {
    index: "III",
    category: "Confeitaria",
    name: "Doces & sobremesas",
    notes: "Tortas finas, entremets, financiers e o nosso pudim de baunilha de Madagascar. Beleza que se come.",
    tone: "from-[#e8c6a6] via-[#cf9a78] to-[#9c5f44]",
    icon: <CakeIcon />,
  },
  {
    index: "IV",
    category: "Cafeteria",
    name: "Café de especialidade",
    notes: "Grãos torrados em pequenos lotes, métodos coados e espresso encorpado. Leite vegetal disponível.",
    tone: "from-[#c9a37a] via-[#9d6f47] to-[#5a3a22]",
    icon: <CoffeeIcon />,
  },
  {
    index: "V",
    category: "Delicatessen",
    name: "Gourmet & charcutaria",
    notes: "Queijos curados, presunto cru, conservas, azeites e geleias artesanais para montar a despensa perfeita.",
    tone: "from-[#dcc08e] via-[#bd9559] to-[#8a6533]",
    icon: <CheeseIcon />,
  },
  {
    index: "VI",
    category: "Mesa",
    name: "Experiência de brunch",
    notes: "Ovos lentos, tostadas de abacate, granola da casa e cestos de pães — servidos com calma aos fins de semana.",
    tone: "from-[#e4c79c] via-[#caa067] to-[#946a39]",
    icon: <BrunchIcon />,
  },
];

export function Products() {
  return (
    <section id="produtos" className="relative py-12 lg:py-20">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="text-caption uppercase tracking-[0.28em] text-[var(--accent)]">
            Produtos de assinatura
          </p>
          <h2 className="mt-2 font-display font-light text-h1 md:text-display-md text-balance leading-[1.05] text-[var(--fg)]">
            Seis ofícios,
            <span className="italic text-[var(--accent)]"> uma só casa.</span>
          </h2>
          <p className="mt-2 text-body text-[var(--fg-muted)] text-pretty">
            Da primeira fornada ao último café da tarde — uma seleção breve e
            cuidadosamente curada, que muda com as estações e celebra o melhor de
            cada ingrediente.
          </p>
        </Reveal>

        <Stagger
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
          staggerChildren={0.08}
        >
          {products.map((p) => (
            <StaggerItem key={p.index}>
              <article className="group relative h-full overflow-hidden rounded-md border border-[var(--line-soft)] bg-cream-50 shadow-soft transition-all duration-500 ease-luxe hover:shadow-elevated hover:-translate-y-0.5">
                <div
                  className={`relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br ${p.tone}`}
                  aria-hidden
                >
                  <div className="absolute inset-0 grain opacity-40" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_18%,rgba(255,248,236,0.5),transparent_55%)] transition-opacity duration-700 group-hover:opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(42,33,23,0.28)] via-transparent to-transparent" />
                  <span className="absolute right-2 bottom-2 font-display text-display-md italic text-cream-50/40 transition-all duration-700 ease-luxe group-hover:scale-110 group-hover:text-cream-50/70">
                    {p.index}
                  </span>
                  <div className="absolute left-2 top-2 flex h-10 w-10 items-center justify-center rounded-full bg-cream-50/85 text-[var(--accent)] backdrop-blur-sm">
                    {p.icon}
                  </div>
                </div>

                <div className="p-3 lg:p-4">
                  <p className="text-caption uppercase tracking-[0.28em] text-[var(--accent)]">
                    {p.category}
                  </p>
                  <h3 className="mt-1 font-display text-h2 text-[var(--fg)]">{p.name}</h3>
                  <p className="mt-1 text-body-sm text-[var(--fg-muted)]">{p.notes}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* Minimal, hand-tuned line icons — stroke 1.4, 22px box */
const iconProps = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function WheatIcon() {
  return (
    <svg {...iconProps}>
      <path d="M12 22V8" />
      <path d="M12 8c0-2 1.4-3.4 3-4-.6 1.8-1.2 3.2-3 4Z" />
      <path d="M12 8c0-2-1.4-3.4-3-4 .6 1.8 1.2 3.2 3 4Z" />
      <path d="M12 13c0-2 1.4-3.4 3-4-.6 1.8-1.2 3.2-3 4Z" />
      <path d="M12 13c0-2-1.4-3.4-3-4 .6 1.8 1.2 3.2 3 4Z" />
      <path d="M12 18c0-2 1.4-3.4 3-4-.6 1.8-1.2 3.2-3 4Z" />
      <path d="M12 18c0-2-1.4-3.4-3-4 .6 1.8 1.2 3.2 3 4Z" />
    </svg>
  );
}

function CroissantIcon() {
  return (
    <svg {...iconProps}>
      <path d="M4 14c3-1 5-1 8 0s5 1 8 0c-1 3-4 5-8 5s-7-2-8-5Z" />
      <path d="M4 14l-1.5-2M20 14l1.5-2M9 14l-2-3M15 14l2-3" />
    </svg>
  );
}

function CakeIcon() {
  return (
    <svg {...iconProps}>
      <path d="M4 21h16v-7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7Z" />
      <path d="M4 16c1.5 1 2.5 1 4 0s2.5-1 4 0 2.5 1 4 0" />
      <path d="M12 8v3M12 4v1.5" />
      <circle cx="12" cy="6" r="0.6" fill="currentColor" />
    </svg>
  );
}

function CoffeeIcon() {
  return (
    <svg {...iconProps}>
      <path d="M5 9h11v5a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V9Z" />
      <path d="M16 10h2a2 2 0 0 1 0 4h-2" />
      <path d="M8 3c-.6.8-.6 1.7 0 2.5M11 3c-.6.8-.6 1.7 0 2.5" />
    </svg>
  );
}

function CheeseIcon() {
  return (
    <svg {...iconProps}>
      <path d="M3 18l9-9 9 4v5H3Z" />
      <circle cx="8" cy="16" r="0.7" fill="currentColor" />
      <circle cx="13" cy="15" r="0.7" fill="currentColor" />
      <circle cx="17" cy="16.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

function BrunchIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="13" r="6" />
      <circle cx="12" cy="13" r="2.4" />
      <path d="M3 13h1.5M19.5 13H21M12 4v1.5" />
    </svg>
  );
}
