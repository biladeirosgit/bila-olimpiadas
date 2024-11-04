import Navebar from "../../Navebar";
import Footer from "../../Footer";


const PickemsLOL = () => {

    
     // Dados dos jogadores
     var player1  = { "#" : "🥇" , "Membros" : "Squnha"      , Pt: "+13"   , P: 230, Cb: "520 (150.8)", T: 380.8};
     var player2  = { "#" : "🥈" , "Membros" : "Madmess"     , Pt: "+10"   , P: 237, Cb: "360 (104.4)", T: 341.4};
     var player3  = { "#" : "🥉" , "Membros" : "Geremias"    , Pt: "+8"    , P: 205, Cb: "390 (113.1)", T: 318.1};
     var player4  = { "#" : "4º" , "Membros" : "Omniomm"     , Pt: "+6"    , P: 180 , Cb: "360 (104.4)", T: 284.4};
     var player5  = { "#" : "5º" , "Membros" : "João Nuno"   , Pt: "+5"    , P: 200 , Cb: "290 (84.1)", T: 284.1};
     var player6  = { "#" : "6º" , "Membros" : "Mestre Gui"  , Pt: "+5"    , P: 225 , Cb: "200 (58)", T: 283};
     var player7  = { "#" : "7º" , "Membros" : "Bárbara"     , Pt: "+4"    , P: 155 , Cb: "370 (107.3)", T: 262.3};
     var player8  = { "#" : "8º" , "Membros" : "Xadas"       , Pt: "+4"    , P: 175 , Cb: "290 (84.1)", T: 259.1};
     var player9  = { "#" : "9º" , "Membros" : "Areias"      , Pt: "+3"    , P: 227 , Cb: "100 (29)", T: 256};
     var player10 = { "#" : "10º" , "Membros" : "Frazão"     , Pt: "+3"    , P: 145 , Cb: "260 (75.4)", T: 220.4};
     var player11 = { "#" : "11º" , "Membros" : "Cludos"     , Pt: "+2"    , P: 150 , Cb: "160 (46.4)", T: 196.4};
     var player12 = { "#" : "12º" , "Membros" : "Hydra"      , Pt: "+2"    , P: 115 , Cb: "220 (63.8)", T: 178.8};


 
     var players = [player1, player2, player3, player4, player5, player6,player7,player8,player9,player10,player11,player12];
 
     return (
         <>
             <Navebar />
             <div className="w3-container w3-light-gray" style={{ textAlign: "center" }}>
                 <div className="w3-container w3-center" style={{ width: "60%", display: "inline-block" }}>
                     <h1 className="w3-center">Rankings do League of Legends Worlds Pick'em 2024</h1>
                     <div className="rankings-container">
                         <table className="rankings-table w3-table w3-centered w3-table-all w3-hoverable">
                             <thead>
                                 <tr>
                                     <th>#</th>
                                     <th>Membros</th>
                                     <th>Pts</th>
                                     <th>Total</th>
                                     <th>Picks</th>
                                     <th>Crystal Ball*</th>
                                 </tr>
                             </thead>
                             <tbody>
                                 {players.map((player, index) => (
                                     <tr key={index}>
                                         <td>{player["#"]}</td>
                                         <td>{player.Membros}</td>
                                         <td>{player.Pt}</td>
                                         <td>{player.T}</td>
                                         <td>{player.P}</td>
                                         <td>{player.Cb}</td>
                                     </tr>
                                 ))}
                             </tbody>
                         </table>
                     </div>
                 </div>
                 <div class="w3-container">
                     <br></br>
                     <p>
                       <b>Pts</b> - Pontos Ganhos | *Os pontos da Crystal Ball só valeram 29% 
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
 export default PickemsLOL;