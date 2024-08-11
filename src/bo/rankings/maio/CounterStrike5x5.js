import Navebar from "../../Navebar";
import Footer from "../../Footer";


const CounterStrike5x5 = () => {

    var player1 = { "#" : "🥇" ,Nome: "Matadores dos Cheios de Fome" , Membros : "Squnha, Mestre Diogo, Rodry, Cludos, Xavier"          , Pt: "+8"};
    var player2 = { "#" : "🥈" ,Nome: "ReisDelas"                    , Membros : "Lemos, Gelly, Hydra, Tone & Lekky"             , Pt: "+6"};
    var player3 = { "#" : "🥉" ,Nome: "Os Sportinguistas do Sardoal" , Membros : "Wisdow, Sardoal, João, João Tavares & Lobato"  , Pt: "+4"};
    var player4 = { "#" : "4º" ,Nome: "Os Fora da Lei"               , Membros : "Geremias, Alcunha, Braz, João Nuno & Xadas"    , Pt: "+2"};
    
    var players = [player1, player2, player3, player4];

    return (
        <>
            <Navebar />
            <div className="w3-container w3-light-gray" style={{ textAlign: "center" }}>
                <div className="w3-container w3-center" style={{ width: "60%", display: "inline-block" }}>
                    <h1 className="w3-center">Rankings do CounterStrike 2</h1>
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
                        <iframe title="CounterStrike" src="https://challonge.com/pt/up1hx237/module" width="100%" height="500" frameborder="0" scrolling="auto" allowtransparency="true"></iframe>
                    </div>
                </div>
            </div>
            
            <Footer />
        </>
    );
}
export default CounterStrike5x5;