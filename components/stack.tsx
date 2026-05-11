import { stack } from "@/lib/data";

const blocos = [
  { titulo: "Gestão de projetos", items: stack.gestao, accent: false },
  { titulo: "Marketing & automação", items: stack.marketing, accent: false },
  {
    titulo: "Stack técnico — orquestrado via Claude Code",
    items: stack.tecnico,
    accent: true,
  },
  { titulo: "IA aplicada", items: stack.ia, accent: false },
  { titulo: "Design", items: stack.design, accent: false },
  { titulo: "Formação", items: stack.formacao, accent: false },
  { titulo: "Idiomas", items: stack.idiomas, accent: false },
];

export function Stack() {
  return (
    <section id="stack" className="py-20 sm:py-28 scroll-mt-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-10 sm:mb-14 max-w-2xl space-y-3">
          <div className="text-xs uppercase tracking-[0.18em] text-primary font-mono">
            §06 — Ferramentas e competências
          </div>
          <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl leading-tight">
            Stack operada · stack orquestrada
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Ferramentas que operei direto e camada técnica orquestrada via
            Claude Code — explícitas para não passar como dev quando sou GP.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {blocos.map((b) => (
            <div
              key={b.titulo}
              className={`rounded-2xl border p-5 sm:p-6 space-y-3 ${
                b.accent
                  ? "border-primary/40 bg-primary/5"
                  : "border-border bg-card"
              }`}
            >
              <h3
                className={`font-display font-semibold text-sm tracking-tight uppercase ${
                  b.accent ? "text-primary" : "text-foreground"
                }`}
              >
                {b.titulo}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {b.items.map((i) => (
                  <Chip key={i} accent={b.accent}>
                    {i}
                  </Chip>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Chip({
  children,
  accent,
}: {
  children: React.ReactNode;
  accent: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs leading-snug font-medium ${
        accent
          ? "bg-primary/15 text-primary border border-primary/30"
          : "bg-secondary text-secondary-foreground border border-transparent"
      }`}
    >
      {children}
    </span>
  );
}
