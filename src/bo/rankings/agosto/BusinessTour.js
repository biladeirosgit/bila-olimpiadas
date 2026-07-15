import React from 'react';
import PageShell, { Legend } from '../../../components/PageShell';
import RankingTable from '../../../components/RankingTable';

// Dados dos jogadores
const PLAYERS = [
    { "#": "🥇", "Jogador": "Geremias", Pt: "+13" },
    { "#": "🥈", "Jogador": "Lekky", Pt: "+10" },
    { "#": "🥉", "Jogador": "Wisdow", Pt: "+8" },
    { "#": "4º", "Jogador": "Cludos", Pt: "+6" },
    { "#": "5º", "Jogador": "Mestre Gui", Pt: "+5" },
    { "#": "5º", "Jogador": "Xadas", Pt: "+5" },
    { "#": "7º", "Jogador": "Squnha", Pt: "+4" },
    { "#": "7º", "Jogador": "Gelly", Pt: "+4" },
];

const COLUMNS = [['#'], ['Jogador'], ['Pts', 'Pt']];

const BusinessTour = () => (
    <PageShell title="Rankings do Business Tour">
        <RankingTable columns={COLUMNS} rows={PLAYERS} />
        <Legend>
            <b>Pts</b> - Pontos Ganhos
        </Legend>
    </PageShell>
);

export default BusinessTour;
