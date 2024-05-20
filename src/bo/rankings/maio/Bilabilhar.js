import Navebar from "../../Navebar";
import Footer from "../../Footer";


const Bilabilhar = () => {

    // Dados dos jogadores
    var player1 = { "#" : "1º" , "Membros" : "Lekky & Lemos"         , Pt: "+13"   , R: "4-0" };
    var player2 = { "#" : "2º" , "Membros" : "Geremias & Alcunha"    , Pt: "+10"   , R: "5-2" };
    var player3 = { "#" : "3º" , "Membros" : "Braz & João Nuno"      , Pt: "+8"    , R: "2-2" };
    var player4 = { "#" : "4º" , "Membros" : "Tone & Hydra"          , Pt: "+6"    , R: "2-2" };
    var player5 = { "#" : "5º" , "Membros" : "Squnha & Migas"        , Pt: "+5"    , R: "2-2" };
    var player6 = { "#" : "5º" , "Membros" : "Wisdow & Sardoal"      , Pt: "+5"    , R: "1-2" };
    var player7 = { "#" : "7º" , "Membros" : "Rodry & Camilo"        , Pt: "+4"    , R: "0-2" };
    var player8 = { "#" : "7º" , "Membros" : "Gelly & Esquilo"       , Pt: "+4"    , R: "0-2" };
    var player9 = { "#" : "7º" , "Membros" : "Xadas & Bárbara"       , Pt: "+4"    , R: "0-2" };

    var players = [player1, player2, player3, player4, player5, player6,player7,player8,player9];

    return (
        <>
            <Navebar />
            <div className="w3-container w3-light-gray" style={{ textAlign: "center" }}>
                <div className="w3-container w3-center" style={{ width: "60%", display: "inline-block" }}>
                    <h1 className="w3-center">Rankings do Bilabilhar</h1>
                    <div className="rankings-container">
                        <table className="rankings-table w3-table w3-centered w3-table-all w3-hoverable">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Membros</th>
                                    <th>Pts</th>
                                    <th>R</th>
                                </tr>
                            </thead>
                            <tbody>
                                {players.map((player, index) => (
                                    <tr key={index}>
                                        <td>{player["#"]}</td>
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
                      <b>Pts</b> - Pontos Ganhos | <b>R</b> - Resultados
                    </p>
                </div>
                <br></br>
                <div class="w3-container">
                    <div class="w3-container w3-center" style={{width:"80%",display:"inline-block"}}>
                        <h1 class="w3-center">Brackets</h1>
                        <iframe src="https://challonge.com/pt/cifb0bv5/module" width="100%" height="500" frameborder="0" scrolling="auto" allowtransparency="true"></iframe>
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
export default Bilabilhar;