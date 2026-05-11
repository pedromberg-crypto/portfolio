import { ExternalLink } from "lucide-react";
import { diagnostico } from "@/lib/data";

export function Diagnostico() {
  return (
    <section
      id="diagnostico"
      className="py-20 sm:py-28 scroll-mt-16 bg-primary/[0.03] border-y border-primary/10"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-10 sm:mb-14 max-w-3xl space-y-3">
          <div className="text-xs uppercase tracking-[0.18em] text-primary font-mono">
            §04 — Para esta empresa
          </div>
          <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl leading-tight">
            Discovery aplicado antes de me apresentar
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {diagnostico.intro}
          </p>
          <div className="pt-2">
            <a
              href={diagnostico.empresaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
            >
              fonte: {diagnostico.empresaUrl.replace("https://", "")}
              <ExternalLink className="size-3" />
            </a>
          </div>
        </div>

        <div className="space-y-4 sm:space-y-5">
          {diagnostico.itens.map((item, i) => (
            <div
              key={item.achado}
              className="rounded-2xl border border-border bg-card overflow-hidden"
            >
              <div className="grid md:grid-cols-[1fr_1fr] divide-y md:divide-y-0 md:divide-x divide-border">
                {/* Achado */}
                <div className="p-5 sm:p-6 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {String(i + 1).padStart(2, "0")} · achado
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-lg sm:text-xl tracking-tight">
                    {item.achado}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.detalhe}
                  </p>
                </div>

                {/* Ação */}
                <div className="p-5 sm:p-6 space-y-2 bg-primary/[0.04]">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
                      como eu agiria
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-lg sm:text-xl tracking-tight text-foreground/90">
                    Ação proposta
                  </h3>
                  <p className="text-sm text-foreground/85 leading-relaxed">
                    {item.acao}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-3xl text-xs font-mono leading-relaxed text-muted-foreground">
          {diagnostico.rodape}
        </p>
      </div>
    </section>
  );
}
