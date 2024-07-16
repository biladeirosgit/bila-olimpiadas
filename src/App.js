// src/App.js

import React from 'react';
import { Routes, Route, HashRouter } from "react-router-dom";
import BilaOlimpiadasPage from './bo/BilaOlimpiadasPage';
import Rankings from './bo/rankings/Rankings';
import Bilatrecos from './bo/rankings/marco/Bilatrecos';
import TFT from './bo/rankings/marco/TFT';
import Futbiladas from './bo/rankings/marco/Futbiladas';
import LOL5x5 from './bo/rankings/marco/LOL5x5';
import RocketLeague3x3 from './bo/rankings/abril/RocketLeague3x3';
import Scribblio from './bo/rankings/abril/Scribblio';
import Sueca from './bo/rankings/abril/Sueca';

import Bilabilhar from './bo/rankings/maio/Bilabilhar';
import Brawlhalla from './bo/rankings/maio/Brawlhalla';
import CounterStrike5x5 from './bo/rankings/maio/CounterStrike5x5';
import Basquetiladas from './bo/rankings/junho/Basquetiladas';
import Overwatch from './bo/rankings/junho/Overwatch';
import AmongUs from './bo/rankings/junho/Amongus';
import EscapeRoom from './bo/rankings/junho/EscapeRoom';
import BilapredictsEuropeu from './bo/rankings/junho/BilapredictsEuropeu';

import MarcoCalendar from './bo/calendario/MarcoCalendar';
import AbrilCalendar from './bo/calendario/AbrilCalendar';
import MaioCalendar from './bo/calendario/MaioCalendar';
import JunhoCalendar from './bo/calendario/JunhoCalendar';
import JulhoCalendar from './bo/calendario/JulhoCalendar';
import ArenasLOL from './bo/rankings/julho/ArenasLOL';



const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="" element={<BilaOlimpiadasPage />} />
                <Route path="/rankings" element={<Rankings />} />
                <Route path="/rankings/bilatrecos" element={<Bilatrecos />} />
                <Route path="/rankings/tft" element={<TFT />} />
                <Route path="/rankings/futbiladas" element={<Futbiladas />} />
                <Route path="/rankings/lol5x5" element={<LOL5x5 />} />
                <Route path="/rankings/rocketleague" element={<RocketLeague3x3 />} />
                <Route path="/rankings/scribblio" element={<Scribblio />} />
                <Route path="/rankings/sueca" element={<Sueca />} />
                <Route path="/rankings/brawlhalla" element={<Brawlhalla />} />
                <Route path="/rankings/bilabilhar" element={<Bilabilhar />} />
                <Route path="/rankings/cs25x5" element={<CounterStrike5x5 />} />
                <Route path="/rankings/basquetiladas" element={<Basquetiladas />} />
                <Route path="/rankings/overwatch2" element={<Overwatch />} />
                <Route path="/rankings/amongus" element={<AmongUs />} />
                <Route path="/rankings/escaperoom" element={<EscapeRoom />} />
                <Route path="/rankings/arenaslol" element={<ArenasLOL />} />
                <Route path="/rankings/bilapredictseuropeu" element={<BilapredictsEuropeu />} />

                <Route path="/calendario/marco" element={<MarcoCalendar />} />
                <Route path="/calendario/abril" element={<AbrilCalendar />} />
                <Route path="/calendario/maio" element={<MaioCalendar />} />
                <Route path="/calendario/junho" element={<JunhoCalendar />} />
                <Route path="/calendario/julho" element={<JulhoCalendar />} />
                {/* Adicione outras rotas aqui */}
            </Routes>
        </HashRouter>
    );
}

export default App;