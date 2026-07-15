import React from 'react';
import PageShell, { Legend } from '../../../components/PageShell';
import RankingTable from '../../../components/RankingTable';

// Dados dos jogadores
const PLAYERS_2G = [
    { "#": "🥇", Nome: "Droga", J: 3, ML: 1.67, "1L": 1, "2L": 2, "3L": 0, "4L": 0, "5L": 0, "6L": 0, "7L": 0, "8L": 0 },
    { "#": "🥈", Nome: "Bárbara", J: 3, ML: 2.67, "1L": 1, "2L": 0, "3L": 1, "4L": 1, "5L": 0, "6L": 0, "7L": 0, "8L": 0 },
    { "#": "🥉", Nome: "Mestre Gui", J: 3, ML: 2.67, "1L": 0, "2L": 1, "3L": 2, "4L": 0, "5L": 0, "6L": 0, "7L": 0, "8L": 0 },
    { "#": "4º", Nome: "Cludos", J: 3, ML: 3.00, "1L": 1, "2L": 0, "3L": 0, "4L": 2, "5L": 0, "6L": 0, "7L": 0, "8L": 0 },
    { "#": "5º", Nome: "Wisdow", J: 3, ML: 5.33, "1L": 0, "2L": 0, "3L": 0, "4L": 0, "5L": 2, "6L": 1, "7L": 0, "8L": 0 },
    { "#": "6º", Nome: "Braz", J: 3, ML: 5.67, "1L": 0, "2L": 0, "3L": 0, "4L": 0, "5L": 1, "6L": 2, "7L": 0, "8L": 0 },
];

const PLAYERS_1G = [
    { "#": "🥇", Nome: "Xadas", J: 3, ML: 2.00, "1L": 2, "2L": 0, "3L": 0, "4L": 1, "5L": 0, "6L": 0, "7L": 0, "8L": 0 },
    { "#": "🥈", Nome: "Squnha", J: 3, ML: 2.67, "1L": 0, "2L": 1, "3L": 2, "4L": 0, "5L": 0, "6L": 0, "7L": 0, "8L": 0 },
    { "#": "🥉", Nome: "Geremias", J: 3, ML: 3.65, "1L": 1, "2L": 1, "3L": 0, "4L": 0, "5L": 0, "6L": 1, "7L": 0, "8L": 0 },
    { "#": "4º", Nome: "Hydra", J: 3, ML: 4.00, "1L": 0, "2L": 1, "3L": 0, "4L": 0, "5L": 2, "6L": 0, "7L": 0, "8L": 0 },
    { "#": "5º", Nome: "João Nuno", J: 3, ML: 4.33, "1L": 0, "2L": 0, "3L": 0, "4L": 1, "5L": 2, "6L": 0, "7L": 0, "8L": 0 },
    { "#": "6º", Nome: "Lekky", J: 3, ML: 5.00, "1L": 0, "2L": 0, "3L": 1, "4L": 0, "5L": 0, "6L": 2, "7L": 0, "8L": 0 },
];

const PLAYERS_FINAL = [
    { "#": "🥇", Nome: "Droga", J: 3, ML: 2.33, "1L": 1, "2L": 0, "3L": 2, "4L": 0, "5L": 0, "6L": 0, "7L": 0, "8L": 0 },
    { "#": "🥈", Nome: "Mestre Gui", J: 3, ML: 2.67, "1L": 1, "2L": 1, "3L": 0, "4L": 0, "5L": 1, "6L": 0, "7L": 0, "8L": 0 },
    { "#": "🥉", Nome: "Xadas", J: 3, ML: 3.67, "1L": 0, "2L": 1, "3L": 1, "4L": 0, "5L": 0, "6L": 1, "7L": 0, "8L": 0 },
    { "#": "🥉", Nome: "Bárbara", J: 3, ML: 3.67, "1L": 0, "2L": 1, "3L": 0, "4L": 1, "5L": 1, "6L": 0, "7L": 0, "8L": 0 },
    { "#": "5º", Nome: "Cludos", J: 3, ML: 4.00, "1L": 1, "2L": 0, "3L": 0, "4L": 0, "5L": 1, "6L": 1, "7L": 0, "8L": 0 },
    { "#": "6º", Nome: "Geremias", J: 3, ML: 4.67, "1L": 0, "2L": 0, "3L": 0, "4L": 2, "5L": 0, "6L": 1, "7L": 0, "8L": 0 },
    { "#": "7º", Nome: "Squnha", J: 3, ML: 7.00, "1L": 0, "2L": 0, "3L": 0, "4L": 0, "5L": 0, "6L": 0, "7L": 3, "8L": 0 },
    { "#": "8º", Nome: "Hydra", J: 3, ML: 8.00, "1L": 0, "2L": 0, "3L": 0, "4L": 0, "5L": 0, "6L": 0, "7L": 0, "8L": 3 },
];

const PLAYERS_TFT = [
    { "#": "🥇", Nome: "Droga", Pts: "+13" },
    { "#": "🥈", Nome: "Mestre Gui", Pts: "+10" },
    { "#": "🥉", Nome: "Xadas", Pts: "+8" },
    { "#": "🥉", Nome: "Bárbara", Pts: "+8" },
    { "#": "5º", Nome: "Cludos", Pts: "+5" },
    { "#": "6º", Nome: "Geremias", Pts: "+5" },
    { "#": "7º", Nome: "Squnha", Pts: "+4" },
    { "#": "8º", Nome: "Hydra", Pts: "+4" },
    { "#": "9º", Nome: "João Nuno", Pts: "+3" },
    { "#": "9º", Nome: "Wisdow", Pts: "+3" },
    { "#": "10º", Nome: "Lekky", Pts: "+3" },
    { "#": "10º", Nome: "Braz", Pts: "+3" },
];

const PTS = [['#'], ['Nome'], ['Pts']];

// Aqui o `Pts` da tabela geral e o `Pts` destas nao sao a mesma coisa, e por
// isso e que as chaves dos dados NAO foram normalizadas: o par [rotulo, chave]
// resolve-o sem tocar nos objetos.
const GRUPO = [['#'], ['Nome'], ['J'], ['ML'], ...[1, 2, 3, 4, 5, 6, 7, 8].map((n) => [`${n}L`])];

const TFT = () => (
    <PageShell title="Rankings Teamfight Tactics">
        <RankingTable columns={PTS} rows={PLAYERS_TFT} />
        <h2 className="section-title">Tabela do Grupo 1</h2>
        <RankingTable columns={GRUPO} rows={PLAYERS_1G} />
        <h2 className="section-title">Tabela do Grupo 2</h2>
        <RankingTable columns={GRUPO} rows={PLAYERS_2G} />
        <h2 className="section-title">Tabela do Grupo Final</h2>
        <RankingTable columns={GRUPO} rows={PLAYERS_FINAL} />
        <Legend>
            <b>Pts</b> - Pontos Ganhos | <b>J</b> - Jogos | <b>ML</b> - Média de Lugares | <b>nL</b> - Lugares
        </Legend>
    </PageShell>
);

export default TFT;
