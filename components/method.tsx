import { ArrowRight } from "lucide-react";
import { metodo } from "@/lib/data";

export function Method() {
  return (
    <section id="metodo" className="py-20 sm:py-28 scroll-mt-16 bg-muted/30">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-10 sm:mb-14 max-w-2xl space-y-3">
          <div className="text-xs uppercase tracking-[0.18em] text-primary font-mono">
            §02 — Método transversal
          </div>
          <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl leading-tight">
            {metodo.titulo}
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {metodo.descricao}
          </p>
        </div>

        {/* Fluxo Stage 1 → Stage 2 */}
        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-6 items-stretch">
          {/* STAGE 1 */}
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-7 space-y-4">
            <div className="flex items-center gap-3">
              <div className="size-9 rounded-full bg-primary/10 text-primary font-display font-bold flex items-center justify-center">
                1
              </div>
              <h3 className="font-display font-bold text-xl tracking-tight">
                {metodo.stage1.titulo}
              </h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {metodo.stage1.bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span
                    aria-hidden
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/60"
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="pt-2 border-t border-border/60">
              <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                output
              </div>
              <div className="mt-1 text-sm">
                Mapa de Análise em <span className="text-primary font-semibold">18 seções</span>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center justify-center">
            <ArrowRight className="size-6 text-primary" />
          </div>

          {/* STAGE 2 */}
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-7 space-y-4">
            <div className="flex items-center gap-3">
              <div className="size-9 rounded-full bg-primary text-primary-foreground font-display font-bold flex items-center justify-center">
                2
              </div>
              <h3 className="font-display font-bold text-xl tracking-tight">
                {metodo.stage2.titulo}
              </h3>
            </div>
            <div className="space-y-3">
              {metodo.stage2.artefatos.map((a) => (
                <div key={a.tipo} className="space-y-1">
                  <div className="text-xs font-mono uppercase tracking-wider text-primary">
                    {a.tipo}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {a.lista.join(" · ")}
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-2 border-t border-border/60">
              <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                output
              </div>
              <div className="mt-1 text-sm">
                <span className="text-primary font-semibold">~20 arquivos</span> criados no projeto do cliente
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-sm text-muted-foreground italic">
          Apliquei em 3 clientes em produção: Bang Bang, Hospital São Rafael e Realizza.
        </div>
      </div>
    </section>
  );
}
