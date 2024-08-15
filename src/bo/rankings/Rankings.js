import React, { useState, useEffect } from 'react';
import './Rankings.css';
import Navebar from './../Navebar';
import Footer from './../Footer';
import rankingsjson from "./rankings.json";

const Rankings = () => {

    const [expandedPlayer, setExpandedPlayer] = useState(null);
    const [rankedPlayers, setRankedPlayers] = useState(null);
    const [amountFilters, setAmountFilters] = useState([])
    const [formatFilters, setFormatFilters] = useState([])
    const [monthFilters, setMonthFilters] = useState([])
    const [filteredTournaments, setFilteredTournaments] = useState([])

    const filtersList = {
        "todos" : [
            "Bilatrecos",
            "Teamfight Tactics",
            "Futbiladas",
            "League of Legends 5x5",
            "Rocket League 3x3",
            "Sueca",
            "Scribbl.io",
            "Brawlhalla",
            "Bilabilhar",
            "CounterStrike 2",
            "Basquetiladas",
            "Overwatch 2",
            "AmongUs",
            "EscapeRoom",
            "Bilapredicts Europeu 2024",
            "Arenas LoL",
            "Ping Pong",
            "Volleyball",
            "Business Tour",
            "Circuito",
            "DeadByDaylight"
        ],

        "março" : [
            "Bilatrecos",
            "Teamfight Tactics",
            "Futbiladas",
            "League of Legends 5x5",
        ],

        "abril" : [
            "Rocket League 3x3",
            "Sueca",
            "Scribbl.io",
        ],

        "maio" : [
            "Brawlhalla",
            "Bilabilhar",
            "CounterStrike 2",
        ],

        "junho" : [
            "Basquetiladas",
            "Overwatch 2",
            "AmongUs",
            "EscapeRoom",
            "Bilapredicts Europeu 2024",
        ],

        "julho" : [
            "Arenas LoL",
            "Ping Pong",
            "Volleyball"
        ],

        "agosto" : [
            "Business Tour",
            "Circuito",
            "DeadByDaylight"
        ],
        
        "duos" : [
            "Bilatrecos",
            "Sueca",
            "Bilabilhar",
            "Arenas LoL"
        ],

        "trios" : [
            "Basquetiladas",
            "Rocket League 3x3",
            "Volleyball",
            "Circuito"
        ],
        
        "grupo" : [
        
            "Futbiladas",
            "League of Legends 5x5",
            "CounterStrike 2",
            "Overwatch 2",
            "EscapeRoom",
            "DeadByDaylight"
        ],
        
        
        "individual" : [
            "Teamfight Tactics",
            "Scribbl.io",
            "Brawlhalla",
            "AmongUs",
            "Bilapredicts Europeu 2024",
            "Ping Pong",
            "Business Tour"
        ],
        
        
        "online" : [
            "Teamfight Tactics",
            "League of Legends 5x5",
            "Scribbl.io",
            "Rocket League 3x3",
            "Brawlhalla",
            "CounterStrike 2",
            "Overwatch 2",
            "AmongUs",
            "Bilapredicts Europeu 2024",
            "Arenas LoL",
            "Business Tour",
            "DeadByDaylight"
        ],
        
        
        "presencial" : [
            "Bilatrecos",
            "Futbiladas",
            "Sueca",
            "Bilabilhar",
            "Basquetiladas",
            "EscapeRoom",
            "Ping Pong",
            "Volleyball",
            "Circuito"
        ]
    }


    const togglePlayerDetails = (playerName) => {
        if (expandedPlayer === playerName) {
            setExpandedPlayer(null);
        } else {
            setExpandedPlayer(playerName);
        }
    };

    
    
    const getPlayers = () => {
        var rankings = {}
        var filteredTournamentsAux = filtersList["todos"]
        var listAmount = []
        var listFormat = []
        var listMonth = []
        amountFilters.forEach(filter => {
            listAmount = listAmount.concat(filtersList[filter]);
        })
        formatFilters.forEach(filter => {
            listFormat = listFormat.concat(filtersList[filter]);
        })
        monthFilters.forEach(filter => {
            listMonth = listMonth.concat(filtersList[filter]);
        })

        if(listAmount.length !== 0){
            filteredTournamentsAux = filteredTournamentsAux.filter(item => listAmount.includes(item))
        }
        if(listFormat.length !== 0){
            filteredTournamentsAux = filteredTournamentsAux.filter(item => listFormat.includes(item))
        }
        if(listMonth.length !== 0){
            filteredTournamentsAux = filteredTournamentsAux.filter(item => listMonth.includes(item))
        }
        setFilteredTournaments(filteredTournamentsAux);
        for (var player in rankingsjson){
            var torneios = rankingsjson[player]
            rankings[player] = {
                "pts" : 0,
                "pr" : 0,
                "1º" : 0,
                "2º" : 0,
                "3º" : 0,
                "torneios" : []
            }
            for (var torneio in torneios){
                if (filteredTournamentsAux.includes(torneio)){
                    rankings[player]["pr"] += 1
                    rankings[player]["pts"] += torneios[torneio]["Pontos"]
                    if ("Penalização" in torneios[torneio]) {
                        rankings[player]["pts"] += torneios[torneio]["Penalização"]
                    }
                    if (torneios[torneio]["Lugar"] === "🥇"){
                        rankings[player]["1º"] += 1
                    }
                    else if(torneios[torneio]["Lugar"] === "🥈"){
                        rankings[player]["2º"] += 1
                    }
                    else if(torneios[torneio]["Lugar"] === "🥉"){
                        rankings[player]["3º"] += 1
                    }
                    rankings[player]["mpp"] = rankings[player]["pts"] / rankings[player]["pr"]
                    rankings[player]["mpp"] = parseFloat(rankings[player]["mpp"].toFixed(2))
                }
            }
        }
        const sortedPlayers = Object.keys(rankings).map(player => {
            return { name: player, ...rankings[player] }
        }).sort((a, b) => {
            if (b.pts !== a.pts) return b.pts - a.pts;
            if (b.mpp !== a.mpp) return b.mpp - a.mpp;
            if (b["1º"] !== a["1º"]) return b["1º"] - a["1º"];
            if (b["2º"] !== a["2º"]) return b["2º"] - a["2º"];
            if (b["3º"] !== a["3º"]) return b["3º"] - a["3º"];
            return 0;
        });

        return sortedPlayers;
    }
    

    // Function to calculate rankings considering ties
    const getRankingsWithTies = () => {
        const players = getPlayers();
        let rank = 1;
        let previousPts = null;
        let previousMpp = null;
        let previousTg = null;
        return players.map((player, index) => {
            if (previousPts !== player.pts || previousMpp !== player.mpp || previousTg !== player["1º"]) {
                rank = index + 1;
            }
            previousPts = player.pts;
            previousMpp = player.mpp;
            previousTg = player["1º"];
            return { rank, ...player };
        });
    };

    function getClassOfCheckedCheckboxes(checkboxes) {
        var classes = [];
      
        if (checkboxes && checkboxes.length > 0) {
          for (var i = 0; i < checkboxes.length; i++) {
            var cb = checkboxes[i];
      
            if (cb.checked) {
              classes.push(cb.getAttribute("rel"));
            }
          }
        }
      
        return classes;
      }

    function change() {
        var amountFilters = document.querySelectorAll(".amount input[type='checkbox']");
        var formatFilters = document.querySelectorAll(".format input[type='checkbox']");
        var monthFilters = document.querySelectorAll(".months input[type='checkbox']");
        amountFilters = getClassOfCheckedCheckboxes(amountFilters);
        formatFilters = getClassOfCheckedCheckboxes(formatFilters);
        monthFilters = getClassOfCheckedCheckboxes(monthFilters);
        setAmountFilters(amountFilters);
        setFormatFilters(formatFilters);
        setMonthFilters(monthFilters);
    }

    useEffect(() => {
        setRankedPlayers(getRankingsWithTies());
    }, []);

    useEffect(() => {
        setRankedPlayers(getRankingsWithTies());
    }, [amountFilters,formatFilters,monthFilters])

    return (
        <div>
            <Navebar />
            <div className="w3-container w3-light-gray" style={{textAlign:"center"}}>
                <div className="w3-container w3-center" style={{width:"60%",display:"inline-block"}}>
                    <div className="filters">
                        <div className="amount">
                            <div className="lns-checkbox">
                              <label><input type="checkbox" rel="individual" onChange={change} /><span>Individual</span></label>
                            </div>
                            <div className="lns-checkbox">
                              <label><input type="checkbox" rel="duos" onChange={change} /><span>Duos</span></label>
                            </div>
                            <div className="lns-checkbox">
                              <label><input type="checkbox" rel="trios" onChange={change} /><span>Trios</span></label>
                            </div>
                            <div className="lns-checkbox">
                              <label><input type="checkbox" rel="grupo" onChange={change} /><span>Grupo</span></label>
                            </div>
                        </div>
                        <div className="format">
                            <div className="lns-checkbox">
                              <label><input type="checkbox" rel="online" onChange={change} /><span>Online</span></label>
                            </div>
                            <div className="lns-checkbox">
                              <label><input type="checkbox" rel="presencial" onChange={change} /> <span>Presencial</span></label>
                            </div>
                        </div>
                        <div className="months">
                            <div className="lns-checkbox">
                              <label><input type="checkbox" rel="março" onChange={change} /><span>Março</span></label>
                            </div>
                            <div className="lns-checkbox">
                              <label><input type="checkbox" rel="abril" onChange={change} /> <span>Abril</span></label>
                            </div>
                            <div className="lns-checkbox">
                              <label><input type="checkbox" rel="maio" onChange={change} /> <span>Maio</span></label>
                            </div>
                            <div className="lns-checkbox">
                              <label><input type="checkbox" rel="junho" onChange={change} /> <span>Junho</span></label>
                            </div>
                            <div className="lns-checkbox">
                              <label><input type="checkbox" rel="julho" onChange={change} /> <span>Julho</span></label>
                            </div>
                            <div className="lns-checkbox">
                              <label><input type="checkbox" rel="agosto" onChange={change} /> <span>Agosto</span></label>
                            </div>
                        </div>
                        
                    </div>
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
                                    <th>🥇</th>
                                    <th>🥈</th>
                                    <th>🥉</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rankedPlayers && rankedPlayers.map(player => (
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
                                            <td>{player["1º"]}</td>
                                            <td>{player["2º"]}</td>
                                            <td>{player["3º"]}</td>
                                        </tr>
                                        {expandedPlayer === player.name && rankingsjson[player.name] && Object.keys(rankingsjson[player.name]).length > 0 && (
                                            <tr>
                                                <td colSpan="8">
                                                    <div className="player-details">
                                                        <h5 key={player.name}><b>Participações</b></h5>
                                                        {Object.keys(rankingsjson[player.name]).map(torneio => (
                                                            filteredTournaments.includes(torneio) && (<>
                                                                <p><b>Torneio: </b>{torneio}</p>
                                                                <p><b>Lugar: </b>{rankingsjson[player.name][torneio]["Lugar"]}</p>
                                                                <p><b>Pontos Ganhos: </b>{rankingsjson[player.name][torneio]["Pontos"]}</p>
                                                                {rankingsjson[player.name][torneio]["Penalização"] && (
                                                                    <p><b>Penalização:</b> {rankingsjson[player.name][torneio]["Penalização"]} ({rankingsjson[player.name][torneio]["Penalização Justificativa"]}) </p>
                                                                )}
                                                                <br></br>
                                                            </>)                                                        ))}
                                                    </div>
                                                </td>
                                            </tr>
                                        )}
                                        {expandedPlayer === player.name && (!rankingsjson[player.name] && Object.keys(rankingsjson[player.name]).length === 0) && (
                                            <tr>
                                                <td colSpan="8">
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

export default Rankings;
