"use client";

import { Reveal, Stagger, StaggerItem } from "./Reveal";

const pillars = [
  {
    eyebrow: "01",
    title: "Padaria artesanal",
    body: "Massas de fermentação natural, longas curas e forno a lenha. Cada pão leva tempo — e o tempo se sente na crosta.",
  },
  {
    eyebrow: "02",
    title: "Ingredientes gourmet",
    body: "Farinhas selecionadas, manteiga francesa, frutas da estação e produtores locais que conhecemos pelo nome.",
  },
  {
    eyebrow: "03",
    title: "Frescor diário",
    body: "Produção que começa às 4h. Tudo o que chega ao balcão foi feito naquela manhã, nunca antes.",
  },
  {
    eyebrow: "04",
    title: "Cultura de delicatessen",
    body: "Queijos curados, charcutaria fina e cafés de especialidade — uma despensa refinada para o seu dia a dia.",
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
            <h2 className="mt-2 font-display font-light text-h1 md:text-display-md text-balance leading-[1.05] text-[var(--fg)]">
              Uma padaria construída
              <span className="italic text-[var(--accent)]"> em torno do ofício.</span>
            </h2>
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:pt-3">
          <Reveal delay={0.1}>
            <p className="text-body-lg text-[var(--fg-muted)] text-pretty max-w-xl">
              A Porto Primo nasceu de uma ideia simples: que o pão de cada dia
              pode ser extraordinário. Unimos a paciência da panificação artesanal
              à precisão da alta confeitaria e à hospitalidade calorosa de um café
              de bairro — para transformar o cotidiano em algo digno de se demorar.
            </p>
          </Reveal>

          <Stagger className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
            {pillars.map((p) => (
              <StaggerItem key={p.eyebrow}>
                <article className="group relative h-full rounded-md border border-[var(--line-soft)] bg-cream-50/60 p-3 lg:p-4 transition-all duration-500 ease-luxe hover:border-[var(--accent)]/40 hover:bg-cream-100 hover:shadow-soft">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-caption uppercase tracking-[0.32em] text-[var(--accent)]">
                      {p.eyebrow}
                    </span>
                    <span className="h-px flex-1 bg-[var(--line)] group-hover:bg-[var(--accent)]/40 transition-colors duration-500" />
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
