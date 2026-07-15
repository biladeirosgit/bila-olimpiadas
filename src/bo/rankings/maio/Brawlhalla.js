import React from 'react';
import PageShell, { Legend } from '../../../components/PageShell';
import RankingTable from '../../../components/RankingTable';
import Bracket from '../../../components/Bracket';

// Dados dos jogadores
const PLAYERS = [
    { "#": "🥇", "Membros": "Gelly", Pt: "+13", R: "5-1" },
    { "#": "🥈", "Membros": "Wisdow", Pt: "+10", R: "3-1" },
    { "#": "🥉", "Membros": "Cludos", Pt: "+8", R: "3-2" },
    { "#": "4º", "Membros": "XSitlo", Pt: "+6", R: "2-2" },
    { "#": "5º", "Membros": "Mestre Gui", Pt: "+5", R: "1-2" },
    { "#": "5º", "Membros": "Xadas", Pt: "+5", R: "1-2" },
    { "#": "7º", "Membros": "Geremias", Pt: "+4", R: "1-2" },
    { "#": "7º", "Membros": "Hydra", Pt: "+4", R: "0-2" },
    { "#": "7º", "Membros": "Squnha", Pt: "+4", R: "0-2" },
];

const COLUMNS = [['#'], ['Membros'], ['Pts', 'Pt'], ['R']];

const Brawlhalla = () => (
    <PageShell title="Rankings do Brawlhalla">
        <RankingTable columns={COLUMNS} rows={PLAYERS} />
        <Legend>
            <b>Pts</b> - Pontos Ganhos | <b>R</b> - Resultados
        </Legend>
        <Bracket title="Brawlhalla" src="https://challonge.com/223j79z7/module" />
    </PageShell>
);

export default Brawlhalla;
