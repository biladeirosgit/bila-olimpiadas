

import React from 'react';
import { Link } from 'react-router-dom';
import './Navebar.css'


const Navebar = () => {
    return (
        <>
        <ul className="nav site-nav">
            <li><img src="bila-olimpiadas/images/logo.png" alt="logo" style= {{width:"auto", height: "60px"}}/></li>
            <li><Link to={"/bila-olimpiadas/"}>Home</Link></li>
            <li className='flyout'>
                <a>Rankings</a>
                <ul className="flyout-content nav stacked">
                    <li><Link to={"/bila-olimpiadas/rankings"}>Geral</Link></li>
                    <li className="flyout-alt">
                        <a>Março</a>
                        <ul className="flyout-content nav stacked">
                            <li><Link to={"/bila-olimpiadas/rankings/bilatrecos"}>        <div className="w3-bar-item w3-button">Bilatrecos           </div></Link></li>
                            <li><Link to={"/bila-olimpiadas/rankings/tft"}>               <div className="w3-bar-item w3-button">Teamfight Tactics    </div></Link></li>
                            <li><Link to={"/bila-olimpiadas/rankings/futbiladas"}>        <div className="w3-bar-item w3-button">Futbiladas           </div></Link></li>
                            <li><Link to={"/bila-olimpiadas/rankings/lol5x5"}>            <div className="w3-bar-item w3-button">League of Legends 5x5</div></Link></li>
                        </ul>
                    </li>
                    <li className="flyout-alt">
                        <a>Abril</a>
                        <ul className="flyout-content nav stacked">
                            <li><Link to={"/bila-olimpiadas/rankings/rocketleague"}>        <div className="w3-bar-item w3-button">Rocket League 3x3 </div></Link></li>
                            <li><Link to={"/bila-olimpiadas/rankings/sueca"}>               <div className="w3-bar-item w3-button">Sueca             </div></Link></li>
                            <li><Link to={"/bila-olimpiadas/rankings/scribblio"}>           <div className="w3-bar-item w3-button">Scribbl.io        </div></Link></li>
                        </ul>
                    </li>
                    <li className="flyout-alt">
                        <a>Maio</a>
                        <ul className="flyout-content nav stacked">
                            <li><Link to={"/bila-olimpiadas/rankings/brawlhalla"}>        <div className="w3-bar-item w3-button">Brawlhalla          </div></Link></li>
                            <li><Link to={"/bila-olimpiadas/rankings/bilabilhar"}>        <div className="w3-bar-item w3-button">Bilabilhar          </div></Link></li>
                            <li><Link to={"/bila-olimpiadas/rankings/cs25x5"}>               <div className="w3-bar-item w3-button">Counter-Strike2 5x5 </div></Link></li>
                        </ul>
                    </li>
                    <li className="flyout-alt">
                        <a>Junho</a>
                        <ul className="flyout-content nav stacked">
                            <li><Link to={"/bila-olimpiadas/rankings/basquetiladas"}>        <div className="w3-bar-item w3-button">Basquetiladas          </div></Link></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li className='flyout'>
                <a>Calendário</a>
                <ul className="flyout-content nav stacked">
                    <li><Link to={"/bila-olimpiadas/calendario/marco"}>Março</Link></li>
                    <li><Link to={"/bila-olimpiadas/calendario/abril"}>Abril</Link></li>
                    <li><Link to={"/bila-olimpiadas/calendario/maio"}>Maio</Link></li>
                </ul>
            </li>
        </ul>
        </> 
    )
}

export default Navebar