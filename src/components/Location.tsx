"use client";

import { Reveal } from "./Reveal";
import { site } from "@/lib/site";

export function Location() {
  return (
    <section id="localizacao" className="relative py-12 lg:py-20">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="text-caption uppercase tracking-[0.28em] text-[var(--accent)]">
            Onde estamos
          </p>
          <h2 className="mt-2 font-display font-light text-h1 md:text-display-md text-balance leading-[1.05]">
            Boa Viagem,
            <span className="italic text-[var(--accent)]/90"> de frente para o Atlântico.</span>
          </h2>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-3">
          <Reveal as="div" className="lg:col-span-5 order-2 lg:order-1">
            <div className="h-full rounded-md border border-white/[0.07] bg-white/[0.015] p-4 lg:p-5">
              <p className="text-caption uppercase tracking-[0.28em] text-[var(--accent)]/80">
                Endereço
              </p>
              <p className="mt-1 font-display text-h3 text-[var(--fg)]">{site.address}</p>
              <p className="mt-0.5 text-body-sm text-[var(--fg-muted)]">{site.city}</p>

              <div className="mt-4 h-px hairline" />

              <p className="mt-4 text-caption uppercase tracking-[0.28em] text-[var(--accent)]/80">
                Horários
              </p>
              <ul className="mt-2 space-y-1">
                {site.hours.map((h) => (
                  <li
                    key={h.label}
                    className="flex items-baseline justify-between gap-2 text-body-sm"
                  >
                    <span className="text-[var(--fg)]">{h.label}</span>
                    <span className="flex-1 mx-1 border-b border-dashed border-white/10" />
                    <span className="text-[var(--fg-muted)]">{h.value}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 h-px hairline" />

              <p className="mt-4 text-caption uppercase tracking-[0.28em] text-[var(--accent)]/80">
                Contato
              </p>
              <a
                href={`tel:${site.phone.replace(/\D/g, "")}`}
                className="mt-1 block text-body text-[var(--fg)] hover:text-[var(--accent)] transition-colors"
              >
                {site.phone}
              </a>
            </div>
          </Reveal>

          <Reveal as="div" delay={0.1} className="lg:col-span-7 order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-md border border-white/[0.07] aspect-[4/3] lg:aspect-[16/10]">
              <iframe
                src={site.mapsEmbed}
                title="Mapa — Ilha da Kosta II"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full grayscale contrast-[1.05] brightness-[0.7] opacity-90 hover:opacity-100 transition-opacity duration-500"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[var(--accent)]/10"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
