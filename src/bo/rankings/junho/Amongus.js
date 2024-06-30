import Navebar from "../../Navebar";
import Footer from "../../Footer";


const AmongUs = () => {

    
     // Dados dos jogadores
     var player1 = { "#" : "1º" , "Membros" : "Mestre Gui", Pt: "+13"   , Pa: 127, nI: 3, Vi : 2, Vc : 2, Ct : 1 , K: 9 , CA: 4, IA: 0 };
     var player2 = { "#" : "2º" , "Membros" : "Squnha"    , Pt: "+10"   , Pa: 117, nI: 2, Vi : 2, Vc : 3, Ct : 3 , K: 2 , CA: 8, IA: 3 };
     var player3 = { "#" : "3º" , "Membros" : "Hydra"     , Pt: "+8"    , Pa: 72 , nI: 2, Vi : 1, Vc : 2, Ct : 1 , K: 4 , CA: 2, IA: 1 };
     var player4 = { "#" : "4º" , "Membros" : "Cludos"    , Pt: "+6"    , Pa: 71 , nI: 3, Vi : 1, Vc : 2, Ct : 2 , K: 3 , CA: 4, IA: 3 };
     var player5 = { "#" : "5º" , "Membros" : "Bárbara"   , Pt: "+5"    , Pa: 64 , nI: 1, Vi : 0, Vc : 2, Ct : 1 , K: 2 , CA: 7, IA: 1 };
     var player6 = { "#" : "6º" , "Membros" : "Xadas"     , Pt: "+5"    , Pa: 59 , nI: 1, Vi : 1, Vc : 3, Ct : 1 , K: 2 , CA: 0, IA: 3 };
     var player7 = { "#" : "7º" , "Membros" : "Frazão"    , Pt: "+4"    , Pa: 46 , nI: 3, Vi : 1, Vc : 1, Ct : 0 , K: 3 , CA: 1, IA: 1 };
     var player8 = { "#" : "8º" , "Membros" : "Geremias"  , Pt: "+4"    , Pa: 43 , nI: 0, Vi : 0, Vc : 3, Ct : 3 , K: 0 , CA: 3, IA: 5 };
     var player9 = { "#" : "9º" , "Membros" : "Wisdow"    , Pt: "+3"    , Pa: 31 , nI: 0, Vi : 0, Vc : 3, Ct : 0 , K: 0 , CA: 4, IA: 6 };
 
     var players = [player1, player2, player3, player4, player5, player6,player7,player8,player9];
 
     return (
         <>
             <Navebar />
             <div className="w3-container w3-light-gray" style={{ textAlign: "center" }}>
                 <div className="w3-container w3-center" style={{ width: "60%", display: "inline-block" }}>
                     <h1 className="w3-center">Rankings do AmongUs</h1>
                     <div className="rankings-container">
                         <table className="rankings-table w3-table w3-centered w3-table-all w3-hoverable">
                             <thead>
                                 <tr>
                                     <th>#</th>
                                     <th>Membros</th>
                                     <th>Pts</th>
                                     <th>Pa</th>
                                     <th>nI</th>
                                     <th>Vi</th>
                                     <th>Vc</th>
                                     <th>Ct</th>
                                     <th>K</th>
                                     <th>CA</th>
                                     <th>IA</th>
                                 </tr>
                             </thead>
                             <tbody>
                                 {players.map((player, index) => (
                                     <tr key={index}>
                                         <td>{player["#"]}</td>
                                         <td>{player.Membros}</td>
                                         <td>{player.Pt}</td>
                                         <td>{player.Pa}</td>
                                         <td>{player.nI}</td>
                                         <td>{player.Vi}</td>
                                         <td>{player.Vc}</td>
                                         <td>{player.Ct}</td>
                                         <td>{player.K}</td>
                                         <td>{player.CA}</td>
                                         <td>{player.IA}</td>
                                     </tr>
                                 ))}
                             </tbody>
                         </table>
                     </div>
                 </div>
                 <div class="w3-container">
                     <br></br>
                     <p>
                       <b>Pts</b> - Pontos Ganhos | <b>Pa</b> - Pontos AmongUs | <b>nI</b> - Número de vezes a impostor | <b>Vi</b> - Vitórias como Impostor | <b>Vc</b> - Vitórias como Crewmate | <b>Ct</b> - Completed Tasks | <b>K</b> - Kills | <b>CA</b> - Correct Accusations | <b>IA</b> - Incorrect Accusations
                     </p>
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
 export default AmongUs;