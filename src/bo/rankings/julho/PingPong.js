import React from 'react';
import PageShell, { Legend } from '../../../components/PageShell';
import RankingTable from '../../../components/RankingTable';
import Bracket from '../../../components/Bracket';

// Dados dos jogadores
const PLAYERS = [
    { "#": "🥇", "Membros": "Xadas", Pt: "+13" },
    { "#": "🥈", "Membros": "João Nuno", Pt: "+10" },
    { "#": "🥉", "Membros": "Lekky", Pt: "+8" },
    { "#": "4º", "Membros": "Atlas", Pt: "+6" },
    { "#": "5º", "Membros": "Bárbara", Pt: "+5" },
    { "#": "5º", "Membros": "Braz", Pt: "+5" },
    { "#": "7º", "Membros": "Squnha", Pt: "+4" },
    { "#": "8º", "Membros": "Cludos", Pt: "+4" },
    { "#": "9º", "Membros": "Lemos", Pt: "+3" },
    { "#": "10º", "Membros": "Gelly", Pt: "+3" },
];

const COLUMNS = [['#'], ['Membros'], ['Pts', 'Pt']];

const PingPong = () => (
    <PageShell title="Rankings do Ping Pong">
        <RankingTable columns={COLUMNS} rows={PLAYERS} />
        <Legend>
            <b>Pts</b> - Pontos Ganhos
        </Legend>
        <Bracket title="PingPong" src="https://challonge.com/pt/cc3rurwi/module" />
    </PageShell>
);

export default PingPong;
