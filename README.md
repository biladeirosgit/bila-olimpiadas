# Bila-Olimpíadas

Site das Bila-Olimpíadas 2024 dos Biladeiros: 24 torneios, 53 jogadores, de
março a outubro, entre jogos online (League of Legends, Counter-Strike,
Rocket League...) e provas presenciais (futebol, sueca, bilhar, escape room...).
Cada torneio dá pontos, e o ranking geral soma tudo.

É uma app React (Create React App) sem pipeline de dados: os resultados estão
escritos à mão no código e num JSON.

- **Site:** https://biladeirosgit.github.io/bila-olimpiadas/
- **Hub dos Biladeiros:** https://biladeirosgit.github.io/

---

## Funcionalidades

**Página inicial**
- Pódio geral, quem ganhou mais ouros, torneios por mês e medalhas
  distribuídas.

**Ranking geral** (`/rankings`)
- Todos os jogadores com os pontos somados de todos os torneios.
- Filtros por mês, por tipo (individual, duos, trios, grupo) e por formato
  (online, presencial). Os filtros combinam-se.
- Clicar num jogador mostra as participações dele, torneio a torneio.

**Uma página por torneio** (`/rankings/<torneio>`)
- As tabelas de classificação de cada fase e, nos torneios com eliminatórias,
  a bracket.

**Calendários** (`/calendario/<mês>`)
- O cartaz de cada mês, de março a agosto.

A barra de navegação tem um menu com todos os torneios, agrupados por mês.

---

## Guia de comandos

| Quero... | Comando |
| --- | --- |
| Instalar tudo (uma vez) | `npm install` |
| Ver o site no meu PC | `npm start` (abre http://localhost:3000) |
| Correr os testes | `npm test` (fica a vigiar; `q` para sair) |
| Correr os testes uma vez | `npx react-scripts test --watchAll=false` |
| Aceitar uma mudança de conteúdo nos testes | `npx react-scripts test --watchAll=false -u` |
| Guardar as alterações no GitHub | `git add -A`, `git commit -m "..."`, `git push` |
| Publicar o site | `npm run deploy` |

Todos os comandos correm na raiz do repositório
(`C:\Users\35191\Desktop\bilaolimpiada`).

Para publicar uma alteração, o fluxo é sempre:

```powershell
npx react-scripts test --watchAll=false
git add -A
git commit -m "Descreve a alteração"
git push
npm run deploy
```

O site atualiza em 1 a 2 minutos. Se continuares a ver a versão antiga, faz
Ctrl+F5.

---

## Onde estão os dados

| Ficheiro | O que tem |
| --- | --- |
| `src/data/tournaments.js` | A lista dos 24 torneios: slug da página, nome na navbar, chave no JSON, mês, tipo e formato. É a **fonte única**: a navbar, as rotas e os filtros saem daqui |
| `src/bo/rankings/rankings.json` | Por jogador, o lugar e os pontos em cada torneio. É o que alimenta o ranking geral e a página inicial |
| `src/bo/rankings/<mês>/<Torneio>.js` | A página de cada torneio, com as tabelas escritas no próprio ficheiro |
| `src/App.js` | O mapa slug → página de cada torneio (`TOURNAMENT_PAGES`) |
| `public/images/<Nome>.png` | Foto de cada jogador ou equipa. O nome do ficheiro é o nome no JSON, com acentos |
| `public/images/<mês>.webp` | Cartaz do calendário de cada mês |

Atenção: em dois torneios o nome da navbar não é igual à chave do JSON
(`Counter-Strike2 5x5` → `CounterStrike 2`, e `Arenas LOL` → `Arenas LoL`).
Por isso `nav` e `key` são campos separados no `tournaments.js`.

---

## Tarefas comuns

### Corrigir um resultado

1. Na página do torneio (`src/bo/rankings/<mês>/<Torneio>.js`), corrige a
   linha na tabela.
2. Se o lugar ou os pontos mudaram, corrige também a entrada desse jogador em
   `src/bo/rankings/rankings.json`:
   ```json
   "Geremias": {
       "Futbiladas": { "Lugar": "🥇", "Pontos": 8 }
   }
   ```
3. Corre os testes. O teste "golden" vai falhar, porque fotografa o conteúdo de
   todas as páginas e deteta qualquer mudança. Se a mudança é a que querias,
   aceita-a:
   ```powershell
   npx react-scripts test --watchAll=false -u
   ```
   Explica no commit o que mudou e porquê: cada `-u` é uma declaração de "mudei
   o que as pessoas veem, de propósito".
4. Faz commit, push e deploy.

### Jogador novo

1. Mete a foto em `public/images/<Nome>.png`, com o nome exatamente igual ao
   que vais usar no JSON (acentos incluídos).
2. Acrescenta-o a `src/bo/rankings/rankings.json` com os torneios em que
   participou.
3. Acrescenta-o às tabelas das páginas dos torneios dele.
4. Corre os testes. Os que contam jogadores (`rankings.test.js`) e o golden
   vão falhar; atualiza os números nos testes e aceita o golden com `-u`.

### Torneio novo

1. Acrescenta uma linha a `TOURNAMENTS` em `src/data/tournaments.js`, com
   `slug`, `nav`, `key`, `month`, `amount` e `format`.
2. Cria a página em `src/bo/rankings/<mês>/<Torneio>.js`. Copia uma página
   parecida (por exemplo `marco/TFT.js` para tabelas, ou `abril/Sueca.js` para
   uma bracket) e troca os dados.
3. Em `src/App.js`, importa a página e acrescenta-a ao `TOURNAMENT_PAGES`, com o
   mesmo slug.
4. Em `src/bo/rankings/rankings.json`, acrescenta o torneio (com a `key` do
   passo 1) a cada jogador que participou.
5. Corre os testes. Os que dizem "são 24 torneios" e o golden vão falhar:
   atualiza a contagem e aceita o golden com `-u`.

### Calendário de um mês

1. Mete a imagem em `public/images/<mês>.webp` (por exemplo `setembro.webp`).
   Usa WebP: as fotografias dos cartazes em PNG pesavam 3 MB cada, em WebP
   pesam ~90 kB.
2. Acrescenta o mês a `SLUG_TO_MES` em `src/bo/calendario/Calendar.js`.
3. O menu "Calendar" da navbar mostra os meses de `MONTHS` (no
   `tournaments.js`), menos outubro, que não tem cartaz. Se o mês for novo,
   acrescenta-o a `MONTHS`; se for outubro, tira-o do filtro em
   `src/components/NavBar.js`.

---

## Testes

| Teste | O que garante |
| --- | --- |
| `golden.test.js` | Golden master: o conteúdo das tabelas de todas as páginas não muda sem querer |
| `tournaments.test.js` | A lista de torneios e o `rankings.json` batem certo |
| `routes.test.js` | Todos os torneios têm página |
| `rankings.test.js` | O ranking geral e os filtros dão os totais certos |
| `home.test.js`, `navbar.test.js`, `calendar.test.js` | Página inicial, menu e calendários |

---

## Resolução de problemas

**Uma foto não aparece:** o nome do ficheiro em `public/images/` tem de ser
exatamente o nome no JSON, com acentos e maiúsculas.

**Um torneio não aparece nos filtros do ranking:** a `key` no
`tournaments.js` não é igual à chave usada no `rankings.json`.

**`detected dubious ownership in repository`:** o repositório foi criado ou
clonado num terminal de administrador. Corre uma vez:
```powershell
git config --global --add safe.directory C:/Users/35191/Desktop/bilaolimpiada
```

**`npm run deploy` dá `Failed to get remote.origin.url`:** a cache do
`gh-pages` ficou com outro dono (o mesmo problema de cima). Apaga-a e volta a
publicar:
```powershell
npx gh-pages-clean
npm run deploy
```
