import Navebar from "../../Navebar";
import Footer from "../../Footer";


const DeadByDaylight = () => {

    
    var player1 = { "#" : "🥇" , Equipa: "B", Membros : "Squnha, Geremias, Cludos & Areias"  , Pt: "+8"};
    var player2 = { "#" : "🥈" , Equipa: "A", Membros : "Xadas, Braz, Atlas & Mestre Gui"    , Pt: "+4" };
    
    var players = [player1, player2];


    var rondas = [
        {ronda: 1, pontosA: "12 [2*]", pontosB: "12 [4*]", killerA: "Braz", killerB: "Squnha"},
        {ronda: 2, pontosA: "9", pontosB: "12", killerA: "Mestre Gui", killerB: "Geremias"},
        {ronda: 3, pontosA: "3", pontosB: "6", killerA: "Xadas", killerB: "Areias"},
        {ronda: 4, pontosA: "NR", pontosB: "NR", killerA: "Atlas", killerB: "Cludos"},
    ]

    return (
        <>
            <Navebar />
             <div className="w3-container w3-light-gray" style={{ textAlign: "center" }}>
                 <div className="w3-container w3-center" style={{ width: "60%", display: "inline-block" }}>
                     <h1 className="w3-center">Rankings do Dead By Daylight</h1>
                     <div className="rankings-container">
                         <table className="rankings-table w3-table w3-centered w3-table-all w3-hoverable">
                             <thead>
                                 <tr>
                                     <th>#</th>
                                     <th>Equipas</th>
                                     <th>Membros</th>
                                     <th>Pts</th>
                                 </tr>
                             </thead>
                             <tbody>
                                 {players.map((player, index) => (
                                     <tr key={index}>
                                         <td>{player["#"]}</td>
                                         <td>{player.Equipa}</td>
                                         <td>{player.Membros}</td>
                                         <td>{player.Pt}</td>
                                     </tr>
                                 ))}
                             </tbody>
                         </table>
                     </div>
                 </div>
                 <div className="w3-container">
                     <br></br>
                     <p>
                       <b>Pts</b> - Pontos Ganhos
                     </p>
                 </div>
                 <br></br>
                 <div className="w3-container w3-center" style={{ width: "60%", display: "inline-block" }}>
                    <div className="rankings-container">
                         <table className="rankings-table w3-table w3-centered w3-table-all w3-hoverable">
                             <thead>
                                 <tr>
                                     <th>Ronda #</th>
                                     <th>Killer A</th>
                                     <th>Pontos A</th>
                                     <th></th>
                                     <th>Pontos A</th>
                                     <th>Killer B</th>
                                 </tr>
                             </thead>
                             <tbody>
                                 {rondas.map((ronda, index) => (
                                     <tr key={index}>
                                         <td>{ronda.ronda}</td>
                                         <td>{ronda.killerA}</td>
                                         <td>{ronda.pontosA}</td>
                                         <td>-</td>
                                         <td>{ronda.pontosB}</td>
                                         <td>{ronda.killerB}</td>
                                     </tr>
                                 ))}
                             </tbody>
                         </table>
                     </div>
                     <div className="w3-container">
                     <br></br>
                     <p>
                       <b>[N*]</b> - Geradores da Equipa Concertados (1º Critério de Desempate)
                     </p>
                       <p><b>NR</b> - Não Realizado</p>
                 </div>
                 </div>
                 <br></br>
                 <br></br>
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
export default DeadByDaylight;