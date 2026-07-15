import React from 'react';
import PageShell, { Legend } from '../../../components/PageShell';
import RankingTable from '../../../components/RankingTable';

const PLAYERS = [
    { "#": "🥇", Nome: "Os Cubas", Membros: "Esquilo, Serino & Zé", Pt: "+8", R: "2-0" },
    { "#": "🥈", Nome: "Os Caceteiros", Membros: "Xadas, Bárbara & Braz", Pt: "+6", R: "1-1" },
    { "#": "🥉", Nome: "Os Primos do Pedro", Membros: "Cludos, Squnha & Diogo", Pt: "+4", R: "0-2" },
];

// A chave `Nome` existe nos dados mas nunca teve coluna: o RankingTable
// renderiza so o que a spec declara, tal como antes.
const COLUMNS = [['#'], ['Membros'], ['Pts', 'Pt'], ['R']];

const JOGOS = [
    { casa: 'Os Cubas', resultado: '11 - 5', fora: 'Os Caceiteiros' },
    { casa: 'Os Cubas', resultado: '11 - 7', fora: 'Os Primos do Pedro' },
    { casa: 'Os Caceiteiros', resultado: '3 - 1', fora: 'Os Primos do Pedro' },
];

const JOGOS_COLUMNS = [['', 'casa'], ['Resultado', 'resultado'], ['', 'fora']];

const Basquetiladas = () => (
    <PageShell title="Rankings do Basquetiladas">
        <RankingTable columns={COLUMNS} rows={PLAYERS} />
        <Legend>
            <b>Pts</b> - Pontos Ganhos | <b>R</b> - Resultados
        </Legend>
        <RankingTable columns={JOGOS_COLUMNS} rows={JOGOS} />
    </PageShell>
);

export default Basquetiladas;
