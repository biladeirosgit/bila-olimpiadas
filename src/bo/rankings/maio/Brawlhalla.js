import Navebar from "../../Navebar";
import Footer from "../../Footer";


const Brawlhalla = () => {

    
     // Dados dos jogadores
     var player1 = { "#" : "1º" , "Membros" : "Gelly"        , Pt: "+13"   , R: "5-1" };
     var player2 = { "#" : "2º" , "Membros" : "Wisdow"       , Pt: "+10"   , R: "3-1" };
     var player3 = { "#" : "3º" , "Membros" : "Cludos"       , Pt: "+8"    , R: "3-2" };
     var player4 = { "#" : "4º" , "Membros" : "XSitlo"       , Pt: "+6"    , R: "2-2" };
     var player5 = { "#" : "5º" , "Membros" : "Mestre Gui"   , Pt: "+5"    , R: "1-2" };
     var player6 = { "#" : "5º" , "Membros" : "Xadas"        , Pt: "+5"    , R: "1-2" };
     var player7 = { "#" : "7º" , "Membros" : "Geremias"     , Pt: "+4"    , R: "1-2" };
     var player8 = { "#" : "7º" , "Membros" : "Hydra"        , Pt: "+4"    , R: "0-2" };
     var player9 = { "#" : "7º" , "Membros" : "Squnha"       , Pt: "+4"    , R: "0-2" };
 
     var players = [player1, player2, player3, player4, player5, player6,player7,player8,player9];
 
     return (
         <>
             <Navebar />
             <div className="w3-container w3-light-gray" style={{ textAlign: "center" }}>
                 <div className="w3-container w3-center" style={{ width: "60%", display: "inline-block" }}>
                     <h1 className="w3-center">Rankings do Brawlhalla</h1>
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
                 <div class="w3-container">
                     <br></br>
                     <p>
                       <b>Pts</b> - Pontos Ganhos | <b>R</b> - Resultados
                     </p>
                 </div>
                 <br></br>
                 <div class="w3-container">
                     <div class="w3-container w3-center" style={{width:"80%",display:"inline-block"}}>
                         <h1 class="w3-center">Brackets</h1>
                         <iframe title="Brawlhalla" src="https://challonge.com/223j79z7/module" width="100%" height="500" frameborder="0" scrolling="auto" allowtransparency="true"></iframe>
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
 export default Brawlhalla;