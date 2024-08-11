import Navebar from "../../Navebar";
import Footer from "../../Footer";


const PingPong = () => {

    
     // Dados dos jogadores
     var player1 = { "#" : "🥇" , "Membros" : "Xadas"       , Pt: "+13" };
     var player2 = { "#" : "🥈" , "Membros" : "João Nuno"   , Pt: "+10" };
     var player3 = { "#" : "🥉" , "Membros" : "Lekky"       , Pt: "+8"  };
     var player4 = { "#" : "4º" , "Membros" : "Atlas"       , Pt: "+6"  };
     var player5 = { "#" : "5º" , "Membros" : "Bárbara"     , Pt: "+5"  };
     var player6 = { "#" : "5º" , "Membros" : "Braz"        , Pt: "+5"  };
     var player7 = { "#" : "7º" , "Membros" : "Squnha"      , Pt: "+4"  };
     var player8 = { "#" : "8º" , "Membros" : "Cludos"      , Pt: "+4"  };
     var player9 = { "#" : "9º" , "Membros" : "Lemos"       , Pt: "+3"  };
     var player10 = { "#" : "10º" , "Membros" : "Gelly"     , Pt: "+3"  };
 
     var players = [player1, player2, player3, player4, player5, player6,player7,player8,player9,player10];
 
     return (
         <>
             <Navebar />
             <div className="w3-container w3-light-gray" style={{ textAlign: "center" }}>
                 <div className="w3-container w3-center" style={{ width: "60%", display: "inline-block" }}>
                     <h1 className="w3-center">Rankings do Ping Pong</h1>
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
                 <br></br>
                 <div class="w3-container">
                     <div class="w3-container w3-center" style={{width:"80%",display:"inline-block"}}>
                         <h1 class="w3-center">Brackets</h1>
                         <iframe title="PingPong" src="https://challonge.com/pt/cc3rurwi/module" width="100%" height="500" frameborder="0" scrolling="auto" allowtransparency="true"></iframe>
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
 export default PingPong;