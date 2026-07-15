import React from 'react';
import PageShell, { Legend } from '../../../components/PageShell';
import RankingTable from '../../../components/RankingTable';
import Bracket from '../../../components/Bracket';

const PLAYERS = [
    { "#": "🥇", Membros: "Squnha, Areias & Soares", Pt: "+8", R: "2-0" },
    { "#": "🥈", Membros: "Xadas, Bárbara & Cludos", Pt: "+6", R: "1-1" },
    { "#": "🥉", Membros: "Braz, João Nuno & Maria", Pt: "+4", R: "0-2" },
];

const COLUMNS = [['#'], ['Membros'], ['Pts', 'Pt'], ['R']];

const Volleyball = () => (
    <PageShell title="Rankings do Volleyball">
        <RankingTable columns={COLUMNS} rows={PLAYERS} />
        <Legend>
            <b>Pts</b> - Pontos Ganhos | <b>R</b> - Resultados
        </Legend>
        <Bracket title="Volleyball" src="https://challonge.com/pt/6d052y0e/module" heading="Resultados" />
    </PageShell>
);

export default Volleyball;
