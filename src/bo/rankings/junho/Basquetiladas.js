import Navebar from "../../Navebar";
import Footer from "../../Footer";


const Basquetiladas = () => {

    
    var player1 = { "#" : "1º" ,Nome: "BrotherZ in PaRiS"        , Membros : "Hydra, Lekky & Squnha"          , Pt: "+8"};
    var player2 = { "#" : "2º" ,Nome: "Winners Queue"            , Membros : "Gelly,  Tone & Lemos"           , Pt: "+6"};
    var player3 = { "#" : "3º" ,Nome: "Douradinhos de Frango"    , Membros : "Braz, Escher & Atlas"           , Pt: "+4"};
    var player4 = { "#" : "4º" ,Nome: "Falamos no FIFA"          , Membros : "Wisdow, Cludos & Sardoal"       , Pt: "+3"};
    var player5 = { "#" : "5º" ,Nome: "Frazão sobre Rodas"       , Membros : "Frazão, Bárbara & Xadas"        , Pt: "+2"};
    var player6 = { "#" : "5º" ,Nome: "O Verdadeiro Cunha"       , Membros : "Mestre Gui, Geremias & Alcunha" , Pt: "+2"};
    
    var players = [player1, player2, player3, player4, player5, player6];

    return (
        <>
            <Navebar />
            <div className="w3-container w3-light-gray" style={{ textAlign: "center" }}>
                <div className="w3-container w3-center" style={{ width: "60%", display: "inline-block" }}>
                    <p><b>Ainda não realizado!</b></p>
                </div>
            </div>
            
            <Footer />
        </>
    );
}
export default Basquetiladas;