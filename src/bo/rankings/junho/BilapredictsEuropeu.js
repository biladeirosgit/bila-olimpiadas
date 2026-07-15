import React from 'react';
import PageShell, { Legend } from '../../../components/PageShell';
import RankingTable from '../../../components/RankingTable';

// Dados dos jogadores
const PLAYERS = [
    { "#": "🥇", "Membros": "Xadas", Pt: "+13", T: 1040, Mp: 430, Tb: 610 },
    { "#": "🥈", "Membros": "Squnha", Pt: "+10", T: 1035, Mp: 405, Tb: 630 },
    { "#": "🥉", "Membros": "Bárbara", Pt: "+8", T: 1000, Mp: 310, Tb: 690 },
    { "#": "4º", "Membros": "Alcunha", Pt: "+6", T: 963, Mp: 333, Tb: 630 },
    { "#": "5º", "Membros": "Cludos", Pt: "+5", T: 910, Mp: 390, Tb: 520 },
    { "#": "6º", "Membros": "Wisdow", Pt: "+5", T: 864, Mp: 344, Tb: 520 },
    { "#": "7º", "Membros": "Geremias", Pt: "+4", T: 836, Mp: 336, Tb: 500 },
    { "#": "8º", "Membros": "Mestre Gui", Pt: "+4", T: 793, Mp: 333, Tb: 460 },
    { "#": "9º", "Membros": "João Nuno", Pt: "+3", T: 640, Mp: 0, Tb: 640 },
    { "#": "10º", "Membros": "Sardoal", Pt: "+3", T: 637, Mp: 287, Tb: 350 },
    { "#": "11º", "Membros": "Gelly", Pt: "+2", T: 609, Mp: 289, Tb: 320 },
    { "#": "12º", "Membros": "Frazão", Pt: "+2", T: 540, Mp: 0, Tb: 540 },
    { "#": "13º", "Membros": "Lekky", Pt: "+2", T: 469, Mp: 199, Tb: 270 },
    { "#": "14º", "Membros": "Hydra", Pt: "+2", T: 446, Mp: 66, Tb: 380 },
];

const COLUMNS = [
    ['#'],
    ['Membros'],
    ['Pts', 'Pt'],
    ['Total', 'T'],
    ['Match Predictor', 'Mp'],
    ['Tournament Bracket', 'Tb'],
];

const BilapredictsEuropeu = () => (
    <PageShell title="Rankings do Bilapredicts Europeu 2024">
        <RankingTable columns={COLUMNS} rows={PLAYERS} />
        <Legend>
            <b>Pts</b> - Pontos Ganhos
        </Legend>
    </PageShell>
);

export default BilapredictsEuropeu;
