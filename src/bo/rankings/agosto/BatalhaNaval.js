import React from 'react';
import PageShell, { Legend } from '../../../components/PageShell';
import RankingTable from '../../../components/RankingTable';

const PLAYERS = [
    { "#": "🥇", Membros: "Xadas, Bárbara, Cludos & João Nuno", Pt: "+8" },
    { "#": "🥈", Membros: "Geremias, Squnha, Atlas & Areias", Pt: "+4" },
];

const COLUMNS = [['#'], ['Membros'], ['Pts', 'Pt']];

const BatalhaNaval = () => (
    <PageShell title="Rankings do Batalha Naval">
        <RankingTable columns={COLUMNS} rows={PLAYERS} />
        <Legend>
            <b>Pts</b> - Pontos Ganhos
        </Legend>
    </PageShell>
);

export default BatalhaNaval;
