"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { site, whatsappLink } from "@/lib/site";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#assinatura", label: "Assinatura" },
  { href: "#galeria", label: "Galeria" },
  { href: "#reservas", label: "Reservas" },
  { href: "#localizacao", label: "Onde Estamos" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-luxe ${
        scrolled
          ? "bg-[rgba(8,8,11,0.72)] backdrop-blur-md border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-[72px] items-center justify-between">
        <a href="#top" className="group flex items-center gap-1.5" aria-label="Ilha da Kosta II">
          <span className="font-display text-h3 tracking-[0.02em] text-[var(--fg)]">
            Ilha da Kosta
          </span>
          <span className="font-display text-h3 text-[var(--accent)]">II</span>
        </a>

        <nav className="hidden lg:flex items-center gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-body-sm text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-sm border border-[var(--accent)]/40 px-3 py-1.5 text-body-sm text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[#0b0b0f] transition-all duration-300 ease-luxe"
          >
            Reservar
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
            aria-expanded={open}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-sm border border-white/10 text-[var(--fg)]"
          >
            <span className="sr-only">Menu</span>
            <div className="relative h-3 w-5">
              <span
                className={`absolute left-0 top-0 h-px w-full bg-current transition-transform duration-300 ${
                  open ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[6px] h-px w-full bg-current transition-opacity duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[12px] h-px w-full bg-current transition-transform duration-300 ${
                  open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden border-t border-white/[0.06] bg-[rgba(8,8,11,0.95)] backdrop-blur-md"
          >
            <nav className="container-x py-3 flex flex-col gap-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-body py-1 text-[var(--fg-muted)] hover:text-[var(--fg)]"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="mt-1 inline-flex items-center justify-center rounded-sm border border-[var(--accent)]/40 px-3 py-2 text-body text-[var(--accent)]"
              >
                Reservar pelo WhatsApp
              </a>
              <p className="text-caption uppercase text-[var(--fg-muted)] mt-1">
                {site.address}
              </p>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
