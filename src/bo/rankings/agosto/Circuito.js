import Navebar from "../../Navebar";
import Footer from "../../Footer";


const Circuito = () => {

    
     // Dados dos jogadores
     var player1 = { "#" : "🥇" , "Equipa": "Balance"          ,"Membros" : "Bárbara, Atlas & Geremias"       , "1º" : 11, "2º" : 3 , "3º" : 6, Pts: 45,  Pt: "+13" };
     var player2 = { "#" : "🥈" , "Equipa": "Anjos Caídos"           ,"Membros" : "Xadas, João Nuno & Braz"   , "1º" : 6 , "2º" : 6 , "3º" : 8, Pts: 38,  Pt: "+10" };
     var player3 = { "#" : "🥉" , "Equipa": "Faltou 3º Membro" ,"Membros" : "Wisdow & Areias"                 , "1º" : 4 , "2º" : 10, "3º" : 6, Pts: 38,  Pt: "+8"  };
 
     var players = [player1, player2, player3];

     var jogos = [
        { jogo : "Gravidade Zero"                       , "1º" : "Balance"                   , "2º" : "Faltou 3º Membro"    , "3º" : "Anjos Caídos"},
        { jogo : "Sanguessuga"                          , "1º" : "Anjos Caídos"              , "2º" : "Balance"             , "3º" : "Faltou 3º Membro"},
        { jogo : "Bottle Flip"                          , "1º" : "Anjos Caídos"              , "2º" : "Balance"             , "3º" : "Faltou 3º Membro"},
        { jogo : "Corrida de Corda e o Badalo"          , "1º" : "Balance"                   , "2º" : "Faltou 3º Membro"    , "3º" : "Anjos Caídos"},
        { jogo : "Percurso Banana e Laranja"            , "1º" : "Faltou 3º Membro"          , "2º" : "Anjos Caídos"        , "3º" : "Balance"},
        { jogo : "Derrubar torre de latas com elásticos", "1º" : "Balance & Faltou 3º Membro", "2º" :"-"                    , "3º" : "Anjos Caídos"},
        { jogo : "Separar m&m por cores"                , "1º" : "Balance"                   , "2º" : "Anjos Caídos"        , "3º" : "Faltou 3º Membro"},
        { jogo : "Sprint Final"                         , "1º" : "Balance"                   , "2º" : "Faltou 3º Membro"    , "3º" : "Anjos Caídos"},
        { jogo : "Pirâmide de Copos"                    , "1º" : "Anjos Caídos"              , "2º" : "Balance"             , "3º" : "Faltou 3º Membro"},
        { jogo : "Jogo da Bolacha"                      , "1º" : "Faltou 3º Membro"          , "2º" : "Anjos Caídos"        , "3º" : "Balance"},
        { jogo : "Derrubar copos com o sopro do balão"  , "1º" : "Balance"                   , "2º" : "Faltou 3º Membro"    , "3º" : "Anjos Caídos"},
        { jogo : "Procurar uvas na farinha"             , "1º" : "Balance"                   , "2º" : "Faltou 3º Membro"    , "3º" : "Anjos Caídos"},
        { jogo : "Corrida da colher e os ovos"          , "1º" : "Balance"                   , "2º" : "Faltou 3º Membro"    , "3º" : "Anjos Caídos"},
        { jogo : "Catapulta de colheres"                , "1º" : "Anjos Caídos"              , "2º" : "Faltou 3º Membro"    , "3º" : "Balance"},
        { jogo : "Puzzle de cereais"                    , "1º" : "Balance"                   , "2º" : "Anjos Caídos"        , "3º" : "Faltou 3º Membro"},
        { jogo : "Corrida dos pés atados"               , "1º" : "Anjos Caídos"              , "2º" : "Faltou 3º Membro"    , "3º" : "Balance"},
        { jogo : "Tirar as bolas da caixa"              , "1º" : "Faltou 3º Membro"          , "2º" : "Anjos Caídos"        , "3º" : "Balance"},
        { jogo : "Crossbar challenge"                   , "1º" : "Anjos Caídos"              , "2º" : "Faltou 3º Membro"    , "3º" : "Balance"},
        { jogo : "Encesta os copos"                     , "1º" : "Balance"                   , "2º" : "Anjos Caídos"        , "3º" : "Faltou 3º Membro"},
        { jogo : "Batalha de empilhar copos"            , "1º" : "Balance"                   , "2º" : "Faltou 3º Membro"    , "3º" : "Anjos Caídos"},
    ]
 
     return (
         <>
             <Navebar />
             <div className="w3-container w3-light-gray" style={{ textAlign: "center" }}>
                 <div className="w3-container w3-center" style={{ width: "60%", display: "inline-block" }}>
                     <h1 className="w3-center">Rankings do Circuito</h1>
                     <div className="rankings-container">
                         <table className="rankings-table w3-table w3-centered w3-table-all w3-hoverable">
                             <thead>
                                 <tr>
                                     <th>#</th>
                                     <th>Equipa</th>
                                     <th>Membros</th>
                                     <th>🥇</th>
                                     <th>🥈</th>
                                     <th>🥉</th>
                                     <th>Pontos Circuito</th>
                                     <th>Pontos Ganhos</th>
                                 </tr>
                             </thead>
                             <tbody>
                                 {players.map((player, index) => (
                                     <tr key={index}>
                                         <td>{player["#"]}</td>
                                         <td>{player.Equipa}</td>
                                         <td>{player.Membros}</td>
                                         <td>{player["1º"]}</td>
                                         <td>{player["2º"]}</td>
                                         <td>{player["3º"]}</td>
                                         <td>{player.Pts}</td>
                                         <td>{player.Pt}</td>
                                     </tr>
                                 ))}
                             </tbody>
                         </table>
                     </div>
                     <h1 className="w3-center">Tabela de Jogos do Circuito</h1>
                     <div className="rankings-container">
                         <table className="rankings-table w3-table w3-centered w3-table-all w3-hoverable">
                             <thead>
                                 <tr>
                                     <th>Nº</th>
                                     <th>Jogo</th>
                                     <th>🥇</th>
                                     <th>🥈</th>
                                     <th>🥉</th>
                                 </tr>
                             </thead>
                             <tbody>
                                 {jogos.map((jogo, index) => (
                                     <tr key={index}>
                                         <td>{index+1}</td>
                                         <td>{jogo.jogo}</td>
                                         <td>{jogo["1º"]}</td>
                                         <td>{jogo["2º"]}</td>
                                         <td>{jogo["3º"]}</td>
                                     </tr>
                                 ))}
                             </tbody>
                         </table>
                     </div>
                     <br></br>
                     <br></br>
                     <br></br>
                     <br></br>
                     <br></br>
                     <br></br>
                     <br></br>
                 </div>
             </div>
             
             <Footer />
         </>
     );
 }
 export default Circuito;