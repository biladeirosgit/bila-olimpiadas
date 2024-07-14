import Navebar from "../../Navebar";
import Footer from "../../Footer";


const ArenasLOL = () => {

    var player1 = { "#" : "1º" , Duo : "OmniMommy"           , Membros : "Omniomm e Madmess"      , Pt: "+13", M: 2.6 , "1º JOGO": 5, "2º JOGO": 3,"3º JOGO": 2,"4º JOGO": 1,"5º JOGO": 2};
    var player2 = { "#" : "2º" , Duo : "Familia Superior"    , Membros : "Cludos e Squnha"        , Pt: "+10", M: 2.8 , "1º JOGO": 6, "2º JOGO": 2,"3º JOGO": 3,"4º JOGO": 2,"5º JOGO": 1};
    var player3 = { "#" : "3º" , Duo : "Goma"                , Membros : "Frosty e Wisdow"        , Pt: "+8" , M: 3.6 , "1º JOGO": 1, "2º JOGO": 4,"3º JOGO": 4,"4º JOGO": 6,"5º JOGO": 3};
    var player4 = { "#" : "4º" , Duo : "Stat Checkers"       , Membros : "Xadas e João Nuno"      , Pt: "+6" , M: 3.8 , "1º JOGO": 2, "2º JOGO": 5,"3º JOGO": 1,"4º JOGO": 4,"5º JOGO": 7};
    var player5 = { "#" : "5º" , Duo : "Gelatina de Cocaina" , Membros : "Gelly e Droga"          , Pt: "+5" , M: 3.8 , "1º JOGO": 4, "2º JOGO": 1,"3º JOGO": 5,"4º JOGO": 5,"5º JOGO": 4};
    var player6 = { "#" : "6º" , Duo : "Arrebirópaço"        , Membros : "Areias e Brito e Xiro"  , Pt: "+5" , M: 5.0 , "1º JOGO": 3, "2º JOGO": 7,"3º JOGO": 6,"4º JOGO": 3,"5º JOGO": 6};
    var player7 = { "#" : "7º" , Duo : "MVPs da Escape Room" , Membros : "Geremias e Mestre Gui"  , Pt: "+4" , M: 6.6 , "1º JOGO": 8, "2º JOGO": 6,"3º JOGO": 7,"4º JOGO": 7,"5º JOGO": 5};
    var player8 = { "#" : "8º" , Duo : "Putas do Afonso"     , Membros : "Lemos e Lampreia"       , Pt: "+4" , M: 7.8 , "1º JOGO": 7, "2º JOGO": 8,"3º JOGO": 8,"4º JOGO": 8,"5º JOGO": 8};

    var players = [player1, player2, player3, player4, player5, player6, player7, player8];

    return (
        <>
            <Navebar />
            <div className="w3-container w3-light-gray" style={{ textAlign: "center" }}>
                <div className="w3-container w3-center" style={{ width: "60%", display: "inline-block" }}>
                    <h1 className="w3-center">Rankings do LoL Arenas</h1>
                    <div className="rankings-container">
                        <table className="rankings-table w3-table w3-centered w3-table-all w3-hoverable">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Duo</th>
                                    <th>Membros</th>
                                    <th>Pts</th>
                                    <th>M</th>
                                    <th>1J</th>
                                    <th>2J</th>
                                    <th>3J</th>
                                    <th>4J</th>
                                    <th>5J</th>
                                </tr>
                            </thead>
                            <tbody>
                                {players.map((player, index) => (
                                    <tr key={index}>
                                        <td>{player["#"]}</td>
                                        <td>{player.Duo}</td>
                                        <td>{player.Membros}</td>
                                        <td>{player.Pt}</td>
                                        <td>{player.M}</td>
                                        <td>{player["1º JOGO"]}</td>
                                        <td>{player["2º JOGO"]}</td>
                                        <td>{player["3º JOGO"]}</td>
                                        <td>{player["4º JOGO"]}</td>
                                        <td>{player["5º JOGO"]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="w3-container">
                    <br></br>
                    <p>
                      <b>Pts</b> - Pontos Ganhos | <b>M</b> - Média Classificativa | <b>nJ</b> - nº Jogo
                    </p>
                </div>
                <br></br>
            </div>
            
            <Footer />
        </>
    );
}
export default ArenasLOL;