import Navebar from "../../Navebar";
import Footer from "../../Footer";


const Basquetiladas = () => {

    
    var player1 = { "#" : "🥇" ,Nome: "Os Cubas"              , Membros : "Esquilo, Serino & Zé"          , Pt: "+8", R: "2-0"};
    var player2 = { "#" : "🥈" ,Nome: "Os Caceteiros"         , Membros : "Xadas, Bárbara & Braz"         , Pt: "+6", R: "1-1"};
    var player3 = { "#" : "🥉" ,Nome: "Os Primos do Pedro"    , Membros : "Cludos, Squnha & Diogo"        , Pt: "+4", R: "0-2"};
    
    var players = [player1, player2, player3];

    return (
        <>
            <Navebar />
             <div className="w3-container w3-light-gray" style={{ textAlign: "center" }}>
                 <div className="w3-container w3-center" style={{ width: "60%", display: "inline-block" }}>
                     <h1 className="w3-center">Rankings do Basquetiladas</h1>
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
                 <div className="w3-container">
                     <br></br>
                     <p>
                       <b>Pts</b> - Pontos Ganhos | <b>R</b> - Resultados
                     </p>
                 </div>
                 <br></br>
                 <br></br>
                 <br></br>
                 <div className="w3-container w3-center" style={{ width: "60%", display: "inline-block" }}>
                    <table className="rankings-table w3-table w3-centered w3-table-all w3-hoverable">
                            <thead>
                                    <tr>
                                        <td></td>
                                        <td>Resultado</td>
                                        <td></td>
                                    </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Os Cubas</td>
                                    <td>11 - 5</td>
                                    <td>Os Caceiteiros</td>
                                </tr>
                                <tr>
                                    <td>Os Cubas</td>
                                    <td>11 - 7</td>
                                    <td>Os Primos do Pedro</td>
                                </tr>
                                <tr>
                                    <td>Os Caceiteiros</td>
                                    <td>3 - 1</td>
                                    <td>Os Primos do Pedro</td>
                                </tr>
                            </tbody>
                    </table>
                 </div>
                 
            </div>
            
            <Footer />
        </>
    );
}
export default Basquetiladas;