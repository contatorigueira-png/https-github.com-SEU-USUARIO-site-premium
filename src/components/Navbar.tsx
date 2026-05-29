"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { site, whatsappLink } from "@/lib/site";

const links = [
  { href: "#sobre", label: "A Casa" },
  { href: "#produtos", label: "Produtos" },
  { href: "#galeria", label: "Galeria" },
  { href: "#pedidos", label: "Pedidos" },
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
          ? "bg-[rgba(251,247,240,0.82)] backdrop-blur-md border-b border-[var(--line-soft)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-[72px] items-center justify-between">
        <a href="#top" className="group flex flex-col leading-none" aria-label={site.name}>
          <span className="font-display text-h3 tracking-[0.02em] text-[var(--fg)]">
            Porto <span className="italic text-[var(--accent)]">Primo</span>
          </span>
          <span className="text-[10px] uppercase tracking-[0.34em] text-[var(--fg-muted)]">
            Delicatessen
          </span>
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
            className="hidden sm:inline-flex items-center gap-1.5 rounded-sm bg-[var(--accent)] px-3 py-2 text-body-sm text-cream-50 hover:bg-[var(--accent-soft)] transition-all duration-300 ease-luxe"
          >
            <WhatsappIcon className="h-4 w-4" />
            Pedir no WhatsApp
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
            aria-expanded={open}
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-sm border border-[var(--line)] text-[var(--fg)]"
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
            className="lg:hidden border-t border-[var(--line-soft)] bg-[rgba(251,247,240,0.97)] backdrop-blur-md"
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
                className="mt-1 inline-flex items-center justify-center gap-1.5 rounded-sm bg-[var(--accent)] px-3 py-2.5 text-body text-cream-50"
              >
                <WhatsappIcon className="h-4 w-4" />
                Pedir no WhatsApp
              </a>
              <p className="text-caption uppercase tracking-[0.2em] text-[var(--fg-muted)] mt-1">
                {site.address}
              </p>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className ?? "h-[18px] w-[18px]"}
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.92c0 2.1.55 4.15 1.6 5.96L2 22l4.25-1.11a9.93 9.93 0 0 0 5.79 1.84h.01c5.46 0 9.91-4.45 9.91-9.92 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0 0 12.04 2Zm0 18.13a8.2 8.2 0 0 1-4.17-1.14l-.3-.18-2.52.66.67-2.46-.2-.31a8.18 8.18 0 0 1-1.25-4.35c0-4.54 3.69-8.23 8.23-8.23a8.17 8.17 0 0 1 5.82 2.41 8.17 8.17 0 0 1 2.41 5.82c0 4.55-3.69 8.23-8.23 8.23Zm4.51-6.16c-.25-.12-1.46-.72-1.68-.8-.23-.08-.39-.13-.55.13-.16.25-.63.8-.78.96-.14.16-.29.18-.54.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.38-.43.13-.14.17-.25.25-.41.08-.16.04-.31-.02-.43-.06-.13-.55-1.33-.76-1.83-.2-.48-.41-.42-.55-.42h-.47c-.16 0-.43.06-.65.31-.23.25-.86.85-.86 2.07 0 1.22.88 2.4 1 2.57.13.16 1.74 2.66 4.22 3.73.59.25 1.05.4 1.41.51.59.19 1.13.16 1.55.1.47-.07 1.46-.6 1.66-1.18.21-.58.21-1.07.14-1.18-.07-.11-.23-.18-.48-.31Z" />
    </svg>
  );
}
