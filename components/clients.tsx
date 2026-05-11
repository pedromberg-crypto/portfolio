"use client";

import * as React from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { clientes, type Cliente } from "@/lib/data";

export function Clients() {
  const [active, setActive] = React.useState(clientes[0].slug);
  const current = clientes.find((c) => c.slug === active) ?? clientes[0];

  return (
    <section id="operacao" className="py-20 sm:py-28 scroll-mt-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-10 sm:mb-14 max-w-2xl space-y-3">
          <div className="text-xs uppercase tracking-[0.18em] text-primary font-mono">
            §01 — Operação atual
          </div>
          <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl leading-tight">
            4 squads paralelas — ciclo completo de cada cliente
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Planejamento estratégico, produto digital, mídia paga, design e
            operação semanal. Cobertura B2B + B2C nos 4 clientes, da mídia
            orgânica ao tráfego pago.
          </p>
        </div>

        {/* Pills navegáveis: scroll-x em mobile, grid 4-col em desktop */}
        <div
          className="-mx-5 sm:mx-0 px-5 sm:px-0 overflow-x-auto sm:overflow-visible no-scrollbar mb-6 sm:mb-8"
          role="tablist"
          aria-label="Selecionar cliente"
        >
          <div className="flex sm:grid sm:grid-cols-4 gap-2 min-w-max sm:min-w-0">
            {clientes.map((c) => {
              const isActive = c.slug === active;
              return (
                <button
                  key={c.slug}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(c.slug)}
                  className={`shrink-0 sm:shrink whitespace-nowrap rounded-xl px-4 py-3 text-sm font-medium transition-all border ${
                    isActive
                      ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                      : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  {c.nome}
                </button>
              );
            })}
          </div>
        </div>

        <ClientCard cliente={current} />
      </div>
    </section>
  );
}

function ClientCard({ cliente: c }: { cliente: Cliente }) {
  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden">
      <div className="grid md:grid-cols-[1fr_280px]">
        <div className="p-5 sm:p-8 space-y-5 min-w-0">
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
            <h3 className="font-display font-bold text-2xl sm:text-3xl tracking-tight break-words">
              {c.nome}
            </h3>
            <span className="text-sm text-muted-foreground break-words">
              · {c.segmento}
            </span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {c.tipos.map((t) => (
              <Badge
                key={t}
                variant="secondary"
                className="font-mono text-[10px] uppercase tracking-wider"
              >
                {t}
              </Badge>
            ))}
            {c.midias.map((m) => (
              <Badge
                key={m}
                variant="outline"
                className="font-mono text-[10px] uppercase tracking-wider"
              >
                {m === "orgânica" ? "Mídia orgânica" : "Tráfego pago"}
              </Badge>
            ))}
          </div>

          <p className="text-sm sm:text-base text-foreground/90 leading-relaxed break-words">
            {c.resumo}
          </p>

          <ul className="space-y-2 text-sm text-muted-foreground">
            {c.destaques.map((d) => (
              <li key={d} className="flex gap-3">
                <span
                  aria-hidden
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                />
                <span className="min-w-0 flex-1 break-words">{d}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <span className="inline-flex items-center rounded-full border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground leading-snug">
              Status: {c.status}
            </span>
            {c.link && (
              <a
                href={c.link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
              >
                <ExternalLink className="size-3.5" />
                {c.link.label}
              </a>
            )}
          </div>

          {c.nota && (
            <p className="text-xs text-muted-foreground italic">{c.nota}</p>
          )}
        </div>

        {/* Coluna print / placeholder */}
        <div className="bg-muted/40 border-t md:border-t-0 md:border-l border-border min-h-[180px] md:min-h-[300px] relative">
          {c.prints && c.prints[0] ? (
            <PlaceholderPrint
              src={c.prints[0].src}
              alt={c.prints[0].alt}
              type={c.prints[0].type ?? "image"}
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/70">
                {c.slug === "realizza" ? "Cliente piloto" : "Pipeline"}
              </div>
              <div className="mt-2 font-display text-2xl text-primary/70">
                {c.slug === "realizza" ? "~20 artefatos" : "5 estágios"}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">
                {c.slug === "realizza"
                  ? "via Stage 1 + Stage 2"
                  : "captura → conversão"}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function PlaceholderPrint({
  src,
  alt,
  type,
}: {
  src: string;
  alt: string;
  type: "image" | "video";
}) {
  const [error, setError] = React.useState(false);

  if (error) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-primary/5 to-transparent">
        <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/70">
          {type === "video" ? "vídeo" : "print"}
        </div>
        <div className="mt-2 font-display text-xl text-primary/70">
          em breve
        </div>
        <div className="mt-2 text-xs text-muted-foreground max-w-[200px] leading-snug">
          {alt}
        </div>
      </div>
    );
  }

  if (type === "video") {
    return (
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-label={alt}
        className="absolute inset-0 h-full w-full object-cover"
        onError={() => setError(true)}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, 280px"
      className="object-cover object-top"
      onError={() => setError(true)}
    />
  );
}
