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
            10 anos empreendedor · reentrada acelerada no corporativo
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            5 negócios próprios em paralelo (2014–2024) → reentrada como
            Designer Gráfico Sênior (mai/2025) → Coordenador de Marketing em 4
            meses (Feira Shop) → CEO da Accellera 1 mês depois. Trajetória
            híbrida de operador-fundador, não cargo concedido por linearidade
            corporativa.
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
