import Navebar from "../../Navebar";
import Footer from "../../Footer";


const BatalhaNaval = () => {

    
    var player1 = { "#" : "🥇", Membros : "Xadas, Bárbara, Cludos & João Nuno", Pt: "+8"};
    var player2 = { "#" : "🥈", Membros : "Geremias, Squnha, Atlas & Areias"  , Pt: "+4" };
    
    var players = [player1, player2];

    return (
        <>
            <Navebar />
             <div className="w3-container w3-light-gray" style={{ textAlign: "center" }}>
                 <div className="w3-container w3-center" style={{ width: "60%", display: "inline-block" }}>
                     <h1 className="w3-center">Rankings do Batalha Naval</h1>
                     <div className="rankings-container">
                         <table className="rankings-table w3-table w3-centered w3-table-all w3-hoverable">
                             <thead>
                                 <tr>
                                     <th>#</th>
                                     <th>Membros</th>
                                     <th>Pts</th>
                                 </tr>
                             </thead>
                             <tbody>
                                 {players.map((player, index) => (
                                     <tr key={index}>
                                         <td>{player["#"]}</td>
                                         <td>{player.Membros}</td>
                                         <td>{player.Pt}</td>
                                     </tr>
                                 ))}
                             </tbody>
                         </table>
                     </div>
                 </div>
                 <div className="w3-container">
                     <br></br>
                     <p>
                       <b>Pts</b> - Pontos Ganhos
                     </p>
                 </div>
                 <br></br>
                 <br></br>
                 <br></br>
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
export default BatalhaNaval;