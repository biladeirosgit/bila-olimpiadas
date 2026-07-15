import React from 'react';
import PageShell, { Legend } from '../../../components/PageShell';
import RankingTable from '../../../components/RankingTable';
import Bracket from '../../../components/Bracket';

// Dados dos jogadores
const PLAYERS = [
    { "#": "🥇", Nome: "Os Fora da LEI", "Membros": "Wisdow & Mestre Gui", Pt: "+13", J: 7, V: 5, D: 2, GM: 23, GS: 18 },
    { "#": "🥈", Nome: "Marra e Quilha", "Membros": "Xadas & Bárbara", Pt: "+10", J: 6, V: 4, D: 1, GM: 18, GS: 15 },
    { "#": "🥉", Nome: "Vale Tudo", "Membros": "Simão & Camilo", Pt: "+8", J: 3, V: 1, D: 2, GM: 8, GS: 11 },
    { "#": "4º", Nome: "Os Marrecos dos Matrecos", "Membros": "Cludos & Braz", Pt: "+6", J: 3, V: 1, D: 2, GM: 9, GS: 11 },
    { "#": "5º", Nome: "Duo Lipa", "Membros": "Geremias & Esquilo", Pt: "+5", J: 3, V: 1, D: 2, GM: 10, GS: 10 },
    { "#": "6º", Nome: "Borussia Doutro Mundo", "Membros": "Squnha & Rodry", Pt: "+5", J: 2, V: 0, D: 2, GM: 5, GS: 8 },
];

const COLUMNS = [['#'], ['Nome'], ['Membros'], ['Pts', 'Pt'], ['J'], ['V'], ['D'], ['GM'], ['GS']];

const Bilatrecos = () => (
    <PageShell title="Rankings do Bilatrecos">
        <RankingTable columns={COLUMNS} rows={PLAYERS} />
        <Legend>
            <b>Pts</b> - Pontos Ganhos | <b>J</b> - Jogos | <b>V</b> - Vitórias | <b>D</b> - Derrotas | <b>GM</b> - Golos Marcados | <b>GS</b> - Golos Sofridos
        </Legend>
        <Bracket title="Bilatrecos" src="https://challonge.com/pt/ro1ajek3/module" />
    </PageShell>
);

export default Bilatrecos;
