import React from 'react';
import PageShell, { Legend } from '../../../components/PageShell';
import RankingTable from '../../../components/RankingTable';

const PLAYERS = [
    { "#": "🥇", Duo: "OmniMommy", Membros: "Omniomm e Madmess", Pt: "+13", M: 2.6, "1º JOGO": 5, "2º JOGO": 3, "3º JOGO": 2, "4º JOGO": 1, "5º JOGO": 2 },
    { "#": "🥈", Duo: "Familia Superior", Membros: "Cludos e Squnha", Pt: "+10", M: 2.8, "1º JOGO": 6, "2º JOGO": 2, "3º JOGO": 3, "4º JOGO": 2, "5º JOGO": 1 },
    { "#": "🥉", Duo: "Goma", Membros: "Frosty e Wisdow", Pt: "+8", M: 3.6, "1º JOGO": 1, "2º JOGO": 4, "3º JOGO": 4, "4º JOGO": 6, "5º JOGO": 3 },
    { "#": "4º", Duo: "Stat Checkers", Membros: "Xadas e João Nuno", Pt: "+6", M: 3.8, "1º JOGO": 2, "2º JOGO": 5, "3º JOGO": 1, "4º JOGO": 4, "5º JOGO": 7 },
    { "#": "5º", Duo: "Gelatina de Cocaina", Membros: "Gelly e Droga", Pt: "+5", M: 3.8, "1º JOGO": 4, "2º JOGO": 1, "3º JOGO": 5, "4º JOGO": 5, "5º JOGO": 4 },
    { "#": "6º", Duo: "Arrebirópaço", Membros: "Areias e Brito e Xiro", Pt: "+5", M: 5.0, "1º JOGO": 3, "2º JOGO": 7, "3º JOGO": 6, "4º JOGO": 3, "5º JOGO": 6 },
    { "#": "7º", Duo: "MVPs da Escape Room", Membros: "Geremias e Mestre Gui", Pt: "+4", M: 6.6, "1º JOGO": 8, "2º JOGO": 6, "3º JOGO": 7, "4º JOGO": 7, "5º JOGO": 5 },
    { "#": "8º", Duo: "Putas do Afonso", Membros: "Lemos e Lampreia", Pt: "+4", M: 7.8, "1º JOGO": 7, "2º JOGO": 8, "3º JOGO": 8, "4º JOGO": 8, "5º JOGO": 8 },
];

// O rotulo curto ("1J") e a chave longa ("1º JOGO") divergem: e precisamente o
// que o par [rotulo, chave] resolve.
const COLUMNS = [
    ['#'],
    ['Duo'],
    ['Membros'],
    ['Pts', 'Pt'],
    ['M'],
    ...[1, 2, 3, 4, 5].map((n) => [`${n}J`, `${n}º JOGO`]),
];

const ArenasLOL = () => (
    <PageShell title="Rankings do LoL Arenas">
        <RankingTable columns={COLUMNS} rows={PLAYERS} />
        <Legend>
            <b>Pts</b> - Pontos Ganhos | <b>M</b> - Média Classificativa | <b>nJ</b> - nº Jogo
        </Legend>
    </PageShell>
);

export default ArenasLOL;
