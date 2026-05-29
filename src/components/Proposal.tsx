"use client";

import { Reveal, Stagger, StaggerItem } from "./Reveal";

/* ------------------------------------------------------------------ */
/*  Conteúdo da proposta                                               */
/* ------------------------------------------------------------------ */

const scope = [
  {
    title: "Website institucional responsivo",
    body: "Desenvolvimento completo de um site institucional fluido em qualquer dispositivo.",
  },
  {
    title: "Estrutura visual premium",
    body: "Linguagem visual alinhada ao posicionamento sofisticado da marca Porto Primo.",
  },
  {
    title: "Experiência mobile & desktop",
    body: "Otimização da navegação e do desempenho em telas grandes e em celulares.",
  },
  {
    title: "Integração de contato & redes",
    body: "Conexão direta com WhatsApp, canais de atendimento e redes sociais.",
  },
  {
    title: "Central de links para Instagram",
    body: "Página de links personalizada, organizada e fiel à identidade da marca.",
  },
  {
    title: "Refinamento com fotos reais",
    body: "Ajustes visuais e curadoria de imagens reais para fortalecer a identidade digital.",
  },
];

const maintenance = [
  "Atualizações frequentes do site e da central de links",
  "Ajustes de conteúdo e comunicação visual",
  "Criação de novas seções e páginas promocionais quando necessário",
  "Otimizações contínuas de experiência do usuário (UX)",
  "Acompanhamento básico de desempenho e melhorias estratégicas",
  "SEO local básico",
  "Suporte prioritário para alterações e ajustes",
  "Alinhamento digital com campanhas sazonais e ações promocionais",
];

const payment = [
  { label: "Na aprovação do projeto", value: "50%", note: "R$ 3.000,00" },
  { label: "Na entrega final", value: "50%", note: "R$ 3.000,00" },
];

/* ------------------------------------------------------------------ */
/*  Página                                                             */
/* ------------------------------------------------------------------ */

export function Proposal() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Ambient background */}
      <div aria-hidden className="fixed inset-0 ambient-warm" />
      <div aria-hidden className="fixed inset-0 grain" />

      <div className="relative z-10">
        <Cover />
        <Intro />
        <Scope />
        <Investment />
        <Maintenance />
        <Objective />
        <Signature />
      </div>
    </main>
  );
}

/* ----------------------------- Capa ------------------------------- */

function Cover() {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center container-x text-center py-16">
      <div
        aria-hidden
        className="absolute -top-24 left-1/2 -translate-x-1/2 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(212,190,122,0.18),transparent_60%)] blur-3xl"
      />

      <Reveal>
        <p className="text-caption uppercase tracking-[0.34em] text-[var(--accent)]/90">
          Proposta Comercial
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <h1 className="mt-4 font-display font-light text-display-md md:text-display-lg lg:text-display-xl text-balance leading-[1.02]">
          Website
          <span className="block italic text-[var(--accent)]/95">
            Porto Primo Delicatessen
          </span>
        </h1>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="mt-5 max-w-2xl text-body-lg text-[var(--fg-muted)] text-pretty">
          Desenvolvimento e estruturação da presença digital da marca — foco em
          posicionamento premium, experiência do usuário e fortalecimento da
          identidade no ambiente online.
        </p>
      </Reveal>

      <Reveal delay={0.3}>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-body-sm text-[var(--fg-muted)]">
          <span>
            Preparado por{" "}
            <span className="text-[var(--fg)]">Alexandre Rigueira</span>
          </span>
          <span aria-hidden className="hidden sm:inline text-[var(--accent)]/40">
            •
          </span>
          <span>Maio de 2026</span>
        </div>
      </Reveal>

      <div
        aria-hidden
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[var(--fg-muted)]"
      >
        <span className="text-caption uppercase tracking-[0.28em]">Role</span>
        <span className="h-5 w-px bg-gradient-to-b from-[var(--fg-muted)] to-transparent" />
      </div>
    </section>
  );
}

/* -------------------------- Apresentação -------------------------- */

function Intro() {
  return (
    <section className="relative py-12 lg:py-20">
      <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
        <div className="lg:col-span-4">
          <Reveal>
            <p className="text-caption uppercase tracking-[0.28em] text-[var(--accent)]">
              Apresentação
            </p>
            <h2 className="mt-2 font-display font-light text-h1 md:text-display-md text-balance leading-[1.05]">
              Uma marca premium
              <span className="italic text-[var(--accent)]/90"> merece um digital à altura.</span>
            </h2>
          </Reveal>
        </div>
        <div className="lg:col-span-8 lg:pt-3">
          <Reveal delay={0.1}>
            <p className="text-body-lg text-[var(--fg-muted)] text-pretty max-w-2xl">
              Apresentamos a proposta para o desenvolvimento e a estruturação da
              presença digital da <span className="text-[var(--fg)]">Porto Primo
              Delicatessen</span>, com foco em posicionamento premium, experiência
              do usuário, fortalecimento da marca e otimização da comunicação
              digital com os clientes. Cada decisão de design e conteúdo é pensada
              para traduzir, na tela, o mesmo cuidado e sofisticação que a marca
              entrega em seus produtos.
            </p>
          </Reveal>
        </div>
      </div>
      <Divider />
    </section>
  );
}

/* ----------------------------- Escopo ----------------------------- */

function Scope() {
  return (
    <section className="relative py-12 lg:py-20">
      <div className="container-x">
        <Reveal>
          <p className="text-caption uppercase tracking-[0.28em] text-[var(--accent)]">
            01 — Escopo do projeto
          </p>
          <h2 className="mt-2 font-display font-light text-h1 md:text-display-md text-balance leading-[1.05] max-w-2xl">
            O que será entregue.
          </h2>
        </Reveal>

        <Stagger className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {scope.map((item, i) => (
            <StaggerItem key={item.title}>
              <article className="group relative h-full rounded-md border border-white/[0.07] bg-white/[0.015] p-4 lg:p-5 transition-all duration-500 ease-luxe hover:border-[var(--accent)]/30 hover:bg-white/[0.03]">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-caption uppercase tracking-[0.32em] text-[var(--accent)]/80">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1 bg-white/10 group-hover:bg-[var(--accent)]/30 transition-colors duration-500" />
                </div>
                <h3 className="mt-3 font-display text-h3 text-[var(--fg)]">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-body-sm text-[var(--fg-muted)]">
                  {item.body}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
      <Divider className="mt-12 lg:mt-16" />
    </section>
  );
}

/* --------------------- Investimento + Pagamento ------------------- */

function Investment() {
  return (
    <section className="relative py-12 lg:py-20">
      <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        {/* Card de investimento */}
        <div className="lg:col-span-7">
          <Reveal>
            <div className="relative overflow-hidden rounded-lg border border-[var(--accent)]/25 bg-gradient-to-br from-white/[0.04] to-transparent p-6 lg:p-8 shadow-luxe">
              <div
                aria-hidden
                className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(212,190,122,0.16),transparent_65%)] blur-2xl"
              />
              <p className="text-caption uppercase tracking-[0.28em] text-[var(--accent)]">
                02 — Investimento
              </p>
              <p className="mt-4 text-body text-[var(--fg-muted)]">
                Desenvolvimento completo do projeto
              </p>
              <p className="mt-1 font-display font-light text-display-md md:text-display-lg text-[var(--fg)] leading-none">
                R$ 6.000<span className="text-[var(--accent)]/90">,00</span>
              </p>
              <p className="mt-4 max-w-md text-body-sm text-[var(--fg-muted)]">
                Valor único referente à concepção, design e desenvolvimento
                integral do website e da central de links.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Condições de pagamento */}
        <div className="lg:col-span-5">
          <Reveal delay={0.1}>
            <p className="text-caption uppercase tracking-[0.28em] text-[var(--accent)]">
              Condições de pagamento
            </p>
            <div className="mt-4 space-y-3">
              {payment.map((p) => (
                <div
                  key={p.label}
                  className="flex items-center justify-between rounded-md border border-white/[0.07] bg-white/[0.015] px-4 py-4"
                >
                  <div>
                    <p className="font-display text-h2 text-[var(--accent)]/95 leading-none">
                      {p.value}
                    </p>
                    <p className="mt-1 text-body-sm text-[var(--fg-muted)]">
                      {p.label}
                    </p>
                  </div>
                  <p className="text-body text-[var(--fg)]">{p.note}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
      <Divider className="mt-12 lg:mt-16" />
    </section>
  );
}

/* -------------------------- Manutenção ---------------------------- */

function Maintenance() {
  return (
    <section className="relative py-12 lg:py-20">
      <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="text-caption uppercase tracking-[0.28em] text-[var(--accent)]">
              03 — Manutenção mensal
            </p>
            <h2 className="mt-2 font-display font-light text-h1 md:text-display-md text-balance leading-[1.05]">
              Presença digital
              <span className="italic text-[var(--accent)]/90"> sempre viva.</span>
            </h2>
            <div className="mt-6 rounded-lg border border-white/[0.08] bg-white/[0.02] p-6">
              <p className="text-body-sm text-[var(--fg-muted)]">
                Investimento mensal
              </p>
              <p className="mt-1 font-display font-light text-display-md text-[var(--fg)] leading-none">
                R$ 700<span className="text-[var(--accent)]/90">,00</span>
                <span className="text-h3 text-[var(--fg-muted)]">/mês</span>
              </p>
              <p className="mt-4 text-body-sm text-[var(--fg-muted)]">
                Após a conclusão do projeto, disponibilizamos um plano de
                acompanhamento contínuo da presença digital da marca.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:pt-3">
          <Reveal delay={0.1}>
            <p className="text-body text-[var(--fg-muted)]">
              O plano de manutenção inclui:
            </p>
          </Reveal>
          <Stagger className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {maintenance.map((item) => (
              <StaggerItem key={item}>
                <div className="flex items-start gap-3 rounded-md border border-white/[0.06] bg-white/[0.012] px-4 py-3.5 transition-colors duration-500 hover:border-[var(--accent)]/25">
                  <span
                    aria-hidden
                    className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-[var(--accent)]/80"
                  />
                  <p className="text-body-sm text-[var(--fg)]/90">{item}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
      <Divider className="mt-12 lg:mt-16" />
    </section>
  );
}

/* ---------------------------- Objetivo ---------------------------- */

function Objective() {
  return (
    <section className="relative py-12 lg:py-24">
      <div className="container-x">
        <Reveal>
          <p className="text-caption uppercase tracking-[0.28em] text-[var(--accent)] text-center">
            Objetivo
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-5 max-w-3xl text-center font-display font-light text-h2 md:text-display-md text-balance leading-[1.2] text-[var(--fg)]">
            Estruturar uma presença digital moderna, sofisticada e funcional —
            fortalecendo o posicionamento da{" "}
            <span className="italic text-[var(--accent)]/95">Porto Primo</span> e
            entregando uma experiência mais organizada, intuitiva e alinhada ao
            padrão premium da marca.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------- Assinatura --------------------------- */

function Signature() {
  return (
    <footer className="relative py-12 lg:py-16">
      <div className="container-x">
        <div className="h-px hairline" />
        <Reveal>
          <div className="mt-8 flex flex-col items-start gap-1">
            <p className="text-body text-[var(--fg-muted)]">Atenciosamente,</p>
            <p className="mt-2 font-display text-h2 text-[var(--fg)]">
              Alexandre Rigueira
            </p>
          </div>
        </Reveal>
        <p className="mt-10 text-caption uppercase tracking-[0.28em] text-[var(--fg-muted)]/60">
          Porto Primo Delicatessen — Proposta de presença digital
        </p>
      </div>
    </footer>
  );
}

/* ---------------------------- Helpers ----------------------------- */

function Divider({ className = "mt-10 lg:mt-16" }: { className?: string }) {
  return (
    <div aria-hidden className={`container-x ${className}`}>
      <div className="h-px hairline" />
    </div>
  );
}
