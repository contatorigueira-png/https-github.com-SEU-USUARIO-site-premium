"use client";

import { Reveal } from "./Reveal";
import { site, whatsappLink } from "@/lib/site";

export function Reservation() {
  return (
    <section id="reservas" className="relative py-12 lg:py-20">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-lg border border-white/[0.07] bg-[var(--bg-elev)]">
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(60%_70%_at_85%_30%,rgba(212,190,122,0.18),transparent_60%)]"
            />
            <div aria-hidden className="absolute inset-0 grain opacity-60" />

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 sm:p-6 lg:p-10">
              <div>
                <p className="text-caption uppercase tracking-[0.28em] text-[var(--accent)]">
                  Reservas
                </p>
                <h2 className="mt-2 font-display font-light text-display-md md:text-display-lg text-balance leading-[1.02]">
                  Reserve sua noite.
                  <span className="block italic text-[var(--accent)]/95">
                    Nós cuidamos do resto.
                  </span>
                </h2>
                <p className="mt-3 max-w-md text-body text-[var(--fg-muted)] text-pretty">
                  Mesas limitadas, atendimento direto pela nossa equipe via
                  WhatsApp. Confirmamos sua reserva em minutos, com todos os
                  detalhes da noite — vinhos, ocasiões especiais, preferências.
                </p>

                <div className="mt-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center justify-center gap-1.5 rounded-sm bg-[var(--accent)] px-4 py-2.5 text-body text-[#0b0b0f] hover:bg-[var(--accent-warm)] transition-all duration-300 ease-luxe shadow-[0_8px_32px_rgba(212,190,122,0.25)]"
                  >
                    <WhatsappIcon />
                    Reservar pelo WhatsApp
                    <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                      →
                    </span>
                  </a>
                  <a
                    href={`tel:${site.phone.replace(/\D/g, "")}`}
                    className="inline-flex items-center justify-center gap-1.5 rounded-sm border border-white/15 px-4 py-2.5 text-body text-[var(--fg)] hover:border-white/30 transition-colors duration-300"
                  >
                    {site.phone}
                  </a>
                </div>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 self-end content-end">
                {[
                  { k: "Capacidade", v: "Até 8 convidados por mesa" },
                  { k: "Dress code", v: "Smart casual" },
                  { k: "Ocasiões", v: "Aniversários, pedidos, eventos privados" },
                  { k: "Estacionamento", v: "Valet exclusivo" },
                ].map((m) => (
                  <li
                    key={m.k}
                    className="rounded-md border border-white/[0.07] bg-black/30 p-3"
                  >
                    <p className="text-caption uppercase tracking-[0.24em] text-[var(--accent)]/80">
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

function WhatsappIcon() {
  return (
    <svg
      aria-hidden
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-current"
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.92c0 2.1.55 4.15 1.6 5.96L2 22l4.25-1.11a9.93 9.93 0 0 0 5.79 1.84h.01c5.46 0 9.91-4.45 9.91-9.92 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0 0 12.04 2Zm0 18.13a8.2 8.2 0 0 1-4.17-1.14l-.3-.18-2.52.66.67-2.46-.2-.31a8.18 8.18 0 0 1-1.25-4.35c0-4.54 3.69-8.23 8.23-8.23a8.17 8.17 0 0 1 5.82 2.41 8.17 8.17 0 0 1 2.41 5.82c0 4.55-3.69 8.23-8.23 8.23Zm4.51-6.16c-.25-.12-1.46-.72-1.68-.8-.23-.08-.39-.13-.55.13-.16.25-.63.8-.78.96-.14.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.38-.43.13-.14.17-.25.25-.41.08-.16.04-.31-.02-.43-.06-.13-.55-1.33-.76-1.83-.2-.48-.41-.42-.55-.42h-.47c-.16 0-.43.06-.65.31-.23.25-.86.85-.86 2.07 0 1.22.88 2.4 1 2.57.13.16 1.74 2.66 4.22 3.73.59.25 1.05.4 1.41.51.59.19 1.13.16 1.55.1.47-.07 1.46-.6 1.66-1.18.21-.58.21-1.07.14-1.18-.07-.11-.23-.18-.48-.31Z" />
    </svg>
  );
}
