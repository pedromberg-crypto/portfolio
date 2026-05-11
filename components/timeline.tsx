import { timeline } from "@/lib/data";

export function Timeline() {
  return (
    <section
      id="trajetoria"
      className="py-20 sm:py-28 scroll-mt-16 bg-muted/30"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-10 sm:mb-14 max-w-2xl space-y-3">
          <div className="text-xs uppercase tracking-[0.18em] text-primary font-mono">
            §05 — Trajetória
          </div>
          <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl leading-tight">
            11 anos · 9 como empreendedor direto
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Estágio (2015) → 8 anos operando negócio físico (2016-2024) →
            marketing estratégico em transição (2025) → Accellera estruturada
            e consolidada (2025-2026). A formalização como CEO foi continuação
            de uma trajetória de empreendedor, não cargo recente isolado.
          </p>
        </div>

        <ol className="relative border-l border-border pl-6 sm:pl-8 space-y-8">
          {timeline.map((item, i) => (
            <li key={i} className="relative">
              <span
                aria-hidden
                className={`absolute -left-[31px] sm:-left-[39px] top-1 flex size-3.5 rounded-full ring-4 ring-background ${
                  i === 0 ? "bg-primary" : "bg-muted-foreground/40"
                }`}
              />
              <div className="space-y-1">
                <div className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {item.periodo}
                </div>
                <h3 className="font-display font-semibold text-lg sm:text-xl tracking-tight">
                  {item.cargo}{" "}
                  <span className="text-muted-foreground font-normal">
                    · {item.empresa}
                  </span>
                </h3>
                {item.detalhe && (
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.detalhe}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
