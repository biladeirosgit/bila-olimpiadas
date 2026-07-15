import React from 'react';
import PageShell, { Legend } from '../../../components/PageShell';
import RankingTable from '../../../components/RankingTable';

// Dados dos jogadores
const PLAYERS = [
    { "#": "🥇", "Membros": "Squnha", Pt: "+13", P: 230, Cb: "520 (150.8)", T: 380.8 },
    { "#": "🥈", "Membros": "Madmess", Pt: "+10", P: 237, Cb: "360 (104.4)", T: 341.4 },
    { "#": "🥉", "Membros": "Geremias", Pt: "+8", P: 205, Cb: "390 (113.1)", T: 318.1 },
    { "#": "4º", "Membros": "Omniomm", Pt: "+6", P: 180, Cb: "360 (104.4)", T: 284.4 },
    { "#": "5º", "Membros": "João Nuno", Pt: "+5", P: 200, Cb: "290 (84.1)", T: 284.1 },
    { "#": "6º", "Membros": "Mestre Gui", Pt: "+5", P: 225, Cb: "200 (58)", T: 283 },
    { "#": "7º", "Membros": "Bárbara", Pt: "+4", P: 155, Cb: "370 (107.3)", T: 262.3 },
    { "#": "8º", "Membros": "Xadas", Pt: "+4", P: 175, Cb: "290 (84.1)", T: 259.1 },
    { "#": "9º", "Membros": "Areias", Pt: "+3", P: 227, Cb: "100 (29)", T: 256 },
    { "#": "10º", "Membros": "Frazão", Pt: "+3", P: 145, Cb: "260 (75.4)", T: 220.4 },
    { "#": "11º", "Membros": "Cludos", Pt: "+2", P: 150, Cb: "160 (46.4)", T: 196.4 },
    { "#": "12º", "Membros": "Hydra", Pt: "+2", P: 115, Cb: "220 (63.8)", T: 178.8 },
];

// ATENCAO a ordem: a coluna "Total" vem antes de "Picks", mas nos objetos a
// chave T vem DEPOIS de P e Cb. Uma API baseada em Object.keys(row) trocava
// as colunas desta pagina -- e por isso que a spec e uma lista explicita.
const COLUMNS = [
    ['#'],
    ['Membros'],
    ['Pts', 'Pt'],
    ['Total', 'T'],
    ['Picks', 'P'],
    ['Crystal Ball*', 'Cb'],
];

const PickemsLOL = () => (
    <PageShell title="Rankings do League of Legends Worlds Pick'em 2024">
        <RankingTable columns={COLUMNS} rows={PLAYERS} />
        <Legend>
            <b>Pts</b> - Pontos Ganhos | *Os pontos da Crystal Ball só valeram 29%
        </Legend>
    </PageShell>
);

export default PickemsLOL;
