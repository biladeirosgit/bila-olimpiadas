import React from 'react';
import PageShell, { Legend } from '../../../components/PageShell';
import RankingTable from '../../../components/RankingTable';

const PLAYERS = [
    { "#": "🥇", Equipa: "B", Membros: "Squnha, Geremias, Cludos & Areias", Pt: "+8" },
    { "#": "🥈", Equipa: "A", Membros: "Xadas, Braz, Atlas & Mestre Gui", Pt: "+4" },
];

const COLUMNS = [['#'], ['Equipas', 'Equipa'], ['Membros'], ['Pts', 'Pt']];

const RONDAS = [
    { ronda: 1, pontosA: "12 [2*]", pontosB: "12 [4*]", killerA: "Braz", killerB: "Squnha" },
    { ronda: 2, pontosA: "9", pontosB: "12", killerA: "Mestre Gui", killerB: "Geremias" },
    { ronda: 3, pontosA: "3", pontosB: "6", killerA: "Xadas", killerB: "Areias" },
    { ronda: 4, pontosA: "NR", pontosB: "NR", killerA: "Atlas", killerB: "Cludos" },
];

// A coluna do meio e um separador constante: header vazio, celula sempre "-".
const RONDAS_COLUMNS = [
    ['Ronda #', 'ronda'],
    ['Killer A', 'killerA'],
    ['Pontos A', 'pontosA'],
    ['', () => '-'],
    ['Pontos B', 'pontosB'],
    ['Killer B', 'killerB'],
];

const DeadByDaylight = () => (
    <PageShell title="Rankings do Dead By Daylight">
        <RankingTable columns={COLUMNS} rows={PLAYERS} />
        <Legend>
            <b>Pts</b> - Pontos Ganhos
        </Legend>
        <RankingTable columns={RONDAS_COLUMNS} rows={RONDAS} />
        <Legend>
            <b>[N*]</b> - Geradores da Equipa Concertados (1º Critério de Desempate)
        </Legend>
        <Legend>
            <b>NR</b> - Não Realizado
        </Legend>
    </PageShell>
);

export default DeadByDaylight;
