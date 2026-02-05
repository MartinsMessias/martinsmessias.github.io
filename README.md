### Hi there 👋

My website: https://martinsmessias.github.io/

## Stack atual

- React 18
- Vite 5
- TypeScript

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy (GitHub Pages)

Fluxo correto:

1. Ficar na branch de código-fonte (`master`/`main`).
2. Rodar deploy:

```bash
npm run deploy
```

O comando:

- gera o build de produção (`dist/`)
- publica apenas os arquivos estáticos na branch `gh-pages`
- não mistura código-fonte React com artefatos finais de deploy
