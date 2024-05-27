import Navebar from "../../Navebar";
import Footer from "../../Footer";


const Sueca = () => {

    return (
        <>
            <Navebar />
            <div className="w3-container w3-light-gray" style={{ textAlign: "center" }}>
                <div className="w3-container w3-center" style={{ width: "60%", display: "inline-block" }}>
                    <p><b>Ainda não finalizado!</b></p>
                </div>
                <br></br>
                <div class="w3-container">
                    <div class="w3-container w3-center" style={{width:"80%",display:"inline-block"}}>
                        <h1 class="w3-center">Brackets</h1>
                        <iframe src="https://challonge.com/pt/egpr25tn/module" width="100%" height="500" frameborder="0" scrolling="auto" allowtransparency="true"></iframe>
                    </div>
                </div>
            </div>
            
            
            <Footer />
        </>
    );
}
export default Sueca;