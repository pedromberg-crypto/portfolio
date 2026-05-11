# pedromaia-site

Site / currículo interativo de Pedro Maia · Gerente de Projetos · CEO Accellera.

One-page mobile-first. Next.js 15 + Tailwind v4 + shadcn/ui (Base UI) + next-themes. Deploy Vercel.

## Estrutura

```
app/
  globals.css         paleta light/dark + tokens + animações
  layout.tsx          fontes (Inter · Inter Tight · Geist Mono), ThemeProvider, metadata
  page.tsx            compõe seções

components/
  sticky-nav.tsx      nav fixed top com toggle de tema
  hero.tsx            nome + headline + 3 ganchos + CTA + foto placeholder
  clients.tsx         4 squads em tabs (Bang Bang · HSR · Realizza · Felipe Villaça)
  method.tsx          Template Bootstrap em 2 estágios
  cases.tsx           6 peças do portfólio em cards expansíveis (Dialog)
  timeline.tsx        trajetória 11 anos
  stack.tsx           ferramentas operadas direto vs orquestradas via Claude Code
  cta.tsx             bloco final com WhatsApp / e-mail / LinkedIn / CV
  footer.tsx
  theme-provider.tsx  next-themes wrapper
  theme-toggle.tsx
  icons.tsx           LinkedinIcon (lucide removeu o ícone)
  ui/                 shadcn (Button · Badge · Card · Dialog · Tabs · Separator · Sheet)

lib/
  data.ts             fonte única dos dados (profile, ganchos, clientes, peças, timeline, stack)
  utils.ts            cn helper do shadcn

public/
  prints/             colocar bang-bang.jpg e hsr.jpg aqui
```

## Pendências antes de deployar

- [ ] Substituir placeholder de foto em `components/hero.tsx` por `<Image src="/foto-pedro.jpg" ... />` quando arquivo estiver em `public/`.
- [ ] Colocar prints `public/prints/bang-bang.jpg` e `public/prints/hsr.jpg`.
- [ ] Exportar CV em PDF como `public/cv-pedro-maia.pdf` (o botão de download aponta pra esse path).
- [ ] Definir domínio final e ajustar `metadataBase` em `app/layout.tsx`.

## Comandos

```bash
npm run dev     # dev server em http://localhost:3000
npm run build   # produção
npm start       # roda build
```

## Tema

- Default: dark.
- Toggle: botão sun/moon na nav.
- Paleta: preto profundo + accent azul elétrico no dark; off-white + azul elétrico mais saturado no light.

## Acessibilidade

- `lang="pt-BR"` no html.
- Estados de foco visíveis (focus-visible:ring).
- Imagens com `alt`.
- Botões com `aria-label` onde sem texto visível.
- Scroll suave via `scroll-behavior: smooth`.

## Deploy

```bash
vercel --prod
```
