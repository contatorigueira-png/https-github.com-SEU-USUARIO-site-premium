"use client";

import { Reveal, Stagger, StaggerItem } from "./Reveal";

const pillars = [
  {
    eyebrow: "01",
    title: "Frutos do mar premium",
    body: "Selecionados diariamente nas costas pernambucanas — frescor que se sente em cada toque, em cada aroma.",
  },
  {
    eyebrow: "02",
    title: "Atmosfera sofisticada",
    body: "Iluminação morna, brisa do Atlântico e um silêncio elegante que convida à conversa demorada.",
  },
  {
    eyebrow: "03",
    title: "Hospitalidade calorosa",
    body: "Um serviço atencioso, discreto e profundamente humano — como uma casa que sempre esperou por você.",
  },
  {
    eyebrow: "04",
    title: "Momentos memoráveis",
    body: "Aniversários, encontros, celebrações sem motivo. Aqui o tempo desacelera e a memória se forma.",
  },
];

export function About() {
  return (
    <section id="sobre" className="relative py-12 lg:py-20">
      <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="text-caption uppercase tracking-[0.28em] text-[var(--accent)]">
              A casa
            </p>
            <h2 className="mt-2 font-display font-light text-h1 md:text-display-md text-balance leading-[1.05]">
              Uma ilha à beira-mar,
              <span className="italic text-[var(--accent)]/90"> construída em torno do tempo.</span>
            </h2>
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:pt-3">
          <Reveal delay={0.1}>
            <p className="text-body-lg text-[var(--fg-muted)] text-pretty max-w-xl">
              No Ilha da Kosta II, o oceano não é apenas paisagem — é matéria-prima,
              ritmo e companhia. Cada prato nasce do diálogo entre a tradição
              pernambucana e a precisão da alta gastronomia. Cada noite é
              cuidadosamente coreografada para sentir, e não apenas servir.
            </p>
          </Reveal>

          <Stagger className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
            {pillars.map((p) => (
              <StaggerItem key={p.eyebrow}>
                <article className="group relative h-full rounded-md border border-white/[0.07] bg-white/[0.015] p-3 lg:p-4 transition-all duration-500 ease-luxe hover:border-[var(--accent)]/30 hover:bg-white/[0.03]">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-caption uppercase tracking-[0.32em] text-[var(--accent)]/80">
                      {p.eyebrow}
                    </span>
                    <span className="h-px flex-1 bg-white/10 group-hover:bg-[var(--accent)]/30 transition-colors duration-500" />
                  </div>
                  <h3 className="mt-2 font-display text-h3 text-[var(--fg)]">{p.title}</h3>
                  <p className="mt-1 text-body-sm text-[var(--fg-muted)]">{p.body}</p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>

      <div aria-hidden className="container-x mt-10 lg:mt-16">
        <div className="h-px hairline" />
      </div>
    </section>
  );
}
