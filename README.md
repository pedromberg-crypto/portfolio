# pedroberg.com.br — Site/CV interativo

Site pessoal de Pedro Maia Berg · CEO Accellera · 3 perfis públicos.

Next.js 15 + Tailwind v4 + shadcn/ui (Base UI) + next-themes. Deploy Vercel.

## Rotas

| URL | Perfil | Uso |
|---|---|---|
| `/` | **Head of Growth** | Default. Casa com LinkedIn público. Maior pool de vagas. |
| `/coo-agencia` | **COO de Agência** | Link específico para agências, vagas COO/Group Account/Diretor Atendimento. |
| `/fractional` | **Fractional CMO/COO** | Link para fundadores e operadores buscando direção sênior por escopo. |

Cada rota compartilha mesmo design, clientes (4 squads), trajetória, stack e contato. Variam: headline, cargo no topo, ganchos numéricos, casos em destaque, copy do CTA e PDF para download.

## Estrutura

```
app/
  layout.tsx            metadataBase = https://pedroberg.com.br · fontes · ThemeProvider
  page.tsx              Head of Growth (default)
  coo-agencia/page.tsx  COO de Agência
  fractional/page.tsx   Fractional
  globals.css           tokens Tailwind v4

components/
  sticky-nav.tsx        nav fixed top + theme toggle
  hero.tsx              recebe profile prop · headline · 3 ganchos
  clients.tsx           4 squads em tabs (mesma para todas as rotas)
  method.tsx            template bootstrap em 2 estágios
  cases.tsx             recebe pecas prop (casos do perfil)
  timeline.tsx          trajetória atualizada
  stack.tsx             ferramentas operadas vs orquestradas via Claude Code
  cta.tsx               recebe profile prop · WhatsApp · email · LinkedIn · CV
  footer.tsx            usa contato shared
  theme-provider.tsx    next-themes wrapper
  theme-toggle.tsx
  icons.tsx             LinkedinIcon
  ui/                   shadcn base components

lib/
  data.ts               SHARED (contato, clientes, metodo, timeline, stack) +
                        PROFILES (head-of-growth, coo-agencia, fractional)
  utils.ts              cn helper

public/
  prints/               prints dos clientes
  foto-pedro.jpg        foto Pedro
  cv-pedro-head-of-growth.pdf    (a exportar)
  cv-pedro-coo-agencia.pdf       (a exportar)
  cv-pedro-fractional.pdf        (a exportar)
```

## Adicionar/editar conteúdo

| Quero mudar | Edito |
|---|---|
| Headline / cargo / ganchos / casos de um perfil | `lib/data.ts` → `profileHeadOfGrowth` / `profileCooAgencia` / `profileFractional` |
| Dados dos 4 clientes (compartilhados) | `lib/data.ts` → `clientes` |
| Trajetória profissional | `lib/data.ts` → `timeline` |
| Stack e ferramentas | `lib/data.ts` → `stack` |
| Cor primária / fundo / tokens | `app/globals.css` → `@theme` |
| Texto do CTA por perfil | `lib/data.ts` → `profile.ctaH2` / `ctaP` |
| Caminho do PDF para download | `lib/data.ts` → `profile.ctaPdfPath` |

## Pendências antes de deployar

- [ ] Adicionar `public/foto-pedro.jpg` (foto do Pedro)
- [ ] Adicionar `public/prints/{bang-bang,hsr,realizza,felipe-villaca}.{jpg,png}` e variantes `-mobile`
- [ ] Exportar 3 PDFs para `public/`:
  - `cv-pedro-head-of-growth.pdf`
  - `cv-pedro-coo-agencia.pdf`
  - `cv-pedro-fractional.pdf`
- [ ] Configurar domínio `pedroberg.com.br` no Vercel
- [ ] Adicionar `public/og.png` (Open Graph image padrão)
- [ ] Validar conteúdo de cada perfil

## Comandos

```bash
npm run dev     # dev server em http://localhost:3000
npm run build   # produção
npm start       # roda build
```

## Tema

- Default: dark
- Toggle: botão sun/moon na nav
- Paleta: preto profundo + accent azul elétrico no dark; off-white + azul saturado no light

## Deploy

```bash
vercel --prod
```

Configurar domínio `pedroberg.com.br` apontando para esta aplicação no painel do Vercel.

## Estratégia de uso dos links

- **LinkedIn público (perfil):** apontar para raiz `/` (Head of Growth — mais amplo)
- **Vagas Head of Growth / CMO / Head of Product Marketing:** `/head-of-growth` (= raiz)
- **Vagas COO de agência / Group Account / Diretor Atendimento:** `/coo-agencia`
- **Sondagens fractional / advisory / AI Ops:** `/fractional`

Sem cards de "escolha um perfil" na home — cada link é mandado por canal específico conforme o contexto da conversa.
