import Navebar from "../../Navebar";
import Footer from "../../Footer";


const RocketLeague3x3 = () => {

    
    var player1 = { "#" : "🥇" ,Nome: "BrotherZ in PaRiS"        , Membros : "Hydra, Lekky & Squnha"          , Pt: "+8"};
    var player2 = { "#" : "🥈" ,Nome: "Winners Queue"            , Membros : "Gelly,  Tone & Lemos"           , Pt: "+6"};
    var player3 = { "#" : "🥉" ,Nome: "Douradinhos de Frango"    , Membros : "Braz, Escher & Atlas"           , Pt: "+4"};
    var player4 = { "#" : "4º" ,Nome: "Falamos no FIFA"          , Membros : "Wisdow, Cludos & Sardoal"       , Pt: "+3"};
    var player5 = { "#" : "5º" ,Nome: "Frazão sobre Rodas"       , Membros : "Frazão, Bárbara & Xadas"        , Pt: "+2"};
    var player6 = { "#" : "5º" ,Nome: "O Verdadeiro Cunha"       , Membros : "Mestre Gui, Geremias & Alcunha" , Pt: "+2"};
    
    var players = [player1, player2, player3, player4, player5, player6];

    return (
        <>
            <Navebar />
            <div className="w3-container w3-light-gray" style={{ textAlign: "center" }}>
                <div className="w3-container w3-center" style={{ width: "60%", display: "inline-block" }}>
                    <h1 className="w3-center">Rankings do Rocket League 3x3</h1>
                    <div className="rankings-container">
                        <table className="rankings-table w3-table w3-centered w3-table-all w3-hoverable">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nome</th>
                                    <th>Membros</th>
                                    <th>Pts</th>
                                </tr>
                            </thead>
                            <tbody>
                                {players.map((player, index) => (
                                    <tr key={index}>
                                        <td>{player["#"]}</td>
                                        <td>{player.Nome}</td>
                                        <td>{player.Membros}</td>
                                        <td>{player.Pt}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="w3-container">
                    <br></br>
                    <p>
                      <b>Pts</b> - Pontos Ganhos
                    </p>
                </div>
                <br></br>
                <div class="w3-container">
                    <div class="w3-container w3-center" style={{width:"80%",display:"inline-block"}}>
                        <h1 class="w3-center">Brackets</h1>
                        <iframe title="RocketLeague" src="https://challonge.com/cqbcuyhu/module" width="100%" height="500" frameborder="0" scrolling="auto" allowtransparency="true"></iframe>
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
export default RocketLeague3x3;