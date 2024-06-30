import Navebar from "../../Navebar";
import Footer from "../../Footer";


const EscapeRoom = () => {

    var player1 = { "#" : "1º" , Membros : "Wisdow, Geremias, Cludos, Squnha, Mestre Gui, Camilo, Sardoal", Pt: "+8", T: "46 min"};
    var player2 = { "#" : "2º" , Membros : "Xadas, Bárbara, João Nuno, Braz, Gama"                        , Pt: "+4", T: "58 min"};

    var players = [player1, player2];

    return (
        <>
            <Navebar />
            <div className="w3-container w3-light-gray" style={{ textAlign: "center" }}>
                <div className="w3-container w3-center" style={{ width: "60%", display: "inline-block" }}>
                    <h1 className="w3-center">Rankings do EscapeRoom</h1>
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
                      <b>Pts</b> - Pontos Ganhos | <b>T</b> - Tempo
                    </p>
                </div>
                <br></br>
            </div>
            
            <Footer />
        </>
    );
}
export default EscapeRoom;