"use client";

import * as React from "react";
import { ArrowUpRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { type Peca } from "@/lib/data";

export function Cases({ pecas }: { pecas: Peca[] }) {
  return (
    <section id="casos" className="py-20 sm:py-28 scroll-mt-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-10 sm:mb-14 max-w-2xl space-y-3">
          <div className="text-xs uppercase tracking-[0.18em] text-primary font-mono">
            §03 — Casos
          </div>
          <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl leading-tight">
            {pecas.length} casos reais — números, decisão, padrão
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Artefatos da Accellera com métrica explícita. Dados de pessoa,
            valores brutos e detalhes sensíveis anonimizados.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
          {pecas.map((p) => (
            <CaseCard key={p.id} peca={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseCard({ peca }: { peca: Peca }) {
  return (
    <Dialog>
      <DialogTrigger className="group w-full text-left rounded-2xl border border-border bg-card hover:border-primary/60 hover:bg-card/80 transition-all p-5 sm:p-6 space-y-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer">
        <div className="flex items-start justify-between gap-3">
          <div className="font-mono text-xs uppercase tracking-widest text-primary">
            Peça {String(peca.id).padStart(2, "0")}
          </div>
          <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
        </div>
        <h3 className="font-display font-bold text-lg sm:text-xl tracking-tight leading-snug">
          {peca.titulo}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {peca.tagline}
        </p>
      </DialogTrigger>

      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
        <DialogHeader className="space-y-2">
          <div className="font-mono text-[10px] uppercase tracking-widest text-primary">
            Peça {String(peca.id).padStart(2, "0")}
          </div>
          <DialogTitle className="font-display text-2xl sm:text-3xl tracking-tight leading-tight">
            {peca.titulo}
          </DialogTitle>
          <DialogDescription className="text-sm leading-relaxed">
            {peca.tagline}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-5 pt-2">
          {peca.body.map((bloco, i) => (
            <div key={i} className="space-y-2">
              {bloco.heading && (
                <h4 className="font-display font-semibold text-base sm:text-lg tracking-tight">
                  {bloco.heading}
                </h4>
              )}
              {bloco.texto && (
                <p className="text-sm text-foreground/90 leading-relaxed">
                  {bloco.texto}
                </p>
              )}
              {bloco.bullets && (
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {bloco.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span
                        aria-hidden
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/70"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
