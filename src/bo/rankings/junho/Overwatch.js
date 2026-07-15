import React from 'react';
import PageShell, { Legend } from '../../../components/PageShell';
import RankingTable from '../../../components/RankingTable';

const PLAYERS = [
    { "#": "🥇", Nome: "Avecs da Tuga", Membros: "Rodry, g0mes_27, simas7559, xxbrunoxx2514, Shanks", Pt: "+8", R: "2-0" },
    { "#": "🥈", Nome: "Lacaios do Braz", Membros: "Braz, João Nuno, Escher, Xadas & Atlas", Pt: "+6", R: "1-1" },
    { "#": "🥉", Nome: "Temos 2 Cunhas", Membros: "Wisdow, Geremias, Xiro, Squnha & Cludos", Pt: "+4", R: "0-2" },
];

const COLUMNS = [['#'], ['Nome'], ['Membros'], ['Pts', 'Pt'], ['R']];

const Overwatch = () => (
    <PageShell title="Rankings do Overwatch 2">
        <RankingTable columns={COLUMNS} rows={PLAYERS} />
        <Legend>
            <b>Pts</b> - Pontos Ganhos | <b>R</b> - Resultado
        </Legend>
    </PageShell>
);

export default Overwatch;
