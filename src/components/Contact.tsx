"use client";

import { Reveal } from "./Reveal";
import { WhatsappIcon } from "./Navbar";
import { site, whatsappLink } from "@/lib/site";

export function Contact() {
  return (
    <section id="pedidos" className="relative py-12 lg:py-20">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-lg border border-[var(--line-soft)] bg-cream-100 shadow-elevated">
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(60%_70%_at_85%_20%,rgba(232,205,158,0.6),transparent_60%)]"
            />
            <div aria-hidden className="absolute inset-0 grain opacity-30" />

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 sm:p-6 lg:p-10">
              <div>
                <p className="text-caption uppercase tracking-[0.28em] text-[var(--accent)]">
                  Pedidos & encomendas
                </p>
                <h2 className="mt-2 font-display font-light text-display-md md:text-display-lg text-balance leading-[1.02] text-[var(--fg)]">
                  Faça seu pedido.
                  <span className="block italic text-[var(--accent)]">
                    Nós cuidamos do resto.
                  </span>
                </h2>
                <p className="mt-3 max-w-md text-body text-[var(--fg-muted)] text-pretty">
                  Atendimento direto pela nossa equipe no WhatsApp — encomendas de
                  pães, bolos e cestas de brunch, com confirmação em minutos.
                  Retirada na loja ou entrega no seu bairro.
                </p>

                <div className="mt-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center justify-center gap-1.5 rounded-sm bg-[var(--accent)] px-4 py-2.5 text-body text-cream-50 hover:bg-[var(--accent-soft)] transition-all duration-300 ease-luxe shadow-[0_12px_36px_-12px_rgba(169,120,63,0.6)]"
                  >
                    <WhatsappIcon className="h-[18px] w-[18px]" />
                    Pedir no WhatsApp
                    <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                      →
                    </span>
                  </a>
                  <a
                    href={`tel:${site.phone.replace(/\D/g, "")}`}
                    className="inline-flex items-center justify-center gap-1.5 rounded-sm border border-[var(--line)] bg-cream-50/60 px-4 py-2.5 text-body text-[var(--fg)] hover:border-[var(--accent)]/50 transition-colors duration-300"
                  >
                    {site.phone}
                  </a>
                </div>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 self-end content-end">
                {[
                  { k: "Entrega", v: site.delivery },
                  { k: "Retirada", v: "Pronta na loja a partir das 7h" },
                  { k: "Encomendas", v: "Bolos e cestas com 24h de antecedência" },
                  { k: "Eventos", v: "Coffee breaks e cestas corporativas" },
                ].map((m) => (
                  <li
                    key={m.k}
                    className="rounded-md border border-[var(--line-soft)] bg-cream-50/80 p-3"
                  >
                    <p className="text-caption uppercase tracking-[0.24em] text-[var(--accent)]">
                      {m.k}
                    </p>
                    <p className="mt-1 text-body-sm text-[var(--fg)]">{m.v}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
