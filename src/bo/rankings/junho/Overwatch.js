import Navebar from "../../Navebar";
import Footer from "../../Footer";


const Overwatch = () => {

    var player1 = { "#" : "1º" ,Nome: "Avecs da Tuga"  , Membros : "Rodry, g0mes_27, simas7559, xxbrunoxx2514, Shanks", Pt: "+8", R: "2-0"};
    var player2 = { "#" : "2º" ,Nome: "Lacaios do Braz", Membros : "Braz, João Nuno, Escher, Xadas & Atlas"     , Pt: "+6", R: "1-1"};
    var player3 = { "#" : "3º" ,Nome: "Temos 2 Cunhas" , Membros : "Wisdow, Geremias, Xiro, Squnha & Cludos"    , Pt: "+4", R: "0-2"};

    var players = [player1, player2, player3];

    return (
        <>
            <Navebar />
            <div className="w3-container w3-light-gray" style={{ textAlign: "center" }}>
                <div className="w3-container w3-center" style={{ width: "60%", display: "inline-block" }}>
                    <h1 className="w3-center">Rankings do Overwatch 2</h1>
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
                                        <td>{player.Nome}</td>
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
                      <b>Pts</b> - Pontos Ganhos | <b>R</b> - Resultado
                    </p>
                </div>
                <br></br>
            </div>
            
            <Footer />
        </>
    );
}
export default Overwatch;