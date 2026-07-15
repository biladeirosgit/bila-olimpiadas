import React from 'react';
import PageShell, { Legend } from '../../../components/PageShell';
import RankingTable from '../../../components/RankingTable';

const PLAYERS = [
    { "#": "🥇", Membros: "Wisdow, Geremias, Cludos, Squnha, Mestre Gui, Camilo, Sardoal", Pt: "+8", T: "46 min e 6 seg" },
    { "#": "🥈", Membros: "Xadas, Bárbara, João Nuno, Braz, Gama", Pt: "+4", T: "58 min e 26 seg" },
];

// A coluna "Nome" saiu: o <th> existia e o <td> renderizava {player.Nome}, mas
// os dados nunca tiveram essa chave -- a coluna aparecia vazia em todas as
// linhas, no site em producao.
const COLUMNS = [['#'], ['Membros'], ['Pts', 'Pt'], ['T']];

const EscapeRoom = () => (
    <PageShell title="Rankings do EscapeRoom">
        <RankingTable columns={COLUMNS} rows={PLAYERS} />
        <Legend>
            <b>Pts</b> - Pontos Ganhos | <b>T</b> - Tempo
        </Legend>
    </PageShell>
);

export default EscapeRoom;
