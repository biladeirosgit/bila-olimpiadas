import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Rankings.css';
import Navebar from '../Navebar';
import Footer from '../Footer';
import rankingsjson from "./rankings.json";

const RankingsGrupo = () => {

    const [expandedPlayer, setExpandedPlayer] = useState(null);

    const grupo = ["Bilatrecos","Futbiladas","League of Legends 5x5","Bilabilhar","Basquetiladas","CounterStrike 2","Overwatch 2"]


    const togglePlayerDetails = (playerName) => {
        if (expandedPlayer === playerName) {
            setExpandedPlayer(null);
        } else {
            setExpandedPlayer(playerName);
        }
    };

    var rankings = {}
    
    for (var player in rankingsjson){
        var torneios = rankingsjson[player]
        rankings[player] = {
            "pts" : 0,
            "pr" : 0,
            "tg" : 0,
            "torneios" : []
        }
        for (var torneio in torneios){
            if (grupo.includes(torneio)){
                rankings[player]["pr"] += 1
                rankings[player]["pts"] += torneios[torneio]["Pontos"]
                if ("Penalização" in torneios[torneio]) {
                    rankings[player]["pts"] += torneios[torneio]["Penalização"]
                }
                if (torneios[torneio]["Lugar"] === "1º"){
                    rankings[player]["tg"] += 1
                }
                rankings[player]["mpp"] = rankings[player]["pts"] / rankings[player]["pr"]
                rankings[player]["mpp"] = parseFloat(rankings[player]["mpp"].toFixed(2))
            }
        }
    }

    // Convert object to array and sort it
    const sortedPlayers = Object.keys(rankings).map(player => {
        return { name: player, ...rankings[player] }
    }).sort((a, b) => {
        if (b.pts !== a.pts) return b.pts - a.pts;
        if (b.mpp !== a.mpp) return b.mpp - a.mpp;
        if (b.tg !== a.tg) return b.tg - a.tg;
        return 0;
    });

    // Function to calculate rankings considering ties
    const getRankingsWithTies = (players) => {
        let rank = 1;
        let previousPts = null;
        let previousMpp = null;
        let previousTg = null;
        return players.map((player, index) => {
            if (previousPts !== player.pts || previousMpp !== player.mpp || previousTg !== player.tg) {
                rank = index + 1;
            }
            previousPts = player.pts;
            previousMpp = player.mpp;
            previousTg = player.tg;
            return { rank, ...player };
        });
    };

    const rankedPlayers = getRankingsWithTies(sortedPlayers);

    return (
        <div>
            <Navebar />
            <div className="w3-container w3-light-gray" style={{textAlign:"center"}}>
                <div className="w3-container w3-center" style={{width:"60%",display:"inline-block"}}>
                    <h1 className="w3-center">Ranking Geral</h1>
                    <div className="rankings-container">
                        <table className="rankings-table w3-table w3-centered w3-table-all w3-hoverable">
                            <thead>
                                <tr>
                                    <th>Rank</th>
                                    <th>Player</th>
                                    <th>Pontos</th>
                                    <th>Participações</th>
                                    <th>Média Pontos por Torneio</th>
                                    <th>Torneios Ganhos</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rankedPlayers.map(player => (
                                    <React.Fragment key={player.name}>
                                        <tr onClick={() => togglePlayerDetails(player.name)} style={{cursor: 'pointer'}}>
                                            <td>{player.rank}</td>
                                            <td>
                                                <div style={{display:"block"}}>
                                                <img 
                                                    src={`images/${player.name}.png`} 
                                                    alt={player.name} 
                                                    className="player-image"
                                                    style={{width:"50px",borderRadius:"50%"}}
                                                />
                                                <p>{player.name}</p>
                                                </div>
                                            </td>
                                            <td>{player.pts}</td>
                                            <td>{player.pr}</td>
                                            <td>{player.mpp}</td>
                                            <td>{player.tg}</td>
                                        </tr>
                                        {expandedPlayer === player.name && rankingsjson[player.name] && Object.keys(rankingsjson[player.name]).length > 0 && (
                                            <tr>
                                                <td colSpan="6">
                                                    <div className="player-details">
                                                        <h5 key={torneio}><b>Participações</b></h5>
                                                        {Object.keys(rankingsjson[player.name]).map(torneio => (
                                                            <>
                                                                <p><b>Torneio: </b>{torneio}</p>
                                                                <p><b>Lugar: </b>{rankingsjson[player.name][torneio]["Lugar"]}</p>
                                                                <p><b>Pontos Ganhos: </b>{rankingsjson[player.name][torneio]["Pontos"]}</p>
                                                                {rankingsjson[player.name][torneio]["Penalização"] && (
                                                                    <p><b>Penalização:</b> {rankingsjson[player.name][torneio]["Penalização"]} ({rankingsjson[player.name][torneio]["Penalização Justificativa"]}) </p>
                                                                )}
                                                                <br></br>
                                                            </>                                                        ))}
                                                    </div>
                                                </td>
                                            </tr>
                                        )}
                                        {expandedPlayer === player.name && (!rankingsjson[player.name] && Object.keys(rankingsjson[player.name]).length == 0) && (
                                            <tr>
                                                <td colSpan="6">
                                                    <div className="player-details">
                                                        <p>O jogador não tem torneios registrados.</p>
                                                    </div>
                                                </td>
                                            </tr>
                                        )}
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
            <Footer />
        </div>
    );
}

export default RankingsGrupo;
