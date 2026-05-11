export const profile = {
  nome: "Pedro Maia",
  cargo: "Gerente de Projetos",
  cargoSub: "CEO Accellera",
  cidade: "Contagem, MG",
  telefone: "(31) 99405-4307",
  telefoneLink: "5531994054307",
  email: "pedromberg@gmail.com",
  linkedin: "https://www.linkedin.com/in/pedro-maia-berg/",
  linkedinLabel: "linkedin.com/in/pedro-maia-berg",
  headline:
    "Estruturei a Accellera — agência digital com 11 colaboradores e 4 squads paralelas. Entreguei o ciclo completo de cada cliente: planejamento estratégico, produto digital, mídia paga, design e operação semanal. Cobertura B2B + B2C nos 4 clientes, da mídia orgânica ao tráfego pago. Operação está consolidada e a equipe toca o dia a dia — agora busco o próximo passo da carreira.",
} as const;

export const ganchos = [
  {
    numero: "4",
    label: "squads paralelas",
    sub: "Bang Bang · HSR · Realizza · Felipe Villaça",
  },
  {
    numero: "11",
    label: "colaboradores ativos",
    sub: "Hierarquia formal · autonomia delegada por cargo",
  },
  {
    numero: "20+",
    label: "artefatos por cliente novo",
    sub: "Template de bootstrap em 2 estágios · 3 clientes em produção",
  },
] as const;

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
  prints?: { src: string; alt: string }[];
  nota?: string;
};

export const clientes: Cliente[] = [
  {
    slug: "bang-bang",
    nome: "Bang Bang",
    segmento: "Varejo de moda esportiva",
    tipos: ["B2C"],
    midias: ["orgânica", "tráfego pago"],
    status: "Padrão ouro arquitetural · Fase 4 entregue",
    resumo:
      "Estabeleci o padrão ouro arquitetural da agência usando Bang Bang como cliente de referência. Defini o stack (Next.js + Supabase + Vercel), estruturei o roadmap em 4 fases — todas entregues — e fechei o MASTER de planejamento 2026 v3 com 10 fluxos operacionais derivados.",
    destaques: [
      "Stack entregue em produção: Next.js + Supabase (Postgres + Auth + Storage + Realtime) + Vercel",
      "PDV operando com overrides, autenticação Supabase, captura de eventos via tabela `click_events`",
      "Infra cliente-dono — GitHub do cliente, Vercel team do cliente, Supabase org do cliente (handover limpo)",
      "10 fluxos operacionais derivados do MASTER (Copa 2026, Banger Pro, Esteira Quinzenal, Ativação Influencer, Kits M5, Bang Loop, 4 fluxos paid)",
      "Virou referência arquitetural pros outros 3 clientes do portfólio",
    ],
    prints: [{ src: "/prints/bang-bang.jpg", alt: "Print do site Bang Bang em desenvolvimento" }],
    nota: "Site em aprovação final do cliente — print de referência.",
  },
  {
    slug: "hsr",
    nome: "Hospital São Rafael",
    segmento: "Saúde · multiespecialidade",
    tipos: ["B2C", "B2B"],
    midias: ["orgânica", "tráfego pago"],
    status: "Site no ar · Fase 4/6 entregue · Camada 2 desenhada",
    resumo:
      "Cliente entrou com parecer crítico cobrando 'zero performance, zero KPI, zero funil real, zero integração'. Coloquei o site institucional one-page no ar e desenhei a Camada 2 da plataforma de eventos: 8 fluxos cliente→agência, 8 fluxos agência→cliente, 6 integrações com sistemas internos e 5 cruzamentos cross-sistema de alto valor. Resposta operacional ao parecer, não slide.",
    destaques: [
      "Site entregue: Next.js 15 · Vercel · domínio do cliente",
      "5 cruzamentos cross-sistema: atribuição multi-touch · CPL por especialidade · voucher → ROI por canal · NPS × campanha",
      "Compliance LGPD em saúde aplicado — sistema clínico não integra direto, só agregado anonimizado",
      "Captação B2B (cirurgião) e B2C (paciente) coexistindo no mesmo desenho",
    ],
    link: {
      url: "https://www.hospitalsaorafael.com/pt",
      label: "www.hospitalsaorafael.com",
    },
    prints: [{ src: "/prints/hsr.jpg", alt: "Print do site do Hospital São Rafael em produção" }],
  },
  {
    slug: "realizza",
    nome: "Realizza",
    segmento: "Cliente piloto da plataforma multi-tenant",
    tipos: ["B2C", "B2B"],
    midias: ["orgânica", "tráfego pago"],
    status: "Scaffold entregue · nasceu dentro do template",
    resumo:
      "Cliente entrou no portfólio sem nada digital — sem site, sem git, sem Vercel, sem CRM. Formalizei o template de bootstrap em 2 estágios que gera ~20 artefatos por cliente novo e rodei nele direto. Realizza nasceu dentro do método, provando que a tese de plataforma multi-tenant deixou de ser slide e virou produto interno repetível.",
    destaques: [
      "Scaffold completo via template Stage 1 (análise) + Stage 2 (geração)",
      "Entregues no primeiro dia: CLAUDE.md, 9 docs de governança, 6 subagentes Claude Code, 4 slash commands",
      "Mesmo template aplicado em Bang Bang, HSR e Realizza — método transversal validado em 3 implantações",
    ],
  },
  {
    slug: "felipe-villaca",
    nome: "Felipe Villaça",
    segmento: "Cirurgia plástica · marca pessoal",
    tipos: ["B2C", "B2B"],
    midias: ["orgânica", "tráfego pago"],
    status: "Pipeline de CRM + automação entregue",
    resumo:
      "Cliente operava captação manual via Instagram + WhatsApp, sem qualificação, sem CRM, sem rastreio de origem. Construí o pipeline completo de CRM + automação de marketing do zero — integrei tráfego pago (Meta · Google · TikTok) e orgânica (Instagram · LinkedIn) num único funil mensurável, com compliance CFM/CRM embutido.",
    destaques: [
      "Pipeline em 5 estágios entregue: lead novo → qualificado → agendado → realizado → reativação",
      "Triagem automatizada por perguntas-chave → fila ordenada de atendimento humano",
      "Compliance CFM 1974/2011 embutido — peça candidata a violação trava antes do publish, com cadeia de custódia auditável",
      "Origem de cada lead rastreável até o criativo de tráfego pago (UTM + landing dedicada por canal)",
    ],
  },
];

export const metodo = {
  titulo: "Template de Bootstrap em 2 Estágios",
  descricao:
    "Formalizei o sistema interno de bootstrap da agência. Herda a arquitetura validada no Bang Bang e adapta ao cliente a partir do dossiê estratégico — sem placeholders genéricos. Aplicado em 3 clientes em produção.",
  stage1: {
    titulo: "Stage 1 — Análise",
    bullets: [
      "Lê o dossiê estratégico do cliente",
      "Devolve Mapa de Análise em 18 seções",
      "Pedro revisa antes de qualquer token ser gasto em geração",
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

export const pecas: Peca[] = [
  {
    id: 1,
    titulo: "Matriz de Cargos",
    tagline: "11 cargos formais · 7 campos cada · governança rara em pleno",
    body: [
      {
        texto:
          "Estruturei a matriz formal de cargos da agência: 11 cargos descritos em 7 campos fixos cada — Identidade, Entrega-fim, Autonomia delegada, Escalonamento obrigatório, Padrão mínimo, Gargalo atual, Acionamento por IA. Cada decisão de cargo ficou rastreável: quem pode o quê sozinho, o que sobe obrigatoriamente pro CEO, onde o sistema trava. Documento ativo, lido pela equipe inteira.",
      },
      {
        heading: "Cargo A — Coordenação Geral",
        bullets: [
          "Identidade: segunda no comando, gatekeeper de aprovação de copy",
          "Autonomia: aprova/reprova calendário editorial sem consultar CEO",
          "Escalonamento: copy de crise, mudança de tom, reprovação repetida da mesma SM",
          "Padrão mínimo: reprova copy fria, incompleta, com desleixo, fora do tom",
          "Gargalo atual: não é ela — é o CEO. Falta delegação de cobrança",
        ],
      },
      {
        heading: "Cargo B — Tráfego & CRM",
        bullets: [
          "Identidade: nó decisório técnico, manda na criação",
          "Regra inegociável: budget NUNCA sobe — apenas redistribui entre conjuntos",
          "Autonomia: completa em Meta Ads após validação de estratégia",
          "Escalonamento: mudança de objetivo, pausa campanha, CPL atípico",
          "Padrão mínimo: prep estratégico com dados reais, não opinião solta",
        ],
      },
    ],
  },
  {
    id: 2,
    titulo: "Template de Bootstrap em 2 Estágios",
    tagline: "~20 artefatos por cliente novo · método transversal replicável",
    body: [
      {
        texto:
          "Formalizei o sistema de bootstrap de projeto novo da agência. Stage 1 lê o dossiê estratégico e devolve um Mapa de Análise em 18 seções para revisão antes de qualquer token ser gasto. Stage 2 gera ~20 artefatos no projeto: 1 CLAUDE.md + 9 docs de governança + 6 subagentes Claude Code + 4 slash commands. Apliquei em 3 clientes (Bang Bang, HSR, Realizza).",
      },
      {
        heading: "O que NÃO fazer",
        bullets: [
          "Pular Stage 1 — gerar 20 arquivos a partir de leitura superficial é retrabalho caro",
          "Executar Stage 2 sem respostas da seção 'Perguntas de clarificação'",
          "Rodar dentro do repo de outro cliente — sempre pasta nova",
        ],
      },
      {
        heading: "Prova em produção",
        bullets: [
          "Bang Bang — padrão ouro arquitetural",
          "Hospital São Rafael — Fase 4/6, site em produção",
          "Realizza — cliente piloto que nasceu dentro do template",
        ],
      },
    ],
  },
  {
    id: 3,
    titulo: "Camada 2 do Hospital São Rafael",
    tagline: "8+8 fluxos · 6 integrações · 5 cruzamentos cross-sistema",
    body: [
      {
        texto:
          "Cliente de saúde com captação B2B + B2C. Entrei com cenário de parecer crítico cobrando 'zero performance, zero KPI, zero funil real'. Desenhei a Camada 2 como resposta operacional — comunicação entre site, plataforma da agência e sistemas internos do cliente — e coloquei o site institucional no ar como canal dos eventos.",
      },
      {
        heading: "5 cruzamentos cross-sistema",
        bullets: [
          "Atribuição multi-touch real — qual canal converte cirurgia, não só lead",
          "CPL por especialidade — corta especialidade cara, dobra a que converte",
          "Captação B2B de cirurgião — meta vira número rastreável",
          "Voucher → ROI por canal — cada R$ de mídia tem rastro até resgate",
          "NPS × campanha — qualidade percebida por canal de captação",
        ],
      },
      {
        heading: "Entrega visível",
        bullets: [
          "Site em produção: www.hospitalsaorafael.com/pt",
          "Stack: Next.js 15 (one-page) · Vercel · domínio do cliente",
          "Infra cliente-dono — handover limpo no fim do contrato",
        ],
      },
    ],
  },
  {
    id: 4,
    titulo: "State Machine do Fluxo de Orçamento",
    tagline: "9 passos + 5 estados implícitos + 6 decisões de fundação",
    body: [
      {
        texto:
          "Produzi a análise técnica antes do programador interno começar a codar. Demanda chegou descrita como 9 passos lineares — expus na análise que eram 9 passos + 5 estados implícitos + 6 decisões de fundação. Bloqueou ~3 meses de retrabalho garantido e destravou a decisão de tenancy da plataforma.",
      },
      {
        heading: "5 estados ausentes no fluxo escrito",
        bullets: [
          "Cancelamento em qualquer etapa",
          "Pedido de revisão / contraposta antes de aprovar",
          "Atraso de fornecedor (re-aviso de prazo, novo SLA)",
          "Comprovante recusado (cliente reenvia, audit log)",
          "SLA por etapa (timer de quando alertar)",
        ],
      },
      {
        heading: "Ordem de decisão recomendada (não codar antes)",
        bullets: [
          "1. ADR de tenancy (instância dedicada vs multi-tenant lógico)",
          "2. Convergência com fluxo existente",
          "3. Modelar entidade Fornecedor",
          "4. State Machine completa",
          "5. RBAC explícito",
          "6. Modelo financeiro (intermediar ou orquestrar)",
        ],
      },
    ],
  },
  {
    id: 5,
    titulo: "Matriz de Arbitragem 7×3",
    tagline: "Reunião desenhada como produto · stakeholder difícil em ~10 min",
    body: [
      {
        texto:
          "Decisor único do grupo comanda 3 dos 4 clientes da agência. Histórico: divagador, reuniões de 4h sem decisão fechada. Desenhei a reunião como produto — matriz de 7 blocos cirúrgicos × 3 clientes, pré-classificada célula a célula. Reduziu o cliente maduro a ~10 min e protegeu tempo para os 2 em campo aberto.",
      },
      {
        heading: "Sistema de ícones (filtro de tempo)",
        bullets: [
          "✅ — já temos resposta. Confirma em 30s, segue.",
          "🟡 — resposta parcial. Lê pro decisor, ele valida e completa.",
          "❓ — em branco. Decisor responde do zero.",
        ],
      },
      {
        heading: "7 blocos × 3 clientes",
        bullets: [
          "Linha de morte · Onde NÃO jogar · Diferenciador vs concorrente nº 1",
          "Priorização (caixa cai 50%) · Caixa real + gatilho de corte",
          "Pré-requisitos que só o decisor destrava · Risco oculto",
        ],
      },
    ],
  },
  {
    id: 6,
    titulo: "Felipe Villaça · CRM + Automação Multi-canal",
    tagline: "Pipeline em 5 estágios · compliance CFM embutido · B2B+B2C",
    body: [
      {
        texto:
          "Cirurgião plástico, marca pessoal. Cliente entrou operando captação manual via Instagram + WhatsApp, sem qualificação, sem nutrição, sem CRM, sem rastreio de origem. Construí o pipeline completo de CRM + automação do zero, integrando tráfego pago e orgânico num único funil mensurável.",
      },
      {
        heading: "Pipeline em 5 estágios",
        bullets: [
          "Lead novo — etiquetado por canal + campanha + criativo",
          "Qualificado — triagem automatizada por perguntas-chave",
          "Agendado — confirmação automatizada + lembrete pré-consulta",
          "Realizado — gatilho automático de NPS + jornada pós-op",
          "Reativação — paciente inativo · oportunidade de retorno",
        ],
      },
      {
        heading: "Compliance CFM/CRM (diferencial)",
        bullets: [
          "Resolução CFM 1974/2011 embutida como regra automática",
          "Peça candidata a violação trava antes do publish",
          "Cada peça tem hash + timestamp + aprovação registrada — cadeia de custódia auditável",
          "Foto antes/depois com consent versionado e expiração de URL",
        ],
      },
    ],
  },
];

export type DiagnosticoItem = {
  achado: string;
  detalhe: string;
  acao: string;
};

export const diagnostico = {
  empresa: "Optimum",
  empresaUrl: "https://www.optimum.srv.br",
  intro:
    "Antes de enviar este portfólio fiz a primeira semana fictícia da posição: leitura forense do digital atual a partir de fontes 100% públicas (HTML servido, sitemap.xml, robots.txt, OG tags). Saída resumida abaixo, no formato como apresentaria em uma reunião de kickoff.",
  itens: [
    {
      achado: "SEO técnico",
      detalhe:
        "H1 único da home renderiza 'Trabalhe Conosco'. /servicos serve title 'Home | Optimum Soluções' e zero heading no HTML inicial. Link interno para /cases-de-sucesso responde 404.",
      acao:
        "Sprint 1 (1-2 sem): reescrita de headings, title por página, correção de link quebrado, JSON-LD Organization + LocalBusiness. ROI mensurável em 30 dias via Search Console.",
    },
    {
      achado: "Mensuração",
      detalhe:
        "GTM ativo carrega Universal Analytics (UA-67546052-1), pixel descontinuado pelo Google em julho/2023. Nenhum GA4 detectado no markup servido.",
      acao:
        "Sprint 1 (3 dias): migração GA4 + Search Console + dashboard semanal em Looker Studio. Sem isso, qualquer decisão de marketing seguinte é chute.",
    },
    {
      achado: "Estrutura editorial",
      detalhe:
        "blog-posts-sitemap.xml com última atualização em 03/01/2025. Conteúdo orgânico parado há mais de um ano. Posts existentes misturam institucional, campanha sazonal e técnico, sem linha editorial visível.",
      acao:
        "Sprint 2-4: cadência de 2 posts/mês ancorados em palavras-chave de cauda longa do ICP (indústria/mineração MG, observado nos cases públicos). Editor responsável definido na matriz de cargos.",
    },
    {
      achado: "Prova social",
      detalhe:
        "Cases existem em /case-de-sucesso (FieldService, Carona Corporativa, App Ofícios ANM e outros), porém o link visível na home aponta para /cases-de-sucesso (404). Cases atuais sem métrica de resultado.",
      acao:
        "Sprint 2: redesign de /case-de-sucesso em formato problema → solução → métrica. 3 cases-âncora prioritários, escolhidos por vertical de maior recorrência comercial.",
    },
  ] satisfies DiagnosticoItem[],
  rodape:
    "Análise elaborada em mai/2026 a partir de fontes públicas e verificáveis. Exercício pessoal de candidatura — sem vínculo oficial com a Optimum.",
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
    cargo: "CEO · Gerente de Projetos",
    empresa: "Accellera",
    detalhe: "4 squads paralelas · 11 colaboradores · método transversal",
  },
  {
    periodo: "mai/2025 — nov/2025",
    cargo: "Designer Gráfico Sênior → Coordenador de Marketing",
    empresa: "Feira Shop",
    detalhe: "Reestruturação digital, RD Station, funil de vendas, direção de arte",
  },
  {
    periodo: "jun/2016 — jun/2024",
    cargo: "Proprietário",
    empresa: "Restaurante Cantina do Kau",
    detalhe: "8 anos operando negócio físico ponta a ponta",
  },
  {
    periodo: "mai/2021 — ago/2022",
    cargo: "Proprietário",
    empresa: "Smash Lovers Hamburgueria",
    detalhe: "Concepção da ideia à execução · marketing e design internos",
  },
  {
    periodo: "abr/2017 — dez/2017",
    cargo: "Designer Gráfico",
    empresa: "Dr. Lava Tudo",
    detalhe: "Produção gráfica e audiovisual para campanhas de marca",
  },
  {
    periodo: "2011 — 2016",
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
    "Porta 1 / Porta 2",
    "Refinamento de backlog",
  ],
  marketing: [
    "RD Station",
    "Make",
    "Meta Ads",
    "Google Ads",
    "TikTok Ads",
    "Instagram orgânico",
    "LinkedIn orgânico",
    "Funil de vendas",
    "Atribuição multi-touch",
    "CTR",
    "CPL",
    "CPConv",
    "ROAS",
    "NPS",
  ],
  tecnico: [
    "Next.js 15",
    "Supabase",
    "Postgres",
    "Auth",
    "Realtime",
    "Vercel",
    "Arquitetura multi-tenant",
    "Event-driven",
  ],
  ia: [
    "Claude Projects",
    "Claude Code",
    "Skills",
    "Subagentes",
    "Slash commands",
    "Hooks",
    "Worktrees",
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
    "2011-2016",
  ],
  idiomas: ["Português nativo", "Inglês intermediário"],
};
