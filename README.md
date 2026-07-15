# bila-olimpiadas

Bila-Olimpíadas 2024 — 24 torneios, 53 jogadores, de março a outubro.
Site estático em
[biladeirosgit.github.io/bila-olimpiadas](https://biladeirosgit.github.io/bila-olimpiadas/).

## Estrutura

- `src/data/tournaments.js` — **fonte única** da taxonomia dos torneios (slug,
  rótulo da navbar, chave do JSON, mês, formato). Adicionar um torneio começa aqui.
- `src/bo/rankings/rankings.json` — os dados do ranking geral, manuais.
- `src/bo/rankings/<mês>/` — uma página por torneio, com as posições hardcoded
  no próprio ficheiro.
- `src/components/RankingTable.js` — a tabela genérica. Uma coluna é um par
  `[rótulo, chave]`; é isso que permite as 24 páginas terem esquemas diferentes.

## Testes

`src/__tests__/golden.test.js` é um **golden master**: fotografa o conteúdo das
tabelas de todas as páginas. Se uma posição, nome ou ponto mudar, ele falha.
Atualizar os snapshots (`--updateSnapshot`) exige justificação no commit — cada
atualização é uma declaração de "mudei o que o utilizador vê, de propósito".

```
npm test
```

## Scripts

- `npm start` — servidor de desenvolvimento
- `npm run build` — build de produção
- `npm run deploy` — publica no GitHub Pages (branch `gh-pages`)
