import Navebar from "../../Navebar";
import Footer from "../../Footer";


const BusinessTour = () => {

    
     // Dados dos jogadores
     var player1 = { "#" : "🥇" , "Jogador" : "Geremias"    , Pt: "+13" };
     var player2 = { "#" : "🥈" , "Jogador" : "Lekky"       , Pt: "+10" };
     var player3 = { "#" : "🥉" , "Jogador" : "Wisdow"      , Pt: "+8"  };
     var player4 = { "#" : "4º" , "Jogador" : "Cludos"      , Pt: "+6"  };
     var player5 = { "#" : "5º" , "Jogador" : "Mestre Gui"  , Pt: "+5"  };
     var player6 = { "#" : "5º" , "Jogador" : "Xadas"       , Pt: "+5"  };
     var player7 = { "#" : "7º" , "Jogador" : "Squnha"      , Pt: "+4"  };
     var player8 = { "#" : "7º" , "Jogador" : "Gelly"       , Pt: "+4"  };
 
     var players = [player1, player2, player3, player4, player5, player6,player7,player8];
 
     return (
         <>
             <Navebar />
             <div className="w3-container w3-light-gray" style={{ textAlign: "center" }}>
                 <div className="w3-container w3-center" style={{ width: "60%", display: "inline-block" }}>
                     <h1 className="w3-center">Rankings do Business Tour</h1>
                     <div className="rankings-container">
                         <table className="rankings-table w3-table w3-centered w3-table-all w3-hoverable">
                             <thead>
                                 <tr>
                                     <th>#</th>
                                     <th>Jogador</th>
                                     <th>Pts</th>
                                 </tr>
                             </thead>
                             <tbody>
                                 {players.map((player, index) => (
                                     <tr key={index}>
                                         <td>{player["#"]}</td>
                                         <td>{player.Jogador}</td>
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
             </div>
             
             <Footer />
         </>
     );
 }
 export default BusinessTour;