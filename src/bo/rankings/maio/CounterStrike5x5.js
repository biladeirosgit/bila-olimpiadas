import React from 'react';
import PageShell, { Legend } from '../../../components/PageShell';
import RankingTable from '../../../components/RankingTable';
import Bracket from '../../../components/Bracket';

const PLAYERS = [
    { "#": "🥇", Nome: "Matadores dos Cheios de Fome", Membros: "Squnha, Mestre Diogo, Rodry, Cludos, Xavier", Pt: "+8" },
    { "#": "🥈", Nome: "ReisDelas", Membros: "Lemos, Gelly, Hydra, Tone & Lekky", Pt: "+6" },
    { "#": "🥉", Nome: "Os Sportinguistas do Sardoal", Membros: "Wisdow, Sardoal, João, João Tavares & Lobato", Pt: "+4" },
    { "#": "4º", Nome: "Os Fora da Lei", Membros: "Geremias, Alcunha, Braz, João Nuno & Xadas", Pt: "+2" },
];

const COLUMNS = [['#'], ['Nome'], ['Membros'], ['Pts', 'Pt']];

const CounterStrike5x5 = () => (
    <PageShell title="Rankings do CounterStrike 2">
        <RankingTable columns={COLUMNS} rows={PLAYERS} />
        <Legend>
            <b>Pts</b> - Pontos Ganhos
        </Legend>
        <Bracket title="CounterStrike" src="https://challonge.com/pt/up1hx237/module" />
    </PageShell>
);

export default CounterStrike5x5;
