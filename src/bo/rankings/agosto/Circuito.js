import React from 'react';
import PageShell from '../../../components/PageShell';
import RankingTable from '../../../components/RankingTable';

// Os nomes das equipas eram repetidos em 23 sitios: 3 <th> + 20 linhas de
// dados. Aqui sao declarados uma vez.
const EQUIPAS = ['Balance', 'Anjos Caídos', 'Faltou 3º Membro'];

// Dados dos jogadores
//
// NOTA: `Pts` (Pontos Circuito) e `Pt` (Pontos Ganhos) coexistem e significam
// coisas diferentes. E por isto que as chaves dos dados nao foram
// normalizadas: um rename Pt->Pts daria chave duplicada e perdia o Pts:45 em
// silencio. O par [rotulo, chave] resolve-o sem tocar nos objetos.
const PLAYERS = [
    { "#": "🥇", "Equipa": "Balance", "Membros": "Bárbara, Atlas & Geremias", "1º": 11, "2º": 3, "3º": 6, Pts: 45, Pt: "+13" },
    { "#": "🥈", "Equipa": "Anjos Caídos", "Membros": "Xadas, João Nuno & Braz", "1º": 6, "2º": 6, "3º": 8, Pts: 38, Pt: "+10" },
    { "#": "🥉", "Equipa": "Faltou 3º Membro", "Membros": "Wisdow & Areias", "1º": 4, "2º": 10, "3º": 6, Pts: 38, Pt: "+8" },
];

const COLUMNS = [
    ['#'],
    ['Equipa'],
    ['Membros'],
    ['🥇', '1º'],
    ['🥈', '2º'],
    ['🥉', '3º'],
    ['Pontos Circuito', 'Pts'],
    ['Pontos Ganhos', 'Pt'],
];

const JOGOS = [
    { jogo: "Gravidade Zero", "Balance": "🥇", "Anjos Caídos": "🥉", "Faltou 3º Membro": "🥈" },
    { jogo: "Sanguessuga", "Balance": "🥈", "Anjos Caídos": "🥇", "Faltou 3º Membro": "🥉" },
    { jogo: "Bottle Flip", "Balance": "🥈", "Anjos Caídos": "🥇", "Faltou 3º Membro": "🥉" },
    { jogo: "Corrida de Corda e o Badalo", "Balance": "🥇", "Anjos Caídos": "🥉", "Faltou 3º Membro": "🥈" },
    { jogo: "Percurso Banana e Laranja", "Balance": "🥉", "Anjos Caídos": "🥈", "Faltou 3º Membro": "🥇" },
    { jogo: "Derrubar torre de latas com elásticos", "Balance": "🥇", "Anjos Caídos": "🥉", "Faltou 3º Membro": "🥇" },
    { jogo: "Separar m&m por cores", "Balance": "🥇", "Anjos Caídos": "🥈", "Faltou 3º Membro": "🥉" },
    { jogo: "Sprint Final", "Balance": "🥇", "Anjos Caídos": "🥉", "Faltou 3º Membro": "🥈" },
    { jogo: "Pirâmide de Copos", "Balance": "🥈", "Anjos Caídos": "🥇", "Faltou 3º Membro": "🥉" },
    { jogo: "Jogo da Bolacha", "Balance": "🥉", "Anjos Caídos": "🥈", "Faltou 3º Membro": "🥇" },
    { jogo: "Derrubar copos com o sopro do balão", "Balance": "🥇", "Anjos Caídos": "🥉", "Faltou 3º Membro": "🥈" },
    { jogo: "Procurar uvas na farinha", "Balance": "🥇", "Anjos Caídos": "🥉", "Faltou 3º Membro": "🥈" },
    { jogo: "Corrida da colher e os ovos", "Balance": "🥇", "Anjos Caídos": "🥉", "Faltou 3º Membro": "🥈" },
    { jogo: "Catapulta de colheres", "Balance": "🥉", "Anjos Caídos": "🥇", "Faltou 3º Membro": "🥈" },
    { jogo: "Puzzle de cereais", "Balance": "🥇", "Anjos Caídos": "🥈", "Faltou 3º Membro": "🥉" },
    { jogo: "Corrida dos pés atados", "Balance": "🥉", "Anjos Caídos": "🥇", "Faltou 3º Membro": "🥈" },
    { jogo: "Tirar as bolas da caixa", "Balance": "🥉", "Anjos Caídos": "🥈", "Faltou 3º Membro": "🥇" },
    { jogo: "Crossbar challenge", "Balance": "🥉", "Anjos Caídos": "🥇", "Faltou 3º Membro": "🥈" },
    { jogo: "Encesta os copos", "Balance": "🥇", "Anjos Caídos": "🥈", "Faltou 3º Membro": "🥉" },
    { jogo: "Batalha de empilhar copos", "Balance": "🥇", "Anjos Caídos": "🥉", "Faltou 3º Membro": "🥈" },
];

const JOGOS_COLUMNS = [['Nº', (_, i) => i + 1], ['Jogo', 'jogo'], ...EQUIPAS.map((e) => [e])];

const Circuito = () => (
    <PageShell title="Rankings do Circuito">
        <RankingTable columns={COLUMNS} rows={PLAYERS} />
        <h2 className="section-title">Tabela de Jogos do Circuito</h2>
        <RankingTable columns={JOGOS_COLUMNS} rows={JOGOS} />
    </PageShell>
);

export default Circuito;
