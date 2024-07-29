import Navebar from "../../Navebar";
import Footer from "../../Footer";


const Sueca = () => {

    
     // Dados dos jogadores
     var player1 = { "#" : "1º" , "Duos" : "Xadas e Bárbara"      , Pt: "+13" };
     var player2 = { "#" : "2º" , "Duos" : "Cludos e Lemos"       , Pt: "+10" };
     var player3 = { "#" : "3º" , "Duos" : "Wisdow e Squnha"      , Pt: "+8"  };
     var player4 = { "#" : "4º" , "Duos" : "Geremias e Esquilo"   , Pt: "+6"  };
     var player5 = { "#" : "5º" , "Duos" : "Braz e Atlas"         , Pt: "+5"  };
     var player6 = { "#" : "5º" , "Duos" : "Hydra e Lekky"        , Pt: "+5"  };
 
     var players = [player1, player2, player3, player4, player5, player6];
 
     return (
         <>
             <Navebar />
             <div className="w3-container w3-light-gray" style={{ textAlign: "center" }}>
                 <div className="w3-container w3-center" style={{ width: "60%", display: "inline-block" }}>
                     <h1 className="w3-center">Rankings do Sueca</h1>
                     <div className="rankings-container">
                         <table className="rankings-table w3-table w3-centered w3-table-all w3-hoverable">
                             <thead>
                                 <tr>
                                     <th>#</th>
                                     <th>Duos</th>
                                     <th>Pts</th>
                                 </tr>
                             </thead>
                             <tbody>
                                 {players.map((player, index) => (
                                     <tr key={index}>
                                         <td>{player["#"]}</td>
                                         <td>{player.Duos}</td>
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
                         <iframe title="Sueca" src="https://challonge.com/pt/egpr25tn/module" width="100%" height="500" frameborder="0" scrolling="auto" allowtransparency="true"></iframe>
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
 export default Sueca;