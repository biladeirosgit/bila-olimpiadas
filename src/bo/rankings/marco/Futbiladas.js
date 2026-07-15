import React from 'react';
import PageShell from '../../../components/PageShell';
import RankingTable from '../../../components/RankingTable';

// Esta pagina e o unico outlier do site: nao e um ranking, e o relato de um
// jogo. Nao tinha objetos de dados nenhuns -- eram 48 celulas escritas a mao,
// um <tr> por golo, sem .map(). Aqui os dados passam a existir; os valores
// foram transcritos um a um e o golden test prova que nenhum se perdeu.

const GOLOS = [
    { casa: '', resultado: '7-9', fora: 'Golo Filipe' },
    { casa: '', resultado: '7-8', fora: 'Golo Cunha' },
    { casa: 'Golo Hydra', resultado: '7-7', fora: '' },
    { casa: '', resultado: '6-7', fora: 'Golo Filipe' },
    { casa: '', resultado: '6-6', fora: 'Golo Filipe' },
    { casa: '', resultado: '6-5', fora: 'Golo Sardoal' },
    { casa: 'Golo Costa', resultado: '6-4', fora: '' },
    { casa: '', resultado: '5-4', fora: 'Golo Esquilo' },
    { casa: 'Golo Serino', resultado: '5-3', fora: '' },
    { casa: '', resultado: '4-3', fora: 'Golo Sardoal' },
    { casa: 'Golo Serino', resultado: '4-2', fora: '' },
    { casa: 'Golo Areias', resultado: '3-2', fora: '' },
    { casa: '', resultado: '2-2', fora: 'Golo Sardoal' },
    { casa: '', resultado: '2-1', fora: 'Golo Xadas' },
    { casa: 'Golo Serino', resultado: '2-0', fora: '' },
    { casa: 'Golo Serino', resultado: '1-0', fora: '' },
];

const GOLOS_COLUMNS = [
    ['+17 F.C', 'casa'],
    ['Resultado', 'resultado'],
    ['Liverpool F.C', 'fora'],
];

const PLANTEIS = [
    { casa: 'Cludos', fora: 'Wisdow' },
    { casa: 'Serino', fora: 'Filipe' },
    { casa: 'Areias', fora: 'Sardoal' },
    { casa: 'João Nuno', fora: 'Xadas' },
    { casa: 'Tone', fora: 'Rodry' },
    { casa: 'Hydra', fora: 'Lemos' },
    { casa: 'Rui', fora: 'Geremias' },
    { casa: 'Bárbara', fora: 'Braz' },
    { casa: 'Costa', fora: 'Squnha' },
    { casa: 'Zé Afonso', fora: 'Esquilo' },
];

const PLANTEIS_COLUMNS = [
    ['Plantel +17 F.C', 'casa'],
    ['Plantel Liverpool F.C', 'fora'],
];

const PONTOS = [
    { equipa: 'Liverpool F.C.', pontos: '+8 pts' },
    { equipa: '+17 F.C.', pontos: '+4 pts' },
];

const PONTOS_COLUMNS = [['Equipas', 'equipa'], ['Pontos Ganhos', 'pontos']];

const Futbiladas = () => (
    <PageShell title="Futbiladas">
        <h2 className="section-title">+17 F.C 7 - 9 Liverpool F.C</h2>
        <RankingTable columns={GOLOS_COLUMNS} rows={GOLOS} />
        <RankingTable columns={PLANTEIS_COLUMNS} rows={PLANTEIS} />
        <RankingTable columns={PONTOS_COLUMNS} rows={PONTOS} />
    </PageShell>
);

export default Futbiladas;
