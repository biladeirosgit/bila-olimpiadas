import Navebar from "../../Navebar";
import Footer from "../../Footer";


const TFT = () => {

    // Dados dos jogadores
    var players2G = [
    {"#": "🥇", Nome: "Droga"     , J: 3 , ML : 1.67   , "1L": 1, "2L" : 2, "3L": 0, "4L" : 0, "5L": 0, "6L" : 0, "7L": 0, "8L" : 0 },
    {"#": "🥈", Nome: "Bárbara"   , J: 3 , ML : 2.67   , "1L": 1, "2L" : 0, "3L": 1, "4L" : 1, "5L": 0, "6L" : 0, "7L": 0, "8L" : 0 },
    {"#": "🥉", Nome: "Mestre Gui", J: 3 , ML : 2.67   , "1L": 0, "2L" : 1, "3L": 2, "4L" : 0, "5L": 0, "6L" : 0, "7L": 0, "8L" : 0 },
    {"#": "4º", Nome: "Cludos"    , J: 3 , ML : 3.00   , "1L": 1, "2L" : 0, "3L": 0, "4L" : 2, "5L": 0, "6L" : 0, "7L": 0, "8L" : 0 },
    {"#": "5º", Nome: "Wisdow"    , J: 3 , ML : 5.33   , "1L": 0, "2L" : 0, "3L": 0, "4L" : 0, "5L": 2, "6L" : 1, "7L": 0, "8L" : 0 },
    {"#": "6º", Nome: "Braz"      , J: 3 , ML : 5.67   , "1L": 0, "2L" : 0, "3L": 0, "4L" : 0, "5L": 1, "6L" : 2, "7L": 0, "8L" : 0 }
    ]
    
    var players1G = [
    {"#": "🥇", Nome: "Xadas"     , J: 3 , ML : 2.00   , "1L": 2, "2L" : 0, "3L": 0, "4L" : 1, "5L": 0, "6L" : 0, "7L": 0, "8L" : 0 },
    {"#": "🥈", Nome: "Squnha"    , J: 3 , ML : 2.67   , "1L": 0, "2L" : 1, "3L": 2, "4L" : 0, "5L": 0, "6L" : 0, "7L": 0, "8L" : 0 },
    {"#": "🥉", Nome: "Geremias"  , J: 3 , ML : 3.65   , "1L": 1, "2L" : 1, "3L": 0, "4L" : 0, "5L": 0, "6L" : 1, "7L": 0, "8L" : 0 },
    {"#": "4º", Nome: "Hydra"     , J: 3 , ML : 4.00   , "1L": 0, "2L" : 1, "3L": 0, "4L" : 0, "5L": 2, "6L" : 0, "7L": 0, "8L" : 0 },
    {"#": "5º", Nome: "João Nuno" , J: 3 , ML : 4.33   , "1L": 0, "2L" : 0, "3L": 0, "4L" : 1, "5L": 2, "6L" : 0, "7L": 0, "8L" : 0 },
    {"#": "6º", Nome: "Lekky"     , J: 3 , ML : 5.00   , "1L": 0, "2L" : 0, "3L": 1, "4L" : 0, "5L": 0, "6L" : 2, "7L": 0, "8L" : 0 }
    ]
    
    
    
    var playersFinal = [
    {"#": "🥇", Nome: "Droga"      ,J: 3 , ML : 2.33  , "1L": 1, "2L" : 0, "3L": 2, "4L" : 0, "5L": 0, "6L" : 0, "7L": 0, "8L" : 0 },
    {"#": "🥈", Nome: "Mestre Gui" ,J: 3 , ML : 2.67  , "1L": 1, "2L" : 1, "3L": 0, "4L" : 0, "5L": 1, "6L" : 0, "7L": 0, "8L" : 0 },
    {"#": "🥉", Nome: "Xadas"      ,J: 3 , ML : 3.67  , "1L": 0, "2L" : 1, "3L": 1, "4L" : 0, "5L": 0, "6L" : 1, "7L": 0, "8L" : 0 },
    {"#": "🥉", Nome: "Bárbara"    ,J: 3 , ML : 3.67  , "1L": 0, "2L" : 1, "3L": 0, "4L" : 1, "5L": 1, "6L" : 0, "7L": 0, "8L" : 0 },
    {"#": "5º", Nome: "Cludos"     ,J: 3 , ML : 4.00  , "1L": 1, "2L" : 0, "3L": 0, "4L" : 0, "5L": 1, "6L" : 1, "7L": 0, "8L" : 0 },
    {"#": "6º", Nome: "Geremias"   ,J: 3 , ML : 4.67  , "1L": 0, "2L" : 0, "3L": 0, "4L" : 2, "5L": 0, "6L" : 1, "7L": 0, "8L" : 0 },
    {"#": "7º", Nome: "Squnha"     ,J: 3 , ML : 7.00  , "1L": 0, "2L" : 0, "3L": 0, "4L" : 0, "5L": 0, "6L" : 0, "7L": 3, "8L" : 0 },
    {"#": "8º", Nome: "Hydra"      ,J: 3 , ML : 8.00  , "1L": 0, "2L" : 0, "3L": 0, "4L" : 0, "5L": 0, "6L" : 0, "7L": 0, "8L" : 3 }
    ]
    
    
    
    var playersTFT = [
    // Dados dos jogadores
    {"#": "🥇", Nome: "Droga"      , Pts: "+13"},
    {"#": "🥈", Nome: "Mestre Gui" , Pts: "+10"},
    {"#": "🥉", Nome: "Xadas"      , Pts: "+8" },
    {"#": "🥉", Nome: "Bárbara"    , Pts: "+8" },
    {"#": "5º", Nome: "Cludos"     , Pts: "+5" },
    {"#": "6º", Nome: "Geremias"   , Pts: "+5" },
    {"#": "7º", Nome: "Squnha"     , Pts: "+4" },
    {"#": "8º", Nome: "Hydra"      , Pts: "+4" },
    {"#": "9º", Nome: "João Nuno"  , Pts: "+3" },
    {"#": "9º", Nome: "Wisdow"     , Pts: "+3" },
    {"#": "10º", Nome: "Lekky"     , Pts: "+3" },
    {"#": "10º", Nome: "Braz"      , Pts: "+3" }
    
    ]

    return (
        <>
            <Navebar />
            <div className="w3-container w3-light-gray" style={{ textAlign: "center" }}>
                <div className="w3-container w3-center" style={{ width: "60%", display: "inline-block" }}>
                <h1 className="w3-center">Rankings Teamfight Tactics</h1>
                    <div className="rankings-container">
                        <table className="rankings-table w3-table w3-centered w3-table-all w3-hoverable">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nome</th>
                                    <th>Pts</th>
                                </tr>
                            </thead>
                            <tbody>
                                {playersTFT.map((player, index) => (
                                    <tr key={index}>
                                        <td>{player["#"]}</td>
                                        <td>{player.Nome}</td>
                                        <td>{player.Pts}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <h1 className="w3-center">Tabela do Grupo 1</h1>
                    <div className="rankings-container">
                        <table className="rankings-table w3-table w3-centered w3-table-all w3-hoverable">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nome</th>
                                    <th>J</th>
                                    <th>ML</th>
                                    <th>1L</th>
                                    <th>2L</th>
                                    <th>3L</th>
                                    <th>4L</th>
                                    <th>5L</th>
                                    <th>6L</th>
                                    <th>7L</th>
                                    <th>8L</th>
                                </tr>
                            </thead>
                            <tbody>
                                {players1G.map((player, index) => (
                                    <tr key={index}>
                                        <td>{player["#"]}</td>
                                        <td>{player.Nome}</td>
                                        <td>{player.J}</td>
                                        <td>{player.ML}</td>
                                        <td>{player["1L"]}</td>
                                        <td>{player["2L"]}</td>
                                        <td>{player["3L"]}</td>
                                        <td>{player["4L"]}</td>
                                        <td>{player["5L"]}</td>
                                        <td>{player["6L"]}</td>
                                        <td>{player["7L"]}</td>
                                        <td>{player["8L"]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <h1 className="w3-center">Tabela do Grupo 2</h1>
                    <div className="rankings-container">
                        <table className="rankings-table w3-table w3-centered w3-table-all w3-hoverable">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nome</th>
                                    <th>J</th>
                                    <th>ML</th>
                                    <th>1L</th>
                                    <th>2L</th>
                                    <th>3L</th>
                                    <th>4L</th>
                                    <th>5L</th>
                                    <th>6L</th>
                                    <th>7L</th>
                                    <th>8L</th>
                                </tr>
                            </thead>
                            <tbody>
                                {players2G.map((player, index) => (
                                    <tr key={index}>
                                        <td>{player["#"]}</td>
                                        <td>{player.Nome}</td>
                                        <td>{player.J}</td>
                                        <td>{player.ML}</td>
                                        <td>{player["1L"]}</td>
                                        <td>{player["2L"]}</td>
                                        <td>{player["3L"]}</td>
                                        <td>{player["4L"]}</td>
                                        <td>{player["5L"]}</td>
                                        <td>{player["6L"]}</td>
                                        <td>{player["7L"]}</td>
                                        <td>{player["8L"]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <h1 className="w3-center">Tabela do Grupo Final</h1>
                    <div className="rankings-container">
                        <table className="rankings-table w3-table w3-centered w3-table-all w3-hoverable">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nome</th>
                                    <th>J</th>
                                    <th>ML</th>
                                    <th>1L</th>
                                    <th>2L</th>
                                    <th>3L</th>
                                    <th>4L</th>
                                    <th>5L</th>
                                    <th>6L</th>
                                    <th>7L</th>
                                    <th>8L</th>
                                </tr>
                            </thead>
                            <tbody>
                                {playersFinal.map((player, index) => (
                                    <tr key={index}>
                                        <td>{player["#"]}</td>
                                        <td>{player.Nome}</td>
                                        <td>{player.J}</td>
                                        <td>{player.ML}</td>
                                        <td>{player["1L"]}</td>
                                        <td>{player["2L"]}</td>
                                        <td>{player["3L"]}</td>
                                        <td>{player["4L"]}</td>
                                        <td>{player["5L"]}</td>
                                        <td>{player["6L"]}</td>
                                        <td>{player["7L"]}</td>
                                        <td>{player["8L"]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="w3-container">
                    <br></br>
                    <p>
                      <b>Pts</b> - Pontos Ganhos | <b>J</b> - Jogos | <b>ML</b> - Média de Lugares | <b>nL</b> - Lugares
                    </p>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
            
            <Footer />
        </>
    );
}
export default TFT;