import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import rankingsjson from './rankings/rankings.json';
import { TOURNAMENTS, MONTHS } from '../data/tournaments';
import Avatar from '../components/Avatar';
import { heroLogoSrc } from '../utils/images';
import './BilaOlimpiadasPage.css';

// Tudo o que esta pagina mostra sai do rankings.json em runtime -- nao ha um
// unico numero escrito a mao.
const computar = () => {
    let participacoes = 0;
    let pontos = 0;
    const medalhas = { '🥇': 0, '🥈': 0, '🥉': 0 };
    const porJogador = {};

    Object.entries(rankingsjson).forEach(([nome, torneios]) => {
        porJogador[nome] = { nome, pts: 0, ouros: 0, participacoes: 0 };
        Object.values(torneios).forEach((r) => {
            // Lugar "-" e quem nao participou (ou foi penalizado por faltar).
            if (r.Lugar !== '-') {
                participacoes += 1;
                porJogador[nome].participacoes += 1;
            }
            const p = r.Pontos + (r['Penalização'] || 0);
            pontos += p;
            porJogador[nome].pts += p;
            if (r.Lugar in medalhas) {
                medalhas[r.Lugar] += 1;
                if (r.Lugar === '🥇') porJogador[nome].ouros += 1;
            }
        });
    });

    const jogadores = Object.values(porJogador);
    return {
        participacoes,
        pontos,
        medalhas,
        totalMedalhas: medalhas['🥇'] + medalhas['🥈'] + medalhas['🥉'],
        nJogadores: jogadores.length,
        podio: [...jogadores].sort((a, b) => b.pts - a.pts).slice(0, 3),
        maisOuros: [...jogadores].sort((a, b) => b.ouros - a.ouros).slice(0, 5),
        porMes: MONTHS.map((mes) => ({ mes, n: TOURNAMENTS.filter((t) => t.month === mes).length })),
    };
};

const BilaOlimpiadasPage = () => {
    const s = useMemo(computar, []);
    const maxMes = Math.max(...s.porMes.map((m) => m.n));

    const kpis = [
        [TOURNAMENTS.length, 'Torneios'],
        [s.nJogadores, 'Jogadores'],
        [s.participacoes, 'Participações'],
        [s.pontos.toLocaleString('pt-PT'), 'Pontos'],
        [s.totalMedalhas, 'Medalhas'],
        [MONTHS.length, 'Meses'],
    ];

    return (
        <main className="home">
            <section className="hero" style={{ backgroundImage: `url("${heroLogoSrc()}")` }}>
                <div className="hero-content">
                    <p className="hero-eyebrow">Edição de 2024</p>
                    <h1 className="hero-title">Bila-Olimpíadas</h1>
                    <p className="hero-sub">
                        {TOURNAMENTS.length} torneios, {s.nJogadores} jogadores, de março a outubro.
                    </p>
                    <Link to="/rankings" className="hero-cta">
                        Ver Ranking Geral
                    </Link>
                </div>
            </section>

            <div className="kpi-grid">
                {kpis.map(([valor, rotulo]) => (
                    <div className="kpi-tile" key={rotulo}>
                        <span className="kpi-value">{valor}</span>
                        <span className="kpi-label">{rotulo}</span>
                    </div>
                ))}
            </div>

            <div className="insight-grid">
                <div className="insight-card insight-highlight">
                    <h2>Pódio geral</h2>
                    <ol className="podio">
                        {s.podio.map((p, i) => (
                            <li key={p.nome}>
                                <span className="podio-medalha">{['🥇', '🥈', '🥉'][i]}</span>
                                <Avatar name={p.nome} size="sm" />
                                <span className="podio-nome">{p.nome}</span>
                                <strong>{p.pts}</strong>
                            </li>
                        ))}
                    </ol>
                </div>

                <div className="insight-card">
                    <h2>Mais ouros</h2>
                    <ol className="ranking-list">
                        {s.maisOuros.map((p) => (
                            <li key={p.nome}>
                                <span>{p.nome}</span>
                                <strong>{p.ouros} 🥇</strong>
                            </li>
                        ))}
                    </ol>
                </div>

                <div className="insight-card">
                    <h2>Torneios por mês</h2>
                    <div className="bars">
                        {s.porMes.map(({ mes, n }) => (
                            <div className="bar-row" key={mes}>
                                <span className="bar-label">{mes}</span>
                                <div className="bar-track">
                                    <div className="bar-fill" style={{ width: `${(n / maxMes) * 100}%` }} />
                                </div>
                                <span className="bar-count">{n}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="insight-card">
                    <h2>Medalhas distribuídas</h2>
                    <ol className="ranking-list">
                        {[
                            ['🥇 Ouro', s.medalhas['🥇']],
                            ['🥈 Prata', s.medalhas['🥈']],
                            ['🥉 Bronze', s.medalhas['🥉']],
                        ].map(([rotulo, n]) => (
                            <li key={rotulo}>
                                <span>{rotulo}</span>
                                <strong>{n}</strong>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </main>
    );
};

export default BilaOlimpiadasPage;
