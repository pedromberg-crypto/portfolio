// =============================================================================
// SHARED — usado por todas as rotas
// =============================================================================

export const contato = {
  nome: "Pedro Maia Berg",
  cidade: "Contagem, MG",
  telefone: "(31) 99405-4307",
  telefoneLink: "5531994054307",
  email: "pedromberg@gmail.com",
  linkedin: "https://www.linkedin.com/in/pedro-maia-berg/",
  linkedinLabel: "linkedin.com/in/pedro-maia-berg",
} as const;

export type Cliente = {
  slug: string;
  nome: string;
  segmento: string;
  tipos: ("B2C" | "B2B")[];
  midias: ("orgânica" | "tráfego pago")[];
  status: string;
  resumo: string;
  destaques: string[];
  link?: { url: string; label: string };
  prints?: {
    src: string;
    mobileSrc?: string;
    alt: string;
    type?: "image" | "video";
  }[];
  nota?: string;
};

export const clientes: Cliente[] = [
  {
    slug: "bang-bang",
    nome: "Bang Bang",
    segmento: "Bebida alcoólica RTD multimarca",
    tipos: ["B2C", "B2B"],
    midias: ["orgânica", "tráfego pago"],
    status: "Padrão ouro arquitetural da agência",
    resumo:
      "Cliente em nicho restrito (álcool sob compliance Meta/Google). Escalei investimento em Meta Ads de R$4,4k → R$36,5k mantendo CPM em queda (R$14,37 → R$2,98) e CPC em queda (R$2,56 → R$0,77), com conversas iniciadas crescendo +251% (499 → 1.750). Site novo entregue do zero em Next.js + Supabase + Vercel, virou padrão ouro arquitetural dos demais clientes.",
    destaques: [
      "Meta Ads: CPM −79%, CPC −70%, conversas iniciadas +251% (janela 4 meses)",
      "Campanha de Carnaval com 759k de alcance em campanha única",
      "Variação de seguidores +22.931% e visualizações +760% no orgânico",
      "Stack em produção: Next.js + Supabase (Postgres + Auth + Storage + Realtime) + Vercel",
      "Infra cliente-dono — GitHub, Vercel team e Supabase org do cliente (handover limpo)",
    ],
    prints: [
      {
        src: "/prints/bang-bang.jpg",
        mobileSrc: "/prints/bang-bang-mobile.png",
        alt: "Hero do site Bang Bang em produção",
        type: "image",
      },
    ],
  },
  {
    slug: "hsr",
    nome: "Hospital São Rafael",
    segmento: "Saúde hospitalar eletiva (~200 FTE)",
    tipos: ["B2C", "B2B"],
    midias: ["orgânica", "tráfego pago"],
    status: "Site reformulado · turnaround orgânico em curso",
    resumo:
      "Cliente leigo em marketing, operava com site amador sem SEO e parecer crítico cobrando 'zero performance, zero KPI, zero funil real'. Reformulei o site (Next.js 15) e conduzi turnaround orgânico: variação de seguidores +8.885%, visualizações totais +112% (4,5M → 9,6M), alcance pago em 30 dias duplicado (227k → 481k). Operação em nicho regulado (saúde) com compliance LGPD aplicada.",
    destaques: [
      "Variação de seguidores +8.885% (67 → 6.020 em 4 meses)",
      "Visualizações totais +112% (4,5M → 9,6M)",
      "Stories publicados: 8 → 363 (+4.437%) · Views Stories: 17k → 415k",
      "Site entregue: Next.js 15 · Vercel · domínio do cliente · SEO + UX/UI",
      "Buffer relacional com diretoria — fee atual ~40% abaixo do mercado, conta mantida por argumentação técnica",
    ],
    link: {
      url: "https://www.hospitalsaorafael.com/pt",
      label: "www.hospitalsaorafael.com",
    },
    prints: [
      {
        src: "/prints/hsr.jpg",
        mobileSrc: "/prints/hsr-mobile.png",
        alt: "Print do site do Hospital São Rafael em produção",
        type: "image",
      },
    ],
  },
  {
    slug: "felipe-villaca",
    nome: "Felipe Villaça",
    segmento: "Cirurgia plástica · marca pessoal médica",
    tipos: ["B2C", "B2B"],
    midias: ["orgânica", "tráfego pago"],
    status: "Volume estabelecido · multicanal Instagram + TikTok",
    resumo:
      "Perfil médico de 283k seguidores em nicho regulado (CFM). Construí o pipeline completo de CRM + automação de marketing do zero, integrando tráfego pago e orgânica em funil único. 5,37M de alcance em 6 meses, 12,9M de views, 1 post com 1,68M views (taxa de interação 7,08%). Compliance CFM 1974/2011 embutido no fluxo de aprovação.",
    destaques: [
      "5,37M de alcance em 6 meses · 12,9M de visualizações",
      "Top post: 1,68M views, 4.814 interações, taxa 7,08%",
      "Pipeline CRM em 5 estágios: lead novo → qualificado → agendado → realizado → reativação",
      "Origem de cada lead rastreável até criativo de tráfego pago (UTM + landing dedicada)",
      "Multicanal Instagram + TikTok ativo com 26 vídeos publicados",
    ],
    prints: [
      {
        src: "/prints/felipe-villaca.png",
        mobileSrc: "/prints/felipe-villaca-mobile.png",
        alt: "Painel de automações do CRM Felipe Villaça",
        type: "image",
      },
    ],
  },
  {
    slug: "realizza",
    nome: "Realizza",
    segmento: "B2B financeiro · cliente piloto do método",
    tipos: ["B2C", "B2B"],
    midias: ["orgânica", "tráfego pago"],
    status: "Scaffold entregue · nasceu dentro do template",
    resumo:
      "Cliente entrou sem nada digital — sem site, sem git, sem Vercel, sem CRM. Formalizei o template de bootstrap em 2 estágios que gera ~20 artefatos por cliente novo e rodei nele direto. Realizza nasceu dentro do método, provando que a tese de plataforma multi-tenant deixou de ser slide e virou produto interno repetível.",
    destaques: [
      "Scaffold completo via template Stage 1 (análise) + Stage 2 (geração)",
      "Entregues no primeiro dia: CLAUDE.md, 9 docs de governança, 6 subagentes Claude Code, 4 slash commands",
      "Mesmo template aplicado em Bang Bang, HSR e Realizza — método transversal validado em 3 implantações",
      "Site novo do zero em produção",
    ],
    prints: [
      {
        src: "/prints/realizza.png",
        mobileSrc: "/prints/realizza-mobile.png",
        alt: "Pasta docs/ do projeto Realizza com artefatos gerados pelo template",
        type: "image",
      },
    ],
  },
];

export const metodo = {
  titulo: "Template de Bootstrap em 2 Estágios",
  descricao:
    "Sistema interno de bootstrap de projeto novo da agência. Herda a arquitetura validada no Bang Bang e adapta ao cliente a partir do dossiê estratégico — sem placeholders genéricos. Aplicado em 3 clientes em produção.",
  stage1: {
    titulo: "Stage 1 — Análise",
    bullets: [
      "Lê o dossiê estratégico do cliente",
      "Devolve Mapa de Análise em 18 seções",
      "Revisão antes de qualquer token gasto em geração",
      "Nunca cria arquivos",
    ],
  },
  stage2: {
    titulo: "Stage 2 — Geração",
    artefatos: [
      { tipo: "CLAUDE.md", lista: ["Contexto raiz da sessão Claude Code do cliente"] },
      {
        tipo: "9 docs de governança",
        lista: [
          "BRAND_CONTEXT",
          "DESIGN_TOKENS",
          "HOME_ARCHITECTURE",
          "ANTI_PATTERNS",
          "COPY_HOME",
          "SEO_METADATA",
          "COMPONENT_SPECS",
          "GLOSSARY",
          "AGENTS_GUIDE",
        ],
      },
      {
        tipo: "6 subagentes Claude Code",
        lista: ["maestro", "ux-architect", "ui-designer", "frontend-dev", "qa-reviewer", "researcher"],
      },
      {
        tipo: "4 slash commands",
        lista: ["/setup", "/build-all", "/build-section", "/review"],
      },
    ],
  },
};

export type Peca = {
  id: number;
  titulo: string;
  tagline: string;
  body: { heading?: string; texto?: string; bullets?: string[] }[];
};

export type TimelineItem = {
  periodo: string;
  cargo: string;
  empresa: string;
  detalhe?: string;
};

export const timeline: TimelineItem[] = [
  {
    periodo: "dez/2025 — atual",
    cargo: "CEO",
    empresa: "Accellera (Marketing + Tecnologia)",
    detalhe:
      "Agência boutique R$100k/mês · 4 contas (saúde, álcool, B2B financeiro, cirurgia plástica) · 12 colaboradores em 3 níveis hierárquicos · 5 reportes diretos",
  },
  {
    periodo: "mai/2025 — nov/2025",
    cargo: "Designer Gráfico Sênior → Coordenador de Marketing",
    empresa: "Feira Shop",
    detalhe:
      "Promovido em 4 meses. Time direto de 3 (tráfego pago, design, social media). Reestruturação digital orientada por métricas + RD Station.",
  },
  {
    periodo: "~2014 — 2024",
    cargo: "Empreendedor — 5 negócios próprios",
    empresa: "Brasil + Estados Unidos",
    detalhe:
      "Restaurante (8 anos) · Produção gráfica (6 anos) · Bronzeamento natural (3 anos) · Hamburgueria (~2 anos) · Itens personalizados nos EUA com sócio local (1 ano). Vários em paralelo.",
  },
  {
    periodo: "2013 — 2016",
    cargo: "Bacharelado em Publicidade e Propaganda",
    empresa: "Universidade FUMEC",
  },
];

export const stack = {
  gestao: [
    "ClickUp",
    "Esteira semanal",
    "WIP gates",
    "Status board 9 etapas",
    "SOPs",
    "Refinamento de backlog",
  ],
  marketing: [
    "Meta Ads",
    "Google Ads",
    "TikTok Ads",
    "RD Station",
    "Datacrazy CRM",
    "Make.com",
    "Funil B2B/B2C",
    "Atribuição multi-touch",
    "CTR",
    "CPL",
    "CPConv",
    "ROAS",
  ],
  tecnico: [
    "Next.js 15",
    "Supabase",
    "Postgres",
    "Auth",
    "Realtime",
    "Vercel",
    "Arquitetura multi-tenant cliente-dono",
    "Git",
  ],
  ia: [
    "Claude Projects",
    "Claude Code",
    "Subagentes",
    "Slash commands",
    "Hooks",
    "Worktrees",
    "Make.com",
    "Gemini",
  ],
  design: [
    "Photoshop",
    "Illustrator",
    "InDesign",
    "Premiere",
    "Figma",
  ],
  formacao: [
    "Bacharel em Publicidade e Propaganda",
    "FUMEC",
    "2013–2016",
  ],
  idiomas: ["Português nativo", "Inglês intermediário"],
};

// =============================================================================
// PROFILES — específicos por rota
// =============================================================================

export type Gancho = {
  numero: string;
  label: string;
  sub: string;
};

export type RouteProfile = {
  slug: "head-of-growth" | "coo-agencia" | "fractional";
  cargo: string;
  topoStatus: string;
  headline: string;
  ganchos: Gancho[];
  pecas: Peca[];
  ctaH2: string;
  ctaP: string;
  ctaPdfPath: string;
  ctaPdfLabel: string;
  metaTitle: string;
  metaDescription: string;
};

// -----------------------------------------------------------------------------
// VERSÃO A — Head of Growth (Marketing Performance + Stack Moderna + IA)
// -----------------------------------------------------------------------------

export const profileHeadOfGrowth: RouteProfile = {
  slug: "head-of-growth",
  cargo: "Head of Growth",
  topoStatus: "Contagem, MG · disponível para conversa exploratória",
  headline:
    "Operador-fundador com pegada técnica em marketing de performance, stack web moderna e IA aplicada como força produtiva. Atual CEO da Accellera — agência boutique de R$100k/mês, 4 contas em nichos distintos, 12 colaboradores em 3 níveis hierárquicos. Antes: 10 anos rodando 5 negócios próprios + reentrada acelerada no corporativo (Designer → Coordenador → CEO em 8 meses). Liderança por estrutura — delego autonomia real, cobro por entrega.",
  ganchos: [
    {
      numero: "−79%",
      label: "CPM no Meta Ads",
      sub: "Bang Bang · escala R$4,4k → R$36,5k · CPC −70% · conversas +251%",
    },
    {
      numero: "12,9M",
      label: "views em 6 meses",
      sub: "Felipe Villaça · multicanal Instagram + TikTok · top post 1,68M",
    },
    {
      numero: "6/12",
      label: "do time em IA avançada",
      sub: "Claude Projects · Claude Code · Make.com · de 0 para metade em 1 ano",
    },
  ],
  pecas: [
    {
      id: 1,
      titulo: "Bang Bang — Meta Ads em nicho restrito",
      tagline: "CPM −79% · CPC −70% · conversas +251% em escala 8× de investimento",
      body: [
        {
          texto:
            "Cliente em nicho de álcool RTD multimarca sob compliance contínua Meta/Google. Escalei investimento em Meta Ads de R$4,4k → R$36,5k em 4 meses mantendo eficiência por veiculação otimizada, não por sorte algorítmica. Conversas iniciadas por mensagem subiram +251% (499 → 1.750).",
        },
        {
          heading: "Números (janela 29/01 → 24/05/2026)",
          bullets: [
            "CPM: R$14,37 → R$2,98 (−79%)",
            "CPC: R$2,56 → R$0,77 (−70%)",
            "CTR: 0,56% → 0,39% (esperado com escala)",
            "Alcance pago: 118k → 2,56M (+2.056%)",
            "Conversas iniciadas por mensagem: 499 → 1.750 (+251%)",
          ],
        },
        {
          heading: "Campanha de Carnaval",
          bullets: [
            "759k de alcance em campanha única",
            "R$6.652 investido na campanha",
            "Reach efetivo em nicho onde o algoritmo restringe veiculação",
          ],
        },
      ],
    },
    {
      id: 2,
      titulo: "Hospital São Rafael — turnaround orgânico em saúde",
      tagline: "Variação de seguidores +8.885% · views +112% · Stories +4.437%",
      body: [
        {
          texto:
            "Cliente leigo em marketing, operava site amador sem SEO e parecer crítico cobrando 'zero performance, zero KPI, zero funil real'. Reformulei o site (Next.js 15) e conduzi turnaround orgânico em nicho regulado (saúde hospitalar eletiva, ~200 FTE).",
        },
        {
          heading: "Resultados (janela 29/01 → 24/05/2026)",
          bullets: [
            "Variação de seguidores: 67 → 6.020 (+8.885%)",
            "Visualizações totais: 4,5M → 9,6M (+112%)",
            "Alcance pago em 30 dias: 227k → 481k (+112%)",
            "Stories publicados: 8 → 363 (+4.437%)",
            "Views de Stories: 17k → 415k (+2.345%)",
          ],
        },
        {
          heading: "Entrega visível",
          bullets: [
            "Site novo: www.hospitalsaorafael.com — Next.js 15, SEO, UX/UI",
            "Stack cliente-dono — handover limpo no fim do contrato",
          ],
        },
      ],
    },
    {
      id: 3,
      titulo: "Felipe Villaça — volume multicanal em compliance médico",
      tagline: "5,37M alcance em 6 meses · 12,9M views · top post 1,68M",
      body: [
        {
          texto:
            "Perfil médico de 283k seguidores em cirurgia plástica (nicho CFM). Construí o pipeline completo de CRM + automação multicanal (Instagram + TikTok + tráfego pago), com compliance CFM 1974/2011 embutido no fluxo de aprovação de peça.",
        },
        {
          heading: "Números agregados (6 meses)",
          bullets: [
            "Alcance total: 5,37M (pago: 4,75M / orgânico: 622k)",
            "Visualizações totais: 12,9M",
            "Interações totais: 104.769",
            "Top post (carrossel): 1,68M views, 4.814 interações, taxa 7,08%",
            "TikTok ativo: 26 vídeos publicados",
          ],
        },
        {
          heading: "Pipeline CRM em 5 estágios",
          bullets: [
            "Lead novo → qualificado → agendado → realizado → reativação",
            "Triagem automatizada por perguntas-chave → fila de atendimento humano",
            "Origem de cada lead rastreável até criativo de tráfego pago (UTM + LP dedicada)",
            "Hash + timestamp + aprovação registrada por peça (cadeia de custódia auditável)",
          ],
        },
      ],
    },
    {
      id: 4,
      titulo: "IA aplicada em produção (não slide)",
      tagline: "Adoção avançada do time: 0 → 6/12 colaboradores em 1 ano",
      body: [
        {
          texto:
            "IA tratada como colaborador funcional, não como hype nem decoração. Substitui ritual humano onde antes existia memória; acelera implementação onde antes havia gargalo de execução técnica.",
        },
        {
          heading: "Stack em produção",
          bullets: [
            "Claude Projects — estratégia e dossiê por cliente",
            "Claude Code — subagentes, slash commands, hooks, worktrees em projetos reais",
            "Make.com — automação de fluxo (capturas, qualificação, disparos)",
            "Gemini — análise de dados quando o contexto pede modelo maior",
          ],
        },
        {
          heading: "Resultado de adoção",
          bullets: [
            "De 0 → 6 de 12 colaboradores em uso avançado de IA",
            "SOPs definem onde IA entra como guardrail e onde como execução",
            "Subagentes Claude Code criam ~20 artefatos por cliente novo (template de bootstrap)",
          ],
        },
      ],
    },
    {
      id: 5,
      titulo: "Arquitetura multi-tenant cliente-dono",
      tagline: "BMs separadas por vertical · CRM migrado nos 4 clientes · 3 sites entregues",
      body: [
        {
          texto:
            "Recebi a operação como gargalo confesso — 1 BM Meta única para 4 verticais, aprendizado contaminado entre nichos, sem rastreamento E2E. Construí a fundação técnica do zero em 1 ano, sob arquitetura cliente-dono (cada cliente tem BM, repo, Vercel team e Supabase org próprios).",
        },
        {
          heading: "Antes × hoje (por sistema)",
          bullets: [
            "BM Meta: 1 misturada → 4 separadas por cliente",
            "CRM: Kommo (todos) → Datacrazy (migração total nos 4 clientes)",
            "Tagueamento/rastreamento E2E: inexistente → em instalação nos 4 sites",
            "Sites: 3 entregues (Bang Bang novo, HSR reformulado, Realizza novo) + 1 na fila",
            "SOPs: 0 → 1 robusta + 2 em finalização",
          ],
        },
      ],
    },
  ],
  ctaH2: "Vamos conversar?",
  ctaP:
    "Marketing de performance + stack moderna + IA aplicada em produção. Aberto a conversa exploratória sobre vagas de Head of Growth, CMO ou Head of Product Marketing — híbrido (BH/Contagem) ou remoto Brasil/LATAM.",
  ctaPdfPath: "/cv-pedro-head-of-growth.pdf",
  ctaPdfLabel: "Baixar CV em PDF",
  metaTitle: "Pedro Maia Berg · Head of Growth",
  metaDescription:
    "CEO da Accellera · Marketing de performance + stack moderna + IA aplicada em produção. Operador-fundador com 10 anos em 5 negócios próprios + atual liderança de 12 pessoas em 3 níveis hierárquicos.",
};

// -----------------------------------------------------------------------------
// VERSÃO B — COO de Agência
// -----------------------------------------------------------------------------

export const profileCooAgencia: RouteProfile = {
  slug: "coo-agencia",
  cargo: "COO de Agência",
  topoStatus: "Contagem, MG · disponível para conversa exploratória",
  headline:
    "CEO da Accellera — agência boutique de marketing + tecnologia, R$100k/mês de faturamento, 4 contas high-ticket em nichos distintos, 12 colaboradores em 3 níveis hierárquicos com 5 reportes diretos. Construí a fundação operacional do zero em 1 ano: governança de BM por vertical, migração total de CRM, 3 sites entregues, SOPs e crescimento de time 4 → 12. Antes: 10 anos rodando 5 negócios próprios — lastro real de quem assina a fatura. Liderança por estrutura — delego autonomia real, cobro por entrega.",
  ganchos: [
    {
      numero: "12",
      label: "colaboradores · 3 níveis",
      sub: "5 reportes diretos · 12 indiretos · 8 contratações em 1 ano",
    },
    {
      numero: "4",
      label: "contas high-ticket simultâneas",
      sub: "R$25k fee médio · R$100k/mês · saúde · álcool · B2B financeiro · cirurgia plástica",
    },
    {
      numero: "1 → 4",
      label: "BMs Meta por vertical",
      sub: "Desmembramento + governança de aprendizado por nicho · sob restrição Meta/Google",
    },
  ],
  pecas: [
    {
      id: 1,
      titulo: "Crescimento de time 4 → 12 em 1 ano",
      tagline: "8 contratações · 2 demissões · 3 promoções · 3 níveis hierárquicos",
      body: [
        {
          texto:
            "Recebi operação com 4 FTE e gargalo confesso unipessoal. Construí estrutura em 3 níveis hierárquicos com 5 reportes diretos e autonomia formal por cargo. Cresci o time triplicando o headcount sem repetir o padrão de gargalo herdado.",
        },
        {
          heading: "Composição final (12 FTE)",
          bullets: [
            "Coordenação Geral · Tráfego & CRM · Criação · RH & Financeiro · Programação (5 reportes diretos)",
            "Designer Gráfica · Video Maker Jr · Auxiliar Administrativo · 4 Social Medias (indiretos)",
            "Maiores adições no período: criação robusta, administrativo, 1 desenvolvedor",
          ],
        },
        {
          heading: "Movimentações conduzidas",
          bullets: [
            "8 contratações",
            "2 demissões com critério técnico e relacional",
            "3 promoções",
          ],
        },
      ],
    },
    {
      id: 2,
      titulo: "Buffer relacional de diretoria — cliente difícil mantido",
      tagline: "Argumentação técnica sustenta padrão, não personalidade",
      body: [
        {
          texto:
            "HSR (Hospital São Rafael) — cliente leigo, não reconhecia o valor entregue pela equipe completa. Risco real de perda de conta por percepção, não por entrega. Falha minha em repasse detalhado mês a mês ficou clara.",
        },
        {
          heading: "Ação",
          bullets: [
            "Conduzi reunião de explicação técnica mês a mês",
            "Comparação direta com fee de mercado para hospital do mesmo porte",
            "Demonstrei que fee atual estava ~40% abaixo do mercado",
            "Reposicionei percepção de valor sem precisar renegociar contrato",
          ],
        },
        {
          heading: "Resultado",
          bullets: [
            "Conta mantida em base amigável",
            "Aprendizado interno virou ritual: repasse mensal estruturado por cliente",
            "Dashboard interno em construção como próximo marco de sistema de acompanhamento",
          ],
        },
      ],
    },
    {
      id: 3,
      titulo: "Conflito interno mediado — SM × diretoria de cliente",
      tagline: "Migração CLT → PJ sem perder colaborador nem relação com cliente",
      body: [
        {
          texto:
            "Social Media in loco em hospital migrou de CLT para PJ (a pedido do dono da agência/hospital). Diretora do hospital preferia manter SM em CLT integral, criando ruído operacional e ameaça à continuidade da conta.",
        },
        {
          heading: "Ação",
          bullets: [
            "Conversa direta separada com cada parte",
            "Mostrei benefícios técnicos da nova estrutura à diretora",
            "Demonstrei à SM que qualidade de atendimento subiria com equipe robusta",
            "Garanti continuidade e melhoria do nível de entrega",
          ],
        },
        {
          heading: "Resultado",
          bullets: [
            "Conflito resolvido sem perda de membro de equipe",
            "Conta mantida sem dano relacional",
            "Modelo replicado como SOP de migração contratual",
          ],
        },
      ],
    },
    {
      id: 4,
      titulo: "Governança de BM Meta por vertical",
      tagline: "1 conta misturada → 4 separadas · aprendizado desconectado por nicho",
      body: [
        {
          texto:
            "Recebi operação com 1 BM Meta única para 4 verticais — saúde, álcool, B2B financeiro e cirurgia plástica. Aprendizado contaminado entre nichos, custo de oportunidade alto, risco de bloqueio em cascata. Desmembrei em 4 BMs separadas como pré-requisito de qualquer otimização de performance.",
        },
        {
          heading: "Por que pesa",
          bullets: [
            "Cada nicho tem perfil de público distinto; aprendizado misturado polui targeting",
            "Bloqueio de uma vertical (frequente em saúde + álcool) não bloqueia as outras",
            "Reuniões com META por nicho viraram canal de antecipação de mudança de política",
            "Reconexão pendente em 3 dos 4 clientes após migração — gestor de tráfego conduz",
          ],
        },
      ],
    },
    {
      id: 5,
      titulo: "SOP de Social Media + Tráfego — delegação destravante",
      tagline: "Autonomia formal ao tráfego pago · loop entre criação e tráfego destravado",
      body: [
        {
          texto:
            "Iteração entre criação e tráfego pago estava travada — peças saíam, rodavam, performance fraca, criação não recebia feedback estruturado. Risco real de virar gargalo pessoal entre as duas áreas.",
        },
        {
          heading: "Ação",
          bullets: [
            "Deleguei autonomia formal ao tráfego pago para contestar peças 'fracas' em conversão",
            "Critério mapeado por cliente — não opinião solta",
            "Tráfego passou a devolver leitura técnica direta à criação",
          ],
        },
        {
          heading: "Resultado",
          bullets: [
            "Ritmo de iteração acelerado",
            "Qualidade média das peças subiu",
            "Padrão de feedback ficou registrado como SOP",
            "Não dependia mais de mim repassar",
          ],
        },
      ],
    },
    {
      id: 6,
      titulo: "Operação simultânea em nichos restritos",
      tagline: "Saúde hospitalar + álcool RTD sob compliance contínua Meta/Google",
      body: [
        {
          texto:
            "Operação em 2 nichos sob compliance contínua simultâneo — saúde hospitalar (CFM + LGPD + algoritmo) e álcool RTD (restrição etária + restrição de criativo). Repertório técnico raro acumulado.",
        },
        {
          heading: "Crises resolvidas",
          bullets: [
            "Bloqueios de conta resolvidos via recurso técnico e canal direto",
            "Queda de número de WhatsApp API oficial recuperada",
            "Reuniões constantes com a META — antecipação de mudança de política",
            "Continuidade operacional preservada em ambos os nichos",
          ],
        },
      ],
    },
  ],
  ctaH2: "Vamos conversar?",
  ctaP:
    "Direção operacional para agência boutique — governança, SOPs e buffer relacional de diretoria, sem repetir gargalo unipessoal. Aberto a conversa sobre vagas de COO, Group Account Director ou Diretor de Atendimento — híbrido (BH/Contagem) ou remoto Brasil.",
  ctaPdfPath: "/cv-pedro-coo-agencia.pdf",
  ctaPdfLabel: "Baixar CV em PDF",
  metaTitle: "Pedro Maia Berg · COO de Agência",
  metaDescription:
    "CEO da Accellera · 4 contas high-ticket simultâneas · 12 colaboradores em 3 níveis hierárquicos · SOPs e buffer relacional de diretoria · 10 anos de empreendedorismo como lastro de cliente.",
};

// -----------------------------------------------------------------------------
// VERSÃO C — Fractional / Consultor Sênior
// -----------------------------------------------------------------------------

export const profileFractional: RouteProfile = {
  slug: "fractional",
  cargo: "Fractional CMO/COO · AI Ops · Advisory",
  topoStatus: "Contagem, MG · disponível para mandato fractional ou advisory",
  headline:
    "Operador-fundador disponível como executivo portátil para fundadores e operadores que precisam de direção sênior sem custo de C-level full-time. 10 anos rodando 5 negócios próprios + atual CEO da Accellera — agência boutique de R$100k/mês, 4 contas em nichos distintos, 12 FTE. Entrego direção por escopo definido, sem teatro de hora-extra. Tradução técnica entre marketing, tecnologia e diretoria. Liderança por estrutura — delego autonomia real, cobro por entrega.",
  ganchos: [
    {
      numero: "10 anos",
      label: "rodando 5 negócios próprios",
      sub: "Restaurante · gráfica · bronzeamento · hamburgueria · uniformes EUA",
    },
    {
      numero: "4",
      label: "contas atuais simultâneas",
      sub: "Saúde hospitalar · álcool RTD · B2B financeiro · cirurgia plástica",
    },
    {
      numero: "100%",
      label: "IA em produção · não slide",
      sub: "Claude Code · Make.com · Next.js + Supabase · método replicado em 3 clientes",
    },
  ],
  pecas: [
    {
      id: 1,
      titulo: "Problemas que resolvo (escopo fractional)",
      tagline: "Cinco frentes em que entro com mandato definido",
      body: [
        {
          bullets: [
            "Operação multi-cliente / multi-marca sem governança → desmembramento por vertical, esteira padronizada, infra cliente-dono",
            "Gargalo do fundador centralizando decisão → matriz formal de autonomia, SOPs onde havia memória",
            "Marketing rodando solto sem leitura de funil → tagueamento E2E, KPIs como ritual, aprovação por profundidade analítica",
            "IA tratada como hype ou enfeite → adoção real de Claude Code, Claude Projects, Make.com em produção",
            "Cliente difícil ameaçando a conta → buffer relacional com diretoria, argumentação técnica que sustenta padrão",
          ],
        },
      ],
    },
    {
      id: 2,
      titulo: "Bang Bang — Meta Ads em nicho restrito",
      tagline: "CPM −79% · CPC −70% · conversas +251% em escala 8× de investimento",
      body: [
        {
          texto:
            "Cliente em álcool RTD multimarca sob compliance contínua Meta/Google. Escalei Meta Ads de R$4,4k → R$36,5k em 4 meses mantendo eficiência. Conversas iniciadas +251% (499 → 1.750). Campanha de Carnaval com 759k de alcance em campanha única.",
        },
        {
          heading: "Números (4 meses)",
          bullets: [
            "CPM: R$14,37 → R$2,98 (−79%)",
            "CPC: R$2,56 → R$0,77 (−70%)",
            "Alcance pago total: 118k → 2,56M (+2.056%)",
            "Variação de seguidores: +22.931% (orgânico)",
          ],
        },
      ],
    },
    {
      id: 3,
      titulo: "HSR — turnaround em saúde hospitalar",
      tagline: "Variação seguidores +8.885% · views +112% · site reformulado",
      body: [
        {
          texto:
            "Cliente leigo, site amador sem SEO, parecer crítico cobrando 'zero performance'. Reformulei o site e conduzi turnaround orgânico em nicho regulado (saúde, ~200 FTE).",
        },
        {
          heading: "Números (4 meses)",
          bullets: [
            "Variação de seguidores: 67 → 6.020 (+8.885%)",
            "Visualizações totais: 4,5M → 9,6M (+112%)",
            "Alcance pago 30 dias: 227k → 481k (+112%)",
            "Stories: 8 → 363 publicados (+4.437%)",
          ],
        },
      ],
    },
    {
      id: 4,
      titulo: "Felipe Villaça — volume multicanal em compliance médico",
      tagline: "5,37M alcance em 6 meses · top post 1,68M views",
      body: [
        {
          texto:
            "Perfil médico de 283k seguidores em cirurgia plástica. Pipeline CRM em 5 estágios + automação multicanal (Instagram + TikTok + tráfego pago) com compliance CFM 1974/2011 embutido.",
        },
        {
          heading: "Números (6 meses)",
          bullets: [
            "Alcance total: 5,37M",
            "Visualizações totais: 12,9M",
            "Interações totais: 104.769",
            "Top post: 1,68M views, taxa 7,08%",
          ],
        },
      ],
    },
    {
      id: 5,
      titulo: "10 anos rodando 5 negócios próprios",
      tagline: "Restaurante · gráfica · bronzeamento · hamburgueria · uniformes nos EUA",
      body: [
        {
          texto:
            "Operação ponta-a-ponta em 5 negócios próprios, vários em paralelo, com times próprios e responsabilidade integral de operação (atendimento, marketing, financeiro, equipe). Lastro real de quem assina a fatura.",
        },
        {
          heading: "Histórico (Brasil + EUA)",
          bullets: [
            "Cantina do Kau — restaurante · 8 anos · Belo Horizonte",
            "Produção gráfica · 6 anos",
            "Bronzeamento natural · 3 anos",
            "Smash Lovers Hamburgueria · ~2 anos",
            "Itens personalizados nos EUA — empresa aberta com sócio local (CNPJ ativo) · 1 ano",
          ],
        },
      ],
    },
    {
      id: 6,
      titulo: "IA aplicada em produção (não slide)",
      tagline: "Adoção do time: 0 → 6/12 em uso avançado · em 1 ano",
      body: [
        {
          texto:
            "IA tratada como colaborador funcional. Substitui ritual humano onde antes existia memória; acelera implementação onde antes havia gargalo. Subagentes Claude Code criam ~20 artefatos por cliente novo via template de bootstrap em 2 estágios.",
        },
        {
          heading: "Stack em produção",
          bullets: [
            "Claude Projects — estratégia + dossiê por cliente",
            "Claude Code — subagentes, slash commands, hooks, worktrees em projetos reais",
            "Make.com — automação de fluxo",
            "Método transversal aplicado em 3 clientes (Bang Bang, HSR, Realizza)",
          ],
        },
      ],
    },
  ],
  ctaH2: "Pronto para mandato fractional?",
  ctaP:
    "Executivo portátil para fundadores e operadores que precisam de direção sênior sem custo de C-level full-time. Mandato fractional, advisory ou projeto — escopo definido, leitura honesta de tradeoff. Conversa exploratória sem compromisso.",
  ctaPdfPath: "/cv-pedro-fractional.pdf",
  ctaPdfLabel: "Baixar CV em PDF",
  metaTitle: "Pedro Maia Berg · Fractional CMO/COO · AI Ops",
  metaDescription:
    "Operador-fundador com 10 anos em 5 negócios próprios + atual CEO de agência boutique. Disponível para mandato fractional CMO/COO, AI Ops ou advisory. Direção sênior por escopo definido.",
};

export const allProfiles = {
  "head-of-growth": profileHeadOfGrowth,
  "coo-agencia": profileCooAgencia,
  fractional: profileFractional,
} as const;
