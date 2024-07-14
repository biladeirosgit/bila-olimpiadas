import Navebar from "../../Navebar";
import Footer from "../../Footer";


const BilapredictsEuropeu = () => {

    
     // Dados dos jogadores
     var player1  = { "#" : "1º" , "Membros" : "Xadas"         , Pt: "+13"   , T: 1040, Mp: 430, Tb: 610};
     var player2  = { "#" : "2º" , "Membros" : "Squnha"        , Pt: "+10"   , T: 1035, Mp: 405, Tb: 630};
     var player3  = { "#" : "3º" , "Membros" : "Bárbara"       , Pt: "+8"    , T: 1000, Mp: 310, Tb: 690};
     var player4  = { "#" : "4º" , "Membros" : "Alcunha"       , Pt: "+6"    , T: 963 , Mp: 333, Tb: 630};
     var player5  = { "#" : "5º" , "Membros" : "Cludos"        , Pt: "+5"    , T: 910 , Mp: 390, Tb: 520};
     var player6  = { "#" : "6º" , "Membros" : "Wisdow"        , Pt: "+5"    , T: 864 , Mp: 344, Tb: 520};
     var player7  = { "#" : "7º" , "Membros" : "Geremias"      , Pt: "+4"    , T: 836 , Mp: 336, Tb: 500};
     var player8  = { "#" : "8º" , "Membros" : "Mestre Gui"    , Pt: "+4"    , T: 793 , Mp: 333, Tb: 460};
     var player9  = { "#" : "9º" , "Membros" : "João Nuno"     , Pt: "+3"    , T: 640 , Mp: 0  , Tb: 640};
     var player10 = { "#" : "10º" , "Membros" : "Sardoal"      , Pt: "+3"    , T: 637 , Mp: 287, Tb: 350};
     var player11 = { "#" : "11º" , "Membros" : "Gelly"        , Pt: "+2"    , T: 609 , Mp: 289, Tb: 320};
     var player12 = { "#" : "12º" , "Membros" : "Frazão"       , Pt: "+2"    , T: 540 , Mp: 0  , Tb: 540};
     var player13 = { "#" : "13º" , "Membros" : "Lekky"        , Pt: "+2"    , T: 469 , Mp: 199, Tb: 270};
     var player14 = { "#" : "14º" , "Membros" : "Hydra"        , Pt: "+2"    , T: 446 , Mp: 66 , Tb: 380};


 
     var players = [player1, player2, player3, player4, player5, player6,player7,player8,player9,player10,player11,player12,player13,player14];
 
     return (
         <>
             <Navebar />
             <div className="w3-container w3-light-gray" style={{ textAlign: "center" }}>
                 <div className="w3-container w3-center" style={{ width: "60%", display: "inline-block" }}>
                     <h1 className="w3-center">Rankings do Bilapredicts Europeu 2024</h1>
                     <div className="rankings-container">
                         <table className="rankings-table w3-table w3-centered w3-table-all w3-hoverable">
                             <thead>
                                 <tr>
                                     <th>#</th>
                                     <th>Membros</th>
                                     <th>Pts</th>
                                     <th>Total</th>
                                     <th>Match Predictor</th>
                                     <th>Tournament Bracket</th>
                                 </tr>
                             </thead>
                             <tbody>
                                 {players.map((player, index) => (
                                     <tr key={index}>
                                         <td>{player["#"]}</td>
                                         <td>{player.Membros}</td>
                                         <td>{player.Pt}</td>
                                         <td>{player.T}</td>
                                         <td>{player.Mp}</td>
                                         <td>{player.Tb}</td>
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
                 <br></br>
                 <br></br>
                 <br></br>
                 <br></br>
             </div>
             
             <Footer />
         </>
     );
 }
 export default BilapredictsEuropeu;