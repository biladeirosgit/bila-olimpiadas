import Navebar from "../../Navebar";
import Footer from "../../Footer";


const Scribblio = () => {

    
    // Dados dos jogadores
    var player1  = { "#" : "1º"  , "Nome" : "Squnha"     , "Pt" : "+13", "Ps" : 32545};
    var player2  = { "#" : "2º"  , "Nome" : "Braz"       , "Pt" : "+10", "Ps" : 32025};
    var player3  = { "#" : "3º"  , "Nome" : "Mestre Gui" , "Pt" : "+8", "Ps" : 30705};
    var player4  = { "#" : "4º"  , "Nome" : "Frazão"     , "Pt" : "+6", "Ps" : 29095};
    var player5  = { "#" : "5º"  , "Nome" : "Geremias"   , "Pt" : "+5", "Ps" : 28410};
    var player6  = { "#" : "6º"  , "Nome" : "Lemos"      , "Pt" : "+5", "Ps" : 27115};
    var player7  = { "#" : "7º"  , "Nome" : "Cludos"     , "Pt" : "+4", "Ps" : 26295};
    var player8  = { "#" : "8º"  , "Nome" : "Xadas"      , "Pt" : "+4", "Ps" : 25635};
    var player9  = { "#" : "9º"  , "Nome" : "Bárbara"    , "Pt" : "+3", "Ps" : 25095};
    var player10 = { "#" : "10º" , "Nome" : "Hydra"      , "Pt" : "+3", "Ps" : 23565};
    var player11 = { "#" : "11º" , "Nome" : "Wisdow"     , "Pt" : "+2", "Ps" : 22235};
    var player12 = { "#" : "12º" , "Nome" : "Lekky"      , "Pt" : "+2", "Ps" : 20325};
    

    var players = [player1, player2, player3, player4, player5, player6, player7, player8, player9, player10, player11, player12];

    return (
        <>
            <Navebar />
            <div className="w3-container w3-light-gray" style={{ textAlign: "center" }}>
                <div className="w3-container w3-center" style={{ width: "60%", display: "inline-block" }}>
                    <h1 className="w3-center">Rankings do Scribbl.io</h1>
                    <div className="rankings-container">
                        <table className="rankings-table w3-table w3-centered w3-table-all w3-hoverable">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nome</th>
                                    <th>Pts</th>
                                    <th>Ps</th>
                                </tr>
                            </thead>
                            <tbody>
                                {players.map((player, index) => (
                                    <tr key={index}>
                                        <td>{player["#"]}</td>
                                        <td>{player.Nome}</td>
                                        <td>{player.Pt}</td>
                                        <td>{player.Ps}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="w3-container">
                    <br></br>
                    <p>
                      <b>Pts</b> - Pontos Ganhos | <b>Ps</b> - Pontos Scribbl.io
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
export default Scribblio;