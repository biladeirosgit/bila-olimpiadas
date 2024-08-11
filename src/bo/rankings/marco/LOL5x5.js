import Navebar from "../../Navebar";
import Footer from "../../Footer";


const LOL5x5 = () => {

    var player1 = { "#" : "🥇" ,Nome: "omnimommy"                , "Membros" : "Frost, Omniomm, Lekky, Madmess e Zé Afonso"      , Pt: "+8"    , R: "3-1" };
    var player2 = { "#" : "🥈" ,Nome: "Chega do Hydra"           , "Membros" : "Russo, Gama, Cludos, Hydra e Wisdow"            , Pt: "+6"    , R: "2-1" };
    var player3 = { "#" : "🥉" ,Nome: "Queremos Waffles Quentes" , "Membros" : "Lemos, Gelly, Rodry, Squnha e João Nuno"        , Pt: "+4"    , R: "1-2" };
    var player4 = { "#" : "4º" ,Nome: "Torres do Frazão"         , "Membros" : "Geremias, Mestre Gui, Xadas, Areias e Frazão"   , Pt: "+2"    , R: "0-2" };
    
    var players = [player1, player2, player3, player4];

    return (
        <>
            <Navebar />
            <div className="w3-container w3-light-gray" style={{ textAlign: "center" }}>
                <div className="w3-container w3-center" style={{ width: "60%", display: "inline-block" }}>
                    <h1 className="w3-center">Rankings do League of Legends 5x5</h1>
                    <div className="rankings-container">
                        <table className="rankings-table w3-table w3-centered w3-table-all w3-hoverable">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nome</th>
                                    <th>Membros</th>
                                    <th>Pts</th>
                                    <th>R</th>
                                </tr>
                            </thead>
                            <tbody>
                                {players.map((player, index) => (
                                    <tr key={index}>
                                        <td>{player["#"]}</td>
                                        <td>
                                            <div style={{display:"block"}}>
                                                <img 
                                                    src={`https://biladeirosgit.github.io/bila-olimpiadas/images/${player.Nome}.png`} 
                                                    alt={player.Nome} 
                                                    className="player-image"
                                                    style={{width:"50px",borderRadius:"50%"}}
                                                />
                                                <p>{player.Nome}</p>
                                            </div>
                                        </td>
                                        <td>{player.Membros}</td>
                                        <td>{player.Pt}</td>
                                        <td>{player.R}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="w3-container">
                    <br></br>
                    <p>
                      <b>Pts</b> - Pontos Ganhos | <b>J</b> - Jogos | <b>R</b> - Resultados
                    </p>
                </div>
                <br></br>
                <div class="w3-container">
                    <div class="w3-container w3-center" style={{width:"80%",display:"inline-block"}}>
                        <h1 class="w3-center">Brackets</h1>
                        <iframe title="LeagueOfLegends 5x5" src="https://challonge.com/pt/ypdqmny0/module" width="100%" height="500" frameborder="0" scrolling="auto" allowtransparency="true"></iframe>
                    </div>
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
export default LOL5x5;