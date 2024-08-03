import Navebar from "../../Navebar";
import Footer from "../../Footer";


const BusinessTour = () => {

    
     // Dados dos jogadores
     var player1 = { "#" : "1º" , "Membros" : "Geremias"    , Pt: "+13" };
     var player2 = { "#" : "2º" , "Membros" : "Lekky"       , Pt: "+10" };
     var player3 = { "#" : "3º" , "Membros" : "Wisdow"      , Pt: "+8"  };
     var player4 = { "#" : "4º" , "Membros" : "Cludos"      , Pt: "+6"  };
     var player5 = { "#" : "5º" , "Membros" : "Mestre Gui"  , Pt: "+5"  };
     var player6 = { "#" : "5º" , "Membros" : "Xadas"       , Pt: "+5"  };
     var player7 = { "#" : "7º" , "Membros" : "Squnha"      , Pt: "+4"  };
     var player8 = { "#" : "7º" , "Membros" : "Gelly"       , Pt: "+4"  };
 
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