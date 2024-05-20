// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import MarcoCalendar from './bo/calendario/MarcoCalendar';
import AbrilCalendar from './bo/calendario/AbrilCalendar';
import MaioCalendar from './bo/calendario/MaioCalendar';



const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/bila-olimpiadas" element={<BilaOlimpiadasPage />} />
                <Route path="/bila-olimpiadas/rankings" element={<Rankings />} />
                <Route path="/bila-olimpiadas/rankings/bilatrecos" element={<Bilatrecos />} />
                <Route path="/bila-olimpiadas/rankings/tft" element={<TFT />} />
                <Route path="/bila-olimpiadas/rankings/futbiladas" element={<Futbiladas />} />
                <Route path="/bila-olimpiadas/rankings/lol5x5" element={<LOL5x5 />} />
                <Route path="/bila-olimpiadas/rankings/rocketleague" element={<RocketLeague3x3 />} />
                <Route path="/bila-olimpiadas/rankings/scribblio" element={<Scribblio />} />
                <Route path="/bila-olimpiadas/rankings/sueca" element={<Sueca />} />
                <Route path="/bila-olimpiadas/rankings/brawlhalla" element={<Brawlhalla />} />
                <Route path="/bila-olimpiadas/rankings/bilabilhar" element={<Bilabilhar />} />
                <Route path="/bila-olimpiadas/rankings/cs25x5" element={<CounterStrike5x5 />} />
                <Route path="/bila-olimpiadas/rankings/basquetiladas" element={<Basquetiladas />} />

                <Route path="/bila-olimpiadas/calendar/marco" element={<MarcoCalendar />} />
                <Route path="/bila-olimpiadas/calendar/abril" element={<AbrilCalendar />} />
                <Route path="/bila-olimpiadas/calendar/maio" element={<MaioCalendar />} />
                {/* Adicione outras rotas aqui */}
            </Routes>
        </Router>
    );
}

export default App;