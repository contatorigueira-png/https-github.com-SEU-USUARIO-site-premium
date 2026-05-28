"use client";

import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06]">
      <div className="container-x py-8 lg:py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-5">
            <div className="flex items-baseline gap-1.5">
              <span className="font-display text-h2 text-[var(--fg)]">Ilha da Kosta</span>
              <span className="font-display text-h2 text-[var(--accent)]">II</span>
            </div>
            <p className="mt-2 max-w-sm text-body-sm text-[var(--fg-muted)] text-pretty">
              Frutos do mar premium, sushi e coquetelaria autoral à beira-mar de Recife.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-caption uppercase tracking-[0.28em] text-[var(--accent)]/80">
              Horários
            </p>
            <ul className="mt-2 space-y-0.5 text-body-sm text-[var(--fg-muted)]">
              {site.hours.map((h) => (
                <li key={h.label}>
                  <span className="text-[var(--fg)]">{h.label}</span> · {h.value}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-caption uppercase tracking-[0.28em] text-[var(--accent)]/80">
              Contato
            </p>
            <ul className="mt-2 space-y-0.5 text-body-sm">
              <li>
                <a
                  href={`tel:${site.phone.replace(/\D/g, "")}`}
                  className="text-[var(--fg)] hover:text-[var(--accent)] transition-colors"
                >
                  {site.phone}
                </a>
              </li>
              <li className="text-[var(--fg-muted)]">{site.address}</li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-caption uppercase tracking-[0.28em] text-[var(--accent)]/80">
              Social
            </p>
            <ul className="mt-2 space-y-0.5 text-body-sm">
              <li>
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[var(--fg)] hover:text-[var(--accent)] transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[var(--fg)] hover:text-[var(--accent)] transition-colors"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 h-px hairline" />

        <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="text-caption uppercase tracking-[0.22em] text-[var(--fg-muted)]">
            © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
          </p>
          <p className="text-caption uppercase tracking-[0.22em] text-[var(--fg-muted)]">
            Recife · Pernambuco · Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
