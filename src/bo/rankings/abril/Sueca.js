import React from 'react';
import PageShell, { Legend } from '../../../components/PageShell';
import RankingTable from '../../../components/RankingTable';
import Bracket from '../../../components/Bracket';

// Dados dos jogadores
const PLAYERS = [
    { "#": "🥇", "Duos": "Xadas e Bárbara", Pt: "+13" },
    { "#": "🥈", "Duos": "Cludos e Lemos", Pt: "+10" },
    { "#": "🥉", "Duos": "Wisdow e Squnha", Pt: "+8" },
    { "#": "4º", "Duos": "Geremias e Esquilo", Pt: "+6" },
    { "#": "5º", "Duos": "Braz e Atlas", Pt: "+5" },
    { "#": "5º", "Duos": "Hydra e Lekky", Pt: "+5" },
];

const COLUMNS = [['#'], ['Duos'], ['Pts', 'Pt']];

const Sueca = () => (
    <PageShell title="Rankings do Sueca">
        <RankingTable columns={COLUMNS} rows={PLAYERS} />
        <Legend>
            <b>Pts</b> - Pontos Ganhos
        </Legend>
        <Bracket title="Sueca" src="https://challonge.com/pt/egpr25tn/module" />
    </PageShell>
);

export default Sueca;
