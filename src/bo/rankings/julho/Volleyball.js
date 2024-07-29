import Navebar from "../../Navebar";
import Footer from "../../Footer";


const Volleyball = () => {

    
    var player1 = { "#" : "1º" , Membros : "Squnha, Areias & Soares"  , Pt: "+8", R: "2-0"};
    var player2 = { "#" : "2º" , Membros : "Xadas, Bárbara & Cludos" , Pt: "+6" , R: "1-1"};
    var player3 = { "#" : "3º" , Membros : "Braz, João Nuno & Maria" , Pt: "+4" , R: "0-2"};
    
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
                 <div class="w3-container">
                     <div class="w3-container w3-center" style={{width:"80%",display:"inline-block"}}>
                         <h1 class="w3-center">Resultados</h1>
                         <iframe title="Volleyball" src="https://challonge.com/pt/6d052y0e/module" width="100%" height="500" frameborder="0" scrolling="auto" allowtransparency="true"></iframe>
                     </div>
                 </div>
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
export default Volleyball;