"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowDown, MessageCircle, Mail } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { LinkedinIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import { profile, ganchos } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="topo"
      className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 overflow-hidden"
    >
      {/* glow accent atrás */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 h-[480px] w-[480px] rounded-full bg-primary/15 blur-[140px]"
      />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1fr_220px] md:gap-12 items-start">
          <div className="space-y-6 fade-up">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground font-mono">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              {profile.cidade} · operação consolidada · buscando próximo passo
            </div>

            <h1 className="font-display font-bold tracking-tight text-4xl sm:text-5xl md:text-6xl leading-[1.05]">
              {profile.nome}
              <span className="block text-primary mt-1 sm:mt-2">
                {profile.cargo}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              {profile.headline}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={`https://wa.me/${profile.telefoneLink}`}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "rounded-full text-base h-12 px-6"
                )}
              >
                <MessageCircle className="size-4" />
                Fala comigo
              </a>
              <a
                href={`mailto:${profile.email}`}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "rounded-full text-base h-12 px-6"
                )}
              >
                <Mail className="size-4" />
                {profile.email}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "lg" }),
                  "rounded-full text-base h-12 px-5"
                )}
              >
                <LinkedinIcon className="size-4" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Foto */}
          <div className="relative justify-self-start md:justify-self-end">
            <div className="relative w-40 h-40 sm:w-52 sm:h-52 rounded-2xl overflow-hidden border border-border bg-muted">
              <Image
                src="/foto-pedro.jpg"
                alt="Pedro Maia"
                fill
                sizes="(max-width: 640px) 160px, 208px"
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-3 -right-3 rounded-full bg-primary text-primary-foreground px-3 py-1 text-xs font-mono shadow-lg">
              PM
            </div>
          </div>
        </div>

        {/* 3 ganchos numéricos */}
        <div className="mt-14 sm:mt-20">
          <div className="mb-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/80 font-mono">
            <span className="inline-block h-1 w-6 bg-primary/60" />
            Gestão atual · momento presente
          </div>
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-3">
            {ganchos.map((g, i) => (
              <div
                key={g.numero}
                className="rounded-2xl border border-border bg-card p-5 sm:p-6 fade-up"
                style={{ animationDelay: `${0.1 + i * 0.1}s` }}
              >
                <div className="font-display font-bold text-5xl sm:text-6xl text-primary leading-none">
                  {g.numero}
                </div>
                <div className="mt-3 font-medium text-sm sm:text-base">
                  {g.label}
                </div>
                <div className="mt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {g.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href="#operacao"
            className="text-xs text-muted-foreground flex flex-col items-center gap-1 hover:text-foreground transition-colors"
            aria-label="Rolar para Operação"
          >
            <span className="uppercase tracking-widest font-mono">role</span>
            <ArrowDown className="size-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
