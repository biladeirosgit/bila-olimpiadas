import React from 'react';
import PageShell, { Legend } from '../../../components/PageShell';
import RankingTable from '../../../components/RankingTable';
import Bracket from '../../../components/Bracket';
import { teamSrc } from '../../../utils/images';

const PLAYERS = [
    { "#": "🥇", Nome: "omnimommy", "Membros": "Frost, Omniomm, Lekky, Madmess e Zé Afonso", Pt: "+8", R: "3-1" },
    { "#": "🥈", Nome: "Chega do Hydra", "Membros": "Russo, Gama, Cludos, Hydra e Wisdow", Pt: "+6", R: "2-1" },
    { "#": "🥉", Nome: "Queremos Waffles Quentes", "Membros": "Lemos, Gelly, Rodry, Squnha e João Nuno", Pt: "+4", R: "1-2" },
    { "#": "4º", Nome: "Torres do Frazão", "Membros": "Geremias, Mestre Gui, Xadas, Areias e Frazão", Pt: "+2", R: "0-2" },
];

// Celula custom: logo da equipa + nome. E o acessor-funcao do RankingTable.
const TeamCell = ({ name }) => (
    <div className="team-cell">
        <img src={teamSrc(name)} alt={name} loading="lazy" />
        <span>{name}</span>
    </div>
);

const COLUMNS = [
    ['#'],
    ['Nome', (row) => <TeamCell name={row.Nome} />],
    ['Membros'],
    ['Pts', 'Pt'],
    ['R'],
];

const LOL5x5 = () => (
    <PageShell title="Rankings do League of Legends 5x5">
        <RankingTable columns={COLUMNS} rows={PLAYERS} />
        <Legend>
            <b>Pts</b> - Pontos Ganhos | <b>J</b> - Jogos | <b>R</b> - Resultados
        </Legend>
        <Bracket title="LeagueOfLegends 5x5" src="https://challonge.com/pt/ypdqmny0/module" />
    </PageShell>
);

export default LOL5x5;
