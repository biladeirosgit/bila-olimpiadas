import Navebar from "../../Navebar";
import Footer from "../../Footer";


const Bilatrecos = () => {

    // Dados dos jogadores
    var player1 = { "#" : "🥇" , Nome: "Os Fora da LEI"           , "Membros" : "Wisdow & Mestre Gui", Pt: "+13"   , J: 7 ,  V: 5  , D : 2, GM : 23, GS: 18 };
    var player2 = { "#" : "🥈" , Nome: "Marra e Quilha"           , "Membros" : "Xadas & Bárbara"    , Pt: "+10"   , J: 6 ,  V: 4  , D : 1, GM : 18, GS: 15 };
    var player3 = { "#" : "🥉" , Nome: "Vale Tudo"                , "Membros" : "Simão & Camilo"     , Pt: "+8"    , J: 3 ,  V: 1  , D : 2, GM : 8 , GS: 11 };
    var player4 = { "#" : "4º" , Nome: "Os Marrecos dos Matrecos" , "Membros" : "Cludos & Braz"      , Pt: "+6"    , J: 3 ,  V: 1  , D : 2, GM : 9 , GS: 11 };
    var player5 = { "#" : "5º" , Nome: "Duo Lipa"                 , "Membros" : "Geremias & Esquilo" , Pt: "+5"    , J: 3 ,  V: 1  , D : 2, GM : 10, GS: 10 };
    var player6 = { "#" : "6º" , Nome: "Borussia Doutro Mundo"    , "Membros" : "Squnha & Rodry"     , Pt: "+5"    , J: 2 ,  V: 0  , D : 2, GM : 5 , GS: 8  };

    var players = [player1, player2, player3, player4, player5, player6];

    return (
        <>
            <Navebar />
            <div className="w3-container w3-light-gray" style={{ textAlign: "center" }}>
                <div className="w3-container w3-center" style={{ width: "60%", display: "inline-block" }}>
                    <h1 className="w3-center">Rankings do Bilatrecos</h1>
                    <div className="rankings-container">
                        <table className="rankings-table w3-table w3-centered w3-table-all w3-hoverable">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nome</th>
                                    <th>Membros</th>
                                    <th>Pts</th>
                                    <th>J</th>
                                    <th>V</th>
                                    <th>D</th>
                                    <th>GM</th>
                                    <th>GS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {players.map((player, index) => (
                                    <tr key={index}>
                                        <td>{player["#"]}</td>
                                        <td>{player.Nome}</td>
                                        <td>{player.Membros}</td>
                                        <td>{player.Pt}</td>
                                        <td>{player.J}</td>
                                        <td>{player.V}</td>
                                        <td>{player.D}</td>
                                        <td>{player.GM}</td>
                                        <td>{player.GS}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="w3-container">
                    <br></br>
                    <p>
                      <b>Pts</b> - Pontos Ganhos | <b>J</b> - Jogos | <b>V</b> - Vitórias | <b>D</b> - Derrotas | <b>GM</b> - Golos Marcados | <b>GS</b> - Golos Sofridos
                    </p>
                </div>
                <br></br>
                <div class="w3-container">
                    <div class="w3-container w3-center" style={{width:"80%",display:"inline-block"}}>
                        <h1 class="w3-center">Brackets</h1>
                        <iframe title="Bilatrecos" src="https://challonge.com/pt/ro1ajek3/module" width="100%" height="500" frameborder="0" scrolling="auto" allowtransparency="true"></iframe>
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
export default Bilatrecos;