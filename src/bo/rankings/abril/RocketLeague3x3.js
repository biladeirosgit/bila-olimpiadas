import React from 'react';
import PageShell, { Legend } from '../../../components/PageShell';
import RankingTable from '../../../components/RankingTable';
import Bracket from '../../../components/Bracket';

const PLAYERS = [
    { "#": "🥇", Nome: "BrotherZ in PaRiS", Membros: "Hydra, Lekky & Squnha", Pt: "+8" },
    { "#": "🥈", Nome: "Winners Queue", Membros: "Gelly,  Tone & Lemos", Pt: "+6" },
    { "#": "🥉", Nome: "Douradinhos de Frango", Membros: "Braz, Escher & Atlas", Pt: "+4" },
    { "#": "4º", Nome: "Falamos no FIFA", Membros: "Wisdow, Cludos & Sardoal", Pt: "+3" },
    { "#": "5º", Nome: "Frazão sobre Rodas", Membros: "Frazão, Bárbara & Xadas", Pt: "+2" },
    { "#": "5º", Nome: "O Verdadeiro Cunha", Membros: "Mestre Gui, Geremias & Alcunha", Pt: "+2" },
];

const COLUMNS = [['#'], ['Nome'], ['Membros'], ['Pts', 'Pt']];

const RocketLeague3x3 = () => (
    <PageShell title="Rankings do Rocket League 3x3">
        <RankingTable columns={COLUMNS} rows={PLAYERS} />
        <Legend>
            <b>Pts</b> - Pontos Ganhos
        </Legend>
        <Bracket title="RocketLeague" src="https://challonge.com/cqbcuyhu/module" />
    </PageShell>
);

export default RocketLeague3x3;
