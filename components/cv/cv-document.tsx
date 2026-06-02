import {
  contato,
  timeline,
  stack,
  type RouteProfile,
  type Peca,
} from "@/lib/data";

// Coleta até `max` bullets de uma peça (achatando os grupos do body).
function pecaBullets(peca: Peca, max = 4): string[] {
  const out: string[] = [];
  for (const grupo of peca.body) {
    if (grupo.bullets) out.push(...grupo.bullets);
    if (out.length >= max) break;
  }
  return out.slice(0, max);
}

const stackGroups: { label: string; items: string[] }[] = [
  { label: "Gestão & Operação", items: stack.gestao },
  { label: "Marketing & Performance", items: stack.marketing },
  { label: "Stack Técnica", items: stack.tecnico },
  { label: "IA Aplicada", items: stack.ia },
  { label: "Design", items: stack.design },
];

export function CvDocument({ profile }: { profile: RouteProfile }) {
  return (
    <article className="cv-page">
      {/* ── Cabeçalho ───────────────────────────────────────── */}
      <header className="cv-head">
        <div className="cv-head-main">
          <h1 className="cv-name">{contato.nome}</h1>
          <div className="cv-role">{profile.cargo}</div>
        </div>
        <ul className="cv-contact">
          <li>{contato.email}</li>
          <li>{contato.telefone}</li>
          <li>{contato.linkedinLabel}</li>
          <li>{contato.cidade}</li>
        </ul>
      </header>

      {/* ── Resumo ──────────────────────────────────────────── */}
      <p className="cv-summary">{profile.headline}</p>

      {/* ── Métricas-âncora ─────────────────────────────────── */}
      <div className="cv-metrics">
        {profile.ganchos.map((g) => (
          <div key={g.numero + g.label} className="cv-metric">
            <div className="cv-metric-num">{g.numero}</div>
            <div className="cv-metric-label">{g.label}</div>
            <div className="cv-metric-sub">{g.sub}</div>
          </div>
        ))}
      </div>

      {/* ── Cases ───────────────────────────────────────────── */}
      <section className="cv-section">
        <h2 className="cv-section-title">Cases selecionados</h2>
        <div className="cv-cases">
          {profile.pecas.map((peca) => {
            const bullets = pecaBullets(peca);
            return (
              <div key={peca.id} className="cv-case">
                <h3 className="cv-case-title">{peca.titulo}</h3>
                <div className="cv-case-tag">{peca.tagline}</div>
                {bullets.length > 0 && (
                  <ul className="cv-case-bullets">
                    {bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Trajetória ──────────────────────────────────────── */}
      <section className="cv-section">
        <h2 className="cv-section-title">Trajetória</h2>
        <div className="cv-timeline">
          {timeline.map((t) => (
            <div key={t.periodo} className="cv-tl-item">
              <div className="cv-tl-period">{t.periodo}</div>
              <div className="cv-tl-body">
                <div className="cv-tl-role">{t.cargo}</div>
                <div className="cv-tl-org">{t.empresa}</div>
                {t.detalhe && <div className="cv-tl-detail">{t.detalhe}</div>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Stack ───────────────────────────────────────────── */}
      <section className="cv-section">
        <h2 className="cv-section-title">Stack &amp; ferramentas</h2>
        <div className="cv-stack">
          {stackGroups.map((grp) => (
            <div key={grp.label} className="cv-stack-group">
              <div className="cv-stack-label">{grp.label}</div>
              <div className="cv-chips">
                {grp.items.map((it) => (
                  <span key={it} className="cv-chip">
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Rodapé ──────────────────────────────────────────── */}
      <footer className="cv-foot">
        <span>
          <strong>Formação:</strong> {stack.formacao.slice(0, 2).join(" · ")} ·{" "}
          {stack.formacao[2]}
        </span>
        <span>
          <strong>Idiomas:</strong> {stack.idiomas.join(" · ")}
        </span>
        <span className="cv-foot-site">pedroberg.com.br</span>
      </footer>
    </article>
  );
}
