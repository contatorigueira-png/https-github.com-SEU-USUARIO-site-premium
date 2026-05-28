"use client";

import { Reveal, Stagger, StaggerItem } from "./Reveal";

const dishes = [
  {
    chapter: "I",
    category: "Frutos do mar",
    name: "Moqueca da Casa",
    notes: "Pirarucu, leite de coco artesanal, dendê e coentro de cultivo próprio.",
    tone: "from-[#3a2418] to-[#0c0808]",
  },
  {
    chapter: "II",
    category: "Sushi & Sashimi",
    name: "Omakase do Atlântico",
    notes: "Sequência de 9 tempos, peixes do dia, finalização com brasa de carvão japonês.",
    tone: "from-[#1e1a26] to-[#0a0a10]",
  },
  {
    chapter: "III",
    category: "Pratos premium",
    name: "Lagosta ao Carvão",
    notes: "Lagosta inteira grelhada, manteiga de limão-cravo, vegetais da estação.",
    tone: "from-[#2a1d10] to-[#0a0806]",
  },
  {
    chapter: "IV",
    category: "Coquetelaria autoral",
    name: "Maré Dourada",
    notes: "Cachaça envelhecida, mel de jatobá, cítricos defumados, espuma de coco.",
    tone: "from-[#2c2415] to-[#0a0906]",
  },
];

export function SignatureDishes() {
  return (
    <section id="assinatura" className="relative py-12 lg:py-20">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="text-caption uppercase tracking-[0.28em] text-[var(--accent)]">
            Assinatura
          </p>
          <h2 className="mt-2 font-display font-light text-h1 md:text-display-md text-balance leading-[1.05]">
            Quatro capítulos
            <span className="italic text-[var(--accent)]/90"> da nossa cozinha.</span>
          </h2>
          <p className="mt-2 text-body text-[var(--fg-muted)] text-pretty">
            Uma carta breve e cuidadosamente escrita, que muda com as marés e
            celebra o que o litoral oferece de mais nobre.
          </p>
        </Reveal>

        <Stagger
          className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3"
          staggerChildren={0.1}
        >
          {dishes.map((d) => (
            <StaggerItem key={d.chapter}>
              <article className="group relative h-full overflow-hidden rounded-md border border-white/[0.07] bg-[var(--bg-elev)]">
                <div
                  className={`relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-br ${d.tone}`}
                  aria-hidden
                >
                  <div className="absolute inset-0 grain" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,190,122,0.18),transparent_55%)] opacity-80 transition-opacity duration-700 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08080b] via-transparent to-transparent" />
                  <span className="absolute left-2 top-2 font-display text-display-md italic text-white/15 transition-transform duration-700 ease-luxe group-hover:scale-110 group-hover:text-[var(--accent)]/30">
                    {d.chapter}
                  </span>
                </div>

                <div className="p-3 lg:p-4">
                  <p className="text-caption uppercase tracking-[0.28em] text-[var(--accent)]/80">
                    {d.category}
                  </p>
                  <h3 className="mt-1 font-display text-h2 text-[var(--fg)]">{d.name}</h3>
                  <p className="mt-1 text-body-sm text-[var(--fg-muted)]">{d.notes}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
