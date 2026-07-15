import React from 'react';
import PageShell, { Legend } from '../../../components/PageShell';
import RankingTable from '../../../components/RankingTable';

// Dados dos jogadores
const PLAYERS = [
    { "#": "🥇", "Nome": "Squnha", "Pt": "+13", "Ps": 32545 },
    { "#": "🥈", "Nome": "Braz", "Pt": "+10", "Ps": 32025 },
    { "#": "🥉", "Nome": "Mestre Gui", "Pt": "+8", "Ps": 30705 },
    { "#": "4º", "Nome": "Frazão", "Pt": "+6", "Ps": 29095 },
    { "#": "5º", "Nome": "Geremias", "Pt": "+5", "Ps": 28410 },
    { "#": "6º", "Nome": "Lemos", "Pt": "+5", "Ps": 27115 },
    { "#": "7º", "Nome": "Cludos", "Pt": "+4", "Ps": 26295 },
    { "#": "8º", "Nome": "Xadas", "Pt": "+4", "Ps": 25635 },
    { "#": "9º", "Nome": "Bárbara", "Pt": "+3", "Ps": 25095 },
    { "#": "10º", "Nome": "Hydra", "Pt": "+3", "Ps": 23565 },
    { "#": "11º", "Nome": "Wisdow", "Pt": "+2", "Ps": 22235 },
    { "#": "12º", "Nome": "Lekky", "Pt": "+2", "Ps": 20325 },
];

const COLUMNS = [['#'], ['Nome'], ['Pts', 'Pt'], ['Ps']];

const Scribblio = () => (
    <PageShell title="Rankings do Scribbl.io">
        <RankingTable columns={COLUMNS} rows={PLAYERS} />
        <Legend>
            <b>Pts</b> - Pontos Ganhos | <b>Ps</b> - Pontos Scribbl.io
        </Legend>
    </PageShell>
);

export default Scribblio;
