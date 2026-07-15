import React from 'react';
import PageShell, { Legend } from '../../../components/PageShell';
import RankingTable from '../../../components/RankingTable';

// Dados dos jogadores
const PLAYERS = [
    { "#": "🥇", "Jogador": "Squnha", PMM: 23, MC: 2.36, Sw1: "4º", Sw2: "🥇", Sw3: "5º", Bb1: "🥇", Bb2: "🥉", Bb3: "🥈", Tr1: "🥇", Tr2: "🥇", Tr3: "🥇", Hg: "6º", Pk: "🥇", Pt: "+13" },
    { "#": "🥈", "Jogador": "Lobato", PMM: 20, MC: 3.09, Sw1: "🥇", Sw2: "🥉", Sw3: "🥇", Bb1: "5º", Bb2: "4º", Bb3: "🥇", Tr1: "🥈", Tr2: "7º", Tr3: "7º", Hg: "🥇", Pk: "🥈", Pt: "+10" },
    { "#": "🥉", "Jogador": "Geremias", PMM: 14, MC: 3.18, Sw1: "5º", Sw2: "5º", Sw3: "🥈", Bb1: "🥉", Bb2: "🥈", Bb3: "🥉", Tr1: "5º", Tr2: "🥈", Tr3: "🥈", Hg: "🥉", Pk: "🥉", Pt: "+8" },
    { "#": "4º", "Jogador": "Xadas", PMM: 11, MC: 3.27, Sw1: "🥈", Sw2: "6º", Sw3: "🥉", Bb1: "🥉", Bb2: "🥇", Bb3: "4º", Tr1: "4º", Tr2: "4º", Tr3: "🥉", Hg: "🥈", Pk: "4º", Pt: "+6" },
    { "#": "5º", "Jogador": "Lampreia", PMM: 5, MC: 4.72, Sw1: "7º", Sw2: "🥈", Sw3: "6º", Bb1: "🥈", Bb2: "5º", Bb3: "5º", Tr1: "🥉", Tr2: "6º", Tr3: "4º", Hg: "5º", Pk: "-", Pt: "+5" },
    { "#": "6º", "Jogador": "Cludos", PMM: 2, MC: 5.00, Sw1: "🥉", Sw2: "4º", Sw3: "4º", Bb1: "6º", Bb2: "6º", Bb3: "6º", Tr1: "6º", Tr2: "🥉", Tr3: "6º", Hg: "4º", Pk: "-", Pt: "+5" },
    { "#": "7º", "Jogador": "João Nuno", PMM: 0, MC: 6.54, Sw1: "6º", Sw2: "-", Sw3: "-", Bb1: "7º", Bb2: "7º", Bb3: "7º", Tr1: "7º", Tr2: "5º", Tr3: "5º", Hg: "-", Pk: "-", Pt: "+4" },
];

// 16 colunas -- a pagina mais larga do site. Os rotulos sao MAIUSCULAS mas as
// chaves sao Capitalizadas (SW1 -> Sw1): mais um caso para o par
// [rotulo, chave].
const COLUMNS = [
    ['#'],
    ['Jogador'],
    ['Pts', 'Pt'],
    ['PMM'],
    ['MC'],
    ['SW1', 'Sw1'], ['SW2', 'Sw2'], ['SW3', 'Sw3'],
    ['BB1', 'Bb1'], ['BB2', 'Bb2'], ['BB3', 'Bb3'],
    ['TR1', 'Tr1'], ['TR2', 'Tr2'], ['TR3', 'Tr3'],
    ['HG', 'Hg'],
    ['PK', 'Pk'],
];

const MinecraftMinigames = () => (
    <PageShell title="Rankings do Minecraft Minigames">
        <RankingTable columns={COLUMNS} rows={PLAYERS} />
        <Legend>
            <b>Pts</b> - Pontos Ganhos | <b>PMM</b> - Pontos Minecraft Minigames | <b>MC</b> - Média Classificativa | <b>SWn</b> - Sky Wars n | <b>BBn</b> - Build Battle n | <b>TRn</b> - TNT Run n | <b>HG</b> - Hunger Games | <b>PK</b> - Parkour
        </Legend>
    </PageShell>
);

export default MinecraftMinigames;
