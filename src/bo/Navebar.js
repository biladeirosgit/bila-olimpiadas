

import React from 'react';
import { Link } from 'react-router-dom';
import './Navebar.css'


const Navebar = () => {
    return (
        <>
        <ul className="nav site-nav">
            <li><img src="https://biladeirosgit.github.io/bila-olimpiadas/logo.png" alt="logo" style= {{width:"auto", height: "60px"}}/></li>
            <li><Link to={"/"}>Home</Link></li>
            <li className='flyout'>
                <a>Rankings</a>
                <ul className="flyout-content nav stacked">
                    <li><Link to={"/rankings"}>Geral</Link></li>
                    <li className="flyout-alt">
                        <a>Março</a>
                        <ul className="flyout-content nav stacked">
                            <li><Link to={"/rankings/bilatrecos"}>        <div className="w3-bar-item w3-button">Bilatrecos           </div></Link></li>
                            <li><Link to={"/rankings/tft"}>               <div className="w3-bar-item w3-button">Teamfight Tactics    </div></Link></li>
                            <li><Link to={"/rankings/futbiladas"}>        <div className="w3-bar-item w3-button">Futbiladas           </div></Link></li>
                            <li><Link to={"/rankings/lol5x5"}>            <div className="w3-bar-item w3-button">League of Legends 5x5</div></Link></li>
                        </ul>
                    </li>
                    <li className="flyout-alt">
                        <a>Abril</a>
                        <ul className="flyout-content nav stacked">
                            <li><Link to={"/rankings/rocketleague"}>        <div className="w3-bar-item w3-button">Rocket League 3x3 </div></Link></li>
                            <li><Link to={"/rankings/sueca"}>               <div className="w3-bar-item w3-button">Sueca             </div></Link></li>
                            <li><Link to={"/rankings/scribblio"}>           <div className="w3-bar-item w3-button">Scribbl.io        </div></Link></li>
                        </ul>
                    </li>
                    <li className="flyout-alt">
                        <a>Maio</a>
                        <ul className="flyout-content nav stacked">
                            <li><Link to={"/rankings/brawlhalla"}>        <div className="w3-bar-item w3-button">Brawlhalla          </div></Link></li>
                            <li><Link to={"/rankings/bilabilhar"}>        <div className="w3-bar-item w3-button">Bilabilhar          </div></Link></li>
                            <li><Link to={"/rankings/cs25x5"}>               <div className="w3-bar-item w3-button">Counter-Strike2 5x5 </div></Link></li>
                        </ul>
                    </li>
                    <li className="flyout-alt">
                        <a>Junho</a>
                        <ul className="flyout-content nav stacked">
                            <li><Link to={"/rankings/basquetiladas"}>        <div className="w3-bar-item w3-button">Basquetiladas      </div></Link></li>
                            <li><Link to={"/rankings/overwatch2"}>           <div className="w3-bar-item w3-button">Overwatch 2        </div></Link></li>
                            <li><Link to={"/rankings/amongus"}>              <div className="w3-bar-item w3-button">AmongUs            </div></Link></li>
                            <li><Link to={"/rankings/escaperoom"}>           <div className="w3-bar-item w3-button">EscapeRoom         </div></Link></li>
                            <li><Link to={"/rankings/bilapredictseuropeu"}>           <div className="w3-bar-item w3-button">Bilapredicts Europeu 2024</div></Link></li>
                        </ul>
                    </li>
                    <li className="flyout-alt">
                        <a>Julho</a>
                        <ul className="flyout-content nav stacked">
                            <li><Link to={"/rankings/arenaslol"}>        <div className="w3-bar-item w3-button">Arenas LOL</div></Link></li>
                            <li><Link to={"/rankings/pingpong"}>        <div className="w3-bar-item w3-button">Ping Pong</div></Link></li>
                            <li><Link to={"/rankings/volleyball"}>        <div className="w3-bar-item w3-button">Volleyball</div></Link></li>
                        </ul>
                    </li>
                    <li className="flyout-alt">
                        <a>Agosto</a>
                        <ul className="flyout-content nav stacked">
                            <li><Link to={"/rankings/businesstour"}>        <div className="w3-bar-item w3-button">Business Tour</div></Link></li>
                            <li><Link to={"/rankings/circuito"}>        <div className="w3-bar-item w3-button">Circuito</div></Link></li>
                            <li><Link to={"/rankings/dbd"}>        <div className="w3-bar-item w3-button">DeadByDaylight</div></Link></li>
                            <li><Link to={"/rankings/minecraftminigames"}>        <div className="w3-bar-item w3-button">Minecraft Minigames</div></Link></li>
                            <li><Link to={"/rankings/batalhanaval"}>        <div className="w3-bar-item w3-button">Batalha Naval</div></Link></li>
                        </ul>
                    </li>
                    <li className="flyout-alt">
                        <a>Outubro</a>
                        <ul className="flyout-content nav stacked">
                            <li><Link to={"/rankings/lolpickems"}>        <div className="w3-bar-item w3-button">LOL Worlds 2024 Pick'em</div></Link></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li className='flyout'>
                <a>Calendário</a>
                <ul className="flyout-content nav stacked">
                    <li><Link to={"/calendario/marco"}>Março</Link></li>
                    <li><Link to={"/calendario/abril"}>Abril</Link></li>
                    <li><Link to={"/calendario/maio"}>Maio</Link></li>
                    <li><Link to={"/calendario/junho"}>Junho</Link></li>
                    <li><Link to={"/calendario/julho"}>Julho</Link></li>
                    <li><Link to={"/calendario/agosto"}>Agosto</Link></li>
                </ul>
            </li>
        </ul>
        </> 
    )
}

export default Navebar