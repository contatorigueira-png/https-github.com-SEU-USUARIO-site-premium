"use client";

import { Reveal, Stagger, StaggerItem } from "./Reveal";

const items = [
  {
    quote:
      "Cada detalhe foi pensado. A entrada do salão, a temperatura do vinho, o silêncio entre os tempos. Sai dali outra pessoa.",
    name: "Mariana Andrade",
    role: "Sommelière, São Paulo",
  },
  {
    quote:
      "Comi o melhor sashimi da minha vida em Recife — algo que jamais esperei dizer. O Omakase do Atlântico é uma obra.",
    name: "Henrique Vilela",
    role: "Crítico gastronômico",
  },
  {
    quote:
      "Reservamos para o aniversário dela e ganhamos uma noite inteira. A equipe entende o que é hospitalidade de verdade.",
    name: "Lucas e Rafaela",
    role: "Hóspedes do Aman, em viagem ao Nordeste",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-12 lg:py-20">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="text-caption uppercase tracking-[0.28em] text-[var(--accent)]">
            Palavras de quem viveu
          </p>
          <h2 className="mt-2 font-display font-light text-h1 md:text-display-md text-balance leading-[1.05]">
            O que dizem
            <span className="italic text-[var(--accent)]/90"> à mesa.</span>
          </h2>
        </Reveal>

        <Stagger className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-3" staggerChildren={0.1}>
          {items.map((t) => (
            <StaggerItem key={t.name}>
              <figure className="group relative h-full rounded-md border border-white/[0.07] bg-white/[0.015] p-4 lg:p-5 transition-all duration-500 ease-luxe hover:border-[var(--accent)]/30 hover:bg-white/[0.03]">
                <span
                  aria-hidden
                  className="absolute -top-3 left-3 font-display text-display-md italic leading-none text-[var(--accent)]/40"
                >
                  &ldquo;
                </span>
                <blockquote className="font-display text-body-lg leading-[1.5] text-[var(--fg)]/90 italic text-pretty">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-3 flex items-center gap-1.5">
                  <span className="h-px w-4 bg-[var(--accent)]/50" />
                  <div>
                    <p className="text-body-sm text-[var(--fg)]">{t.name}</p>
                    <p className="text-caption uppercase tracking-[0.2em] text-[var(--fg-muted)]">
                      {t.role}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
