import React from 'react';
import PageShell, { Legend } from '../../../components/PageShell';
import RankingTable from '../../../components/RankingTable';
import Bracket from '../../../components/Bracket';

// Dados dos jogadores
const PLAYERS = [
    { "#": "🥇", "Membros": "Lekky & Lemos", Pt: "+13", R: "4-0" },
    { "#": "🥈", "Membros": "Geremias & Alcunha", Pt: "+10", R: "5-2" },
    { "#": "🥉", "Membros": "Braz & João Nuno", Pt: "+8", R: "2-2" },
    { "#": "4º", "Membros": "Tone & Hydra", Pt: "+6", R: "2-2" },
    { "#": "5º", "Membros": "Squnha & Migas", Pt: "+5", R: "2-2" },
    { "#": "5º", "Membros": "Wisdow & Sardoal", Pt: "+5", R: "1-2" },
    { "#": "7º", "Membros": "Rodry & Camilo", Pt: "+4", R: "0-2" },
    { "#": "7º", "Membros": "Gelly & Esquilo", Pt: "+4", R: "0-2" },
    { "#": "7º", "Membros": "Xadas & Bárbara", Pt: "+4", R: "0-2" },
];

const COLUMNS = [['#'], ['Membros'], ['Pts', 'Pt'], ['R']];

const Bilabilhar = () => (
    <PageShell title="Rankings do Bilabilhar">
        <RankingTable columns={COLUMNS} rows={PLAYERS} />
        <Legend>
            <b>Pts</b> - Pontos Ganhos | <b>R</b> - Resultados
        </Legend>
        <Bracket title="Bilabilhar" src="https://challonge.com/pt/cifb0bv5/module" />
    </PageShell>
);

export default Bilabilhar;
