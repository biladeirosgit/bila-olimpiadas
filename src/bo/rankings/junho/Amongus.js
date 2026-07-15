import React from 'react';
import PageShell, { Legend } from '../../../components/PageShell';
import RankingTable from '../../../components/RankingTable';

// Dados dos jogadores
const PLAYERS = [
    { "#": "🥇", "Membros": "Mestre Gui", Pt: "+13", Pa: 127, nI: 3, Vi: 2, Vc: 2, Ct: 1, K: 9, CA: 4, IA: 0 },
    { "#": "🥈", "Membros": "Squnha", Pt: "+10", Pa: 117, nI: 2, Vi: 2, Vc: 3, Ct: 3, K: 2, CA: 8, IA: 3 },
    { "#": "🥉", "Membros": "Hydra", Pt: "+8", Pa: 72, nI: 2, Vi: 1, Vc: 2, Ct: 1, K: 4, CA: 2, IA: 1 },
    { "#": "4º", "Membros": "Cludos", Pt: "+6", Pa: 71, nI: 3, Vi: 1, Vc: 2, Ct: 2, K: 3, CA: 4, IA: 3 },
    { "#": "5º", "Membros": "Bárbara", Pt: "+5", Pa: 64, nI: 1, Vi: 0, Vc: 2, Ct: 1, K: 2, CA: 7, IA: 1 },
    { "#": "6º", "Membros": "Xadas", Pt: "+5", Pa: 59, nI: 1, Vi: 1, Vc: 3, Ct: 1, K: 2, CA: 0, IA: 3 },
    { "#": "7º", "Membros": "Frazão", Pt: "+4", Pa: 46, nI: 3, Vi: 1, Vc: 1, Ct: 0, K: 3, CA: 1, IA: 1 },
    { "#": "8º", "Membros": "Geremias", Pt: "+4", Pa: 43, nI: 0, Vi: 0, Vc: 3, Ct: 3, K: 0, CA: 3, IA: 5 },
    { "#": "9º", "Membros": "Wisdow", Pt: "+3", Pa: 31, nI: 0, Vi: 0, Vc: 3, Ct: 0, K: 0, CA: 4, IA: 6 },
];

const COLUMNS = [['#'], ['Membros'], ['Pts', 'Pt'], ['Pa'], ['nI'], ['Vi'], ['Vc'], ['Ct'], ['K'], ['CA'], ['IA']];

const AmongUs = () => (
    <PageShell title="Rankings do AmongUs">
        <RankingTable columns={COLUMNS} rows={PLAYERS} />
        <Legend>
            <b>Pts</b> - Pontos Ganhos | <b>Pa</b> - Pontos AmongUs | <b>nI</b> - Número de vezes a impostor | <b>Vi</b> - Vitórias como Impostor | <b>Vc</b> - Vitórias como Crewmate | <b>Ct</b> - Completed Tasks | <b>K</b> - Kills | <b>CA</b> - Correct Accusations | <b>IA</b> - Incorrect Accusations
        </Legend>
    </PageShell>
);

export default AmongUs;
