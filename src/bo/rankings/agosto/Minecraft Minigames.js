import Navebar from "../../Navebar";
import Footer from "../../Footer";


const MinecraftMinigames = () => {

    
     // Dados dos jogadores
     var player1 = { "#" : "🥇" , "Jogador" : "Squnha"    , PMM : 23, MC : 2.36 ,Sw1: "4º", Sw2: "🥇", Sw3: "5º", Bb1 : "🥇", Bb2 : "🥉", Bb3 : "🥈", Tr1 : "🥇", Tr2 : "🥇" , Tr3 : "🥇", Hg: "6º", Pk: "🥇", Pt: "+13" };
     var player2 = { "#" : "🥈" , "Jogador" : "Lobato"    , PMM : 20, MC : 3.09 ,Sw1: "🥇", Sw2: "🥉", Sw3: "🥇", Bb1 : "5º", Bb2 : "4º", Bb3 : "🥇", Tr1 : "🥈", Tr2 : "7º" , Tr3 : "7º", Hg: "🥇", Pk: "🥈", Pt: "+10" };
     var player3 = { "#" : "🥉" , "Jogador" : "Geremias"  , PMM : 14, MC : 3.18 ,Sw1: "5º", Sw2: "5º", Sw3: "🥈", Bb1 : "🥉", Bb2 : "🥈", Bb3 : "🥉", Tr1 : "5º", Tr2 : "🥈" , Tr3 : "🥈", Hg: "🥉", Pk: "🥉", Pt: "+8"  };
     var player4 = { "#" : "4º" , "Jogador" : "Xadas"     , PMM : 11, MC : 3.27 ,Sw1: "🥈", Sw2: "6º", Sw3: "🥉", Bb1 : "🥉", Bb2 : "🥇", Bb3 : "4º", Tr1 : "4º", Tr2 : "4º" , Tr3 : "🥉", Hg: "🥈", Pk: "4º", Pt: "+6"  };
     var player5 = { "#" : "5º" , "Jogador" : "Lampreia"  , PMM : 5 , MC : 4.72 ,Sw1: "7º", Sw2: "🥈", Sw3: "6º", Bb1 : "🥈", Bb2 : "5º", Bb3 : "5º", Tr1 : "🥉", Tr2 : "6º" , Tr3 : "4º", Hg: "5º", Pk: "-", Pt: "+5"  };
     var player6 = { "#" : "6º" , "Jogador" : "Cludos"    , PMM : 2 , MC : 5.00 ,Sw1: "🥉", Sw2: "4º", Sw3: "4º", Bb1 : "6º", Bb2 : "6º", Bb3 : "6º", Tr1 : "6º", Tr2 : "🥉" , Tr3 : "6º", Hg: "4º", Pk: "-", Pt: "+5"  };
     var player7 = { "#" : "7º" , "Jogador" : "João Nuno" , PMM : 0 , MC : 6.54 ,Sw1: "6º", Sw2: "-", Sw3: "-", Bb1 : "7º", Bb2 : "7º", Bb3 : "7º", Tr1 : "7º", Tr2 : "5º" , Tr3 : "5º", Hg: "-", Pk: "-", Pt: "+4"  };
 
     var players = [player1, player2, player3, player4, player5, player6,player7];
 
     return (
         <>
             <Navebar />
             <div className="w3-container w3-light-gray" style={{ textAlign: "center" }}>
                 <div className="w3-container w3-center" style={{ width: "60%", display: "inline-block" }}>
                     <h1 className="w3-center">Rankings do Minecraft Minigames</h1>
                     <div className="rankings-container">
                         <table className="rankings-table w3-table w3-centered w3-table-all w3-hoverable">
                             <thead>
                                 <tr>
                                     <th>#</th>
                                     <th>Jogador</th>
                                     <th>Pts</th>
                                     <th>PMM</th>
                                     <th>MC</th>
                                     <th>SW1</th>
                                     <th>SW2</th>
                                     <th>SW3</th>
                                     <th>BB1</th>
                                     <th>BB2</th>
                                     <th>BB3</th>
                                     <th>TR1</th>
                                     <th>TR2</th>
                                     <th>TR3</th>
                                     <th>HG</th>
                                     <th>PK</th>
                                 </tr>
                             </thead>
                             <tbody>
                                 {players.map((player, index) => (
                                     <tr key={index}>
                                         <td>{player["#"]}</td>
                                         <td>{player.Jogador}</td>
                                         <td>{player.Pt}</td>
                                         <td>{player.PMM}</td>
                                         <td>{player.MC}</td>
                                         <td>{player.Sw1}</td>
                                         <td>{player.Sw2}</td>
                                         <td>{player.Sw3}</td>
                                         <td>{player.Bb1}</td>
                                         <td>{player.Bb2}</td>
                                         <td>{player.Bb3}</td>
                                         <td>{player.Tr1}</td>
                                         <td>{player.Tr2}</td>
                                         <td>{player.Tr3}</td>
                                         <td>{player.Hg}</td>
                                         <td>{player.Pk}</td>
                                     </tr>
                                 ))}
                             </tbody>
                         </table>
                     </div>
                 </div>
                 <div class="w3-container">
                     <br></br>
                     <p>
                        <b>Pts</b> - Pontos Ganhos | <b>PMM</b> - Pontos Minecraft Minigames | <b>MC</b> - Média Classificativa | <b>SWn</b> - Sky Wars n | <b>BBn</b> - Build Battle n | <b>TRn</b> - TNT Run n | <b>HG</b> - Hunger Games | <b>PK</b> - Parkour
                     </p>
                 </div>
             </div>
             
             <Footer />
         </>
     );
 }
 export default MinecraftMinigames;