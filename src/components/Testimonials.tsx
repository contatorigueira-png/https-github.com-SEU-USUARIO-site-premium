"use client";

import { Reveal, Stagger, StaggerItem } from "./Reveal";

const items = [
  {
    quote:
      "O croissant da Porto Primo é o melhor que comi fora de Paris. A crosta estala, o interior é manteiga pura. Virou meu ritual de sábado.",
    name: "Mariana Andrade",
    role: "Cliente desde 2022",
  },
  {
    quote:
      "Café de especialidade impecável e um pão de fermentação natural que justifica a viagem até a Boa Vista. Atendimento que aquece o dia.",
    name: "Henrique Vilela",
    role: "Crítico gastronômico",
  },
  {
    quote:
      "Encomendamos a mesa de brunch para um aniversário em casa. Chegou tudo fresco, lindo e perfeitamente embalado. Sofisticação no detalhe.",
    name: "Lucas & Rafaela",
    role: "Espinheiro, Recife",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-12 lg:py-20 bg-cream-100/50">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="text-caption uppercase tracking-[0.28em] text-[var(--accent)]">
            Quem frequenta a casa
          </p>
          <h2 className="mt-2 font-display font-light text-h1 md:text-display-md text-balance leading-[1.05] text-[var(--fg)]">
            Palavras de quem
            <span className="italic text-[var(--accent)]"> volta sempre.</span>
          </h2>
        </Reveal>

        <Stagger className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-3" staggerChildren={0.1}>
          {items.map((t) => (
            <StaggerItem key={t.name}>
              <figure className="group relative h-full rounded-md border border-[var(--line-soft)] bg-cream-50 p-4 lg:p-5 shadow-soft transition-all duration-500 ease-luxe hover:border-[var(--accent)]/40 hover:shadow-elevated">
                <span
                  aria-hidden
                  className="absolute -top-2 left-3 font-display text-display-md italic leading-none text-[var(--accent)]/40"
                >
                  &ldquo;
                </span>
                <blockquote className="relative font-display text-body-lg leading-[1.5] text-[var(--fg)]/90 italic text-pretty">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-3 flex items-center gap-1.5">
                  <span className="h-px w-4 bg-[var(--accent)]/60" />
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
