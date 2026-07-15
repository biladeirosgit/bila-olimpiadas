import React, { useState, useMemo } from 'react';
import './Rankings.css';
import rankingsjson from './rankings.json';
import PageShell from '../../components/PageShell';
import Avatar from '../../components/Avatar';
import { buildFiltersList, MONTHS, AMOUNTS, FORMATS } from '../../data/tournaments';

// A filtersList era 145 linhas hardcoded que re-listavam os 24 torneios 11
// vezes. Agora e derivada da fonte unica, e ha um teste que prova que a
// lista derivada e identica a original.
const filtersList = buildFiltersList();

const GRUPOS = [
    { chave: 'amount', opcoes: AMOUNTS },
    { chave: 'format', opcoes: FORMATS },
    { chave: 'months', opcoes: MONTHS },
];

const capitalizar = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const Rankings = () => {
    const [expandedPlayer, setExpandedPlayer] = useState(null);
    const [selectedSort, setSelectedSort] = useState('rank');

    // Antes, os filtros eram lidos do DOM com document.querySelectorAll, e os
    // <input> eram nao-controlados com o atributo `rel` a transportar o valor.
    // Agora sao estado. E equivalente: `concat` + `includes` e pertenca a
    // conjunto, logo a ordem dos cliques nunca afetou o resultado -- ha um
    // teste que o prova.
    const [filters, setFilters] = useState({ amount: [], format: [], months: [] });

    const toggle = (grupo, valor) =>
        setFilters((f) => ({
            ...f,
            [grupo]: f[grupo].includes(valor) ? f[grupo].filter((x) => x !== valor) : [...f[grupo], valor],
        }));

    const filteredTournaments = useMemo(() => {
        let torneios = filtersList.todos;
        GRUPOS.forEach(({ chave }) => {
            const selecionados = filters[chave];
            if (selecionados.length === 0) return;
            const permitidos = selecionados.flatMap((f) => filtersList[f]);
            torneios = torneios.filter((t) => permitidos.includes(t));
        });
        return torneios;
    }, [filters]);

    const rankedPlayers = useMemo(() => {
        const rankings = {};
        for (const player in rankingsjson) {
            const torneios = rankingsjson[player];
            rankings[player] = { pts: 0, pr: 0, '1º': 0, '2º': 0, '3º': 0 };
            for (const torneio in torneios) {
                if (!filteredTournaments.includes(torneio)) continue;
                const r = torneios[torneio];
                rankings[player].pr += 1;
                rankings[player].pts += r.Pontos;
                if ('Penalização' in r) rankings[player].pts += r['Penalização'];
                if (r.Lugar === '🥇') rankings[player]['1º'] += 1;
                else if (r.Lugar === '🥈') rankings[player]['2º'] += 1;
                else if (r.Lugar === '🥉') rankings[player]['3º'] += 1;
                rankings[player].mpp = parseFloat((rankings[player].pts / rankings[player].pr).toFixed(2));
            }
        }

        const sorted = Object.keys(rankings)
            .map((player) => ({ name: player, ...rankings[player] }))
            .sort((a, b) => {
                if (b.pts !== a.pts) return b.pts - a.pts;
                if (b.mpp !== a.mpp) return b.mpp - a.mpp;
                if (b['1º'] !== a['1º']) return b['1º'] - a['1º'];
                if (b['2º'] !== a['2º']) return b['2º'] - a['2º'];
                if (b['3º'] !== a['3º']) return b['3º'] - a['3º'];
                return 0;
            });

        // Empates: quem tem os mesmos pts/mpp/ouros partilha o lugar.
        let rank = 1;
        let prevPts = null;
        let prevMpp = null;
        let prevTg = null;
        const comRank = sorted.map((player, index) => {
            if (prevPts !== player.pts || prevMpp !== player.mpp || prevTg !== player['1º']) {
                rank = index + 1;
            }
            prevPts = player.pts;
            prevMpp = player.mpp;
            prevTg = player['1º'];
            return { rank, ...player };
        });

        // [...] em vez de sort() direto: o original mutava o array in-place.
        return selectedSort === 'rank'
            ? [...comRank].sort((a, b) => a.rank - b.rank)
            : [...comRank].sort((a, b) => b[selectedSort] - a[selectedSort]);
    }, [filteredTournaments, selectedSort]);

    const togglePlayerDetails = (name) => setExpandedPlayer((cur) => (cur === name ? null : name));

    return (
        <PageShell title="Ranking Geral">
            <div className="filters">
                {GRUPOS.map(({ chave, opcoes }) => (
                    <div className={chave} key={chave}>
                        {opcoes.map((opcao) => (
                            <label className="lns-checkbox" key={opcao}>
                                <input
                                    type="checkbox"
                                    rel={opcao}
                                    checked={filters[chave].includes(opcao)}
                                    onChange={() => toggle(chave, opcao)}
                                />
                                <span>{capitalizar(opcao)}</span>
                            </label>
                        ))}
                    </div>
                ))}
            </div>

            <div className="sort-row">
                <label htmlFor="sort">Ordenar por</label>
                <select
                    id="sort"
                    className="sort"
                    value={selectedSort}
                    onChange={(e) => setSelectedSort(e.target.value)}
                >
                    <option value="rank">Rank</option>
                    <option value="pts">Pontos</option>
                    <option value="pr">Participações</option>
                    <option value="mpp">Média Pontos por Torneio</option>
                    <option value="1º">🥇</option>
                    <option value="2º">🥈</option>
                    <option value="3º">🥉</option>
                </select>
                <span className="sort-count">
                    {filteredTournaments.length} de {filtersList.todos.length} torneios
                </span>
            </div>

            <div className="table-scroll">
                <table className="ranking-table">
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Player</th>
                            <th>Pontos</th>
                            <th>Participações</th>
                            <th>Média Pontos por Torneio</th>
                            <th>🥇</th>
                            <th>🥈</th>
                            <th>🥉</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rankedPlayers.map((player) => (
                            <React.Fragment key={player.name}>
                                <tr className="player-row" onClick={() => togglePlayerDetails(player.name)}>
                                    <td>{player.rank}</td>
                                    <td>
                                        <div className="player-cell">
                                            <Avatar name={player.name} />
                                            <span>{player.name}</span>
                                        </div>
                                    </td>
                                    <td className="cell-pts">{player.pts}</td>
                                    <td>{player.pr}</td>
                                    <td>{player.mpp}</td>
                                    <td>{player['1º']}</td>
                                    <td>{player['2º']}</td>
                                    <td>{player['3º']}</td>
                                </tr>
                                {expandedPlayer === player.name && (
                                    <tr>
                                        <td colSpan="8">
                                            <div className="player-details">
                                                <h5>Participações</h5>
                                                <div className="participacoes">
                                                    {Object.keys(rankingsjson[player.name])
                                                        .filter((t) => filteredTournaments.includes(t))
                                                        .map((torneio) => {
                                                            const r = rankingsjson[player.name][torneio];
                                                            return (
                                                                <div className="participacao" key={torneio}>
                                                                    <p className="p-torneio">{torneio}</p>
                                                                    <p>
                                                                        <b>Lugar:</b> {r.Lugar} · <b>Pontos:</b> {r.Pontos}
                                                                    </p>
                                                                    {r['Penalização'] && (
                                                                        <p className="p-penalizacao">
                                                                            <b>Penalização:</b> {r['Penalização']} (
                                                                            {r['Penalização Justificativa']})
                                                                        </p>
                                                                    )}
                                                                </div>
                                                            );
                                                        })}
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
        </PageShell>
    );
};

export default Rankings;
