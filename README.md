# VENTURI | Consultoria Técnica & Jurídica

Site institucional premium (dark + dourado) construído com **Next.js + Tailwind CSS**, preparado para **export estático** e deploy no **GitHub Pages**.

## Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Export estático (`output: 'export'`)

## Rodar localmente
```bash
npm install
npm run dev
```
Abra: `http://localhost:3000`

## Build estático
```bash
npm run build
```
Saída em `out/`.

## Deploy no GitHub Pages (GitHub Actions)
1. Faça push para `main` (ou `master`).
2. Vá em **Settings → Pages** e mantenha **Build and deployment: GitHub Actions**.
3. O workflow `.github/workflows/deploy.yml` faz build e publica `out/` automaticamente.

## Estrutura
```text
src/
  app/
    page.tsx
    solucoes/page.tsx
    metodologia/page.tsx
    entregaveis/page.tsx
    sobre/page.tsx
    faq/page.tsx
    contato/page.tsx
    politica-de-privacidade/page.tsx
    uc-imovel/page.tsx
    robots.ts
    sitemap.ts
  components/
  content/siteData.ts
  lib/seo.ts
public/logo.png
```

## Onde editar conteúdo, cores e imagens
- **Textos e dados de contato**: `src/content/siteData.ts`
- **Cores e tema**: `tailwind.config.ts` + `src/app/globals.css`
- **Hero e cards com imagens**: array `heroImages` em `src/content/siteData.ts`
- **Logo**: substituir `public/logo.png`
- **SEO base por página**: `src/lib/seo.ts` e metadados em cada `page.tsx`

## Checklist final
- [x] Home com hero forte e CTA WhatsApp
- [x] Páginas obrigatórias: Soluções, Metodologia, Entregáveis, Sobre, FAQ, Contato, Política de Privacidade, UC & Imóvel
- [x] Botão WhatsApp fixo
- [x] Seção “Agendar Diagnóstico” com formulário curto
- [x] Prova de autoridade sem números inventados
- [x] Depoimentos com placeholders editáveis
- [x] Estrutura componentizada
- [x] Conteúdo centralizado em arquivo de configuração
- [x] SEO essencial: metatags, Open Graph, robots, sitemap, Schema.org LocalBusiness
- [x] Base para acessibilidade AA (contraste, labels, semântica)
- [x] Pronto para deploy via GitHub Actions

## Observações
- Referências legais e atos normativos foram mantidos como placeholder: `((citar ato/número))`.
- Campo de analytics pode ser adicionado no `layout.tsx` (placeholder opcional).
