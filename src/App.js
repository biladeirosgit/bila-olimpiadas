// src/App.js

import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Layout from './components/Layout';
import NotFound from './bo/NotFound';
import BilaOlimpiadasPage from './bo/BilaOlimpiadasPage';
import Rankings from './bo/rankings/Rankings';
import Calendar from './bo/calendario/Calendar';

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
import ArenasLOL from './bo/rankings/julho/ArenasLOL';
import PingPong from './bo/rankings/julho/PingPong';
import Volleyball from './bo/rankings/julho/Volleyball';
import BusinessTour from './bo/rankings/agosto/BusinessTour';
import Circuito from './bo/rankings/agosto/Circuito';
import DeadByDaylight from './bo/rankings/agosto/DeadByDaylight';
import MinecraftMinigames from './bo/rankings/agosto/MinecraftMinigames';
import BatalhaNaval from './bo/rankings/agosto/BatalhaNaval';
import PickemsLOL from './bo/rankings/outubro/PickemsLOL';

// slug -> componente. Os slugs sao a fonte unica (data/tournaments.js); ha um
// teste que prova que este mapa e essa lista nao divergem.
export const TOURNAMENT_PAGES = {
    bilatrecos: Bilatrecos,
    tft: TFT,
    futbiladas: Futbiladas,
    lol5x5: LOL5x5,
    rocketleague: RocketLeague3x3,
    scribblio: Scribblio,
    sueca: Sueca,
    brawlhalla: Brawlhalla,
    bilabilhar: Bilabilhar,
    cs25x5: CounterStrike5x5,
    basquetiladas: Basquetiladas,
    overwatch2: Overwatch,
    amongus: AmongUs,
    escaperoom: EscapeRoom,
    bilapredictseuropeu: BilapredictsEuropeu,
    arenaslol: ArenasLOL,
    pingpong: PingPong,
    volleyball: Volleyball,
    businesstour: BusinessTour,
    circuito: Circuito,
    dbd: DeadByDaylight,
    minecraftminigames: MinecraftMinigames,
    batalhanaval: BatalhaNaval,
    lolpickems: PickemsLOL,
};

const App = () => (
    <HashRouter>
        <Routes>
            <Route element={<Layout />}>
                <Route path="" element={<BilaOlimpiadasPage />} />
                <Route path="/rankings" element={<Rankings />} />
                {Object.entries(TOURNAMENT_PAGES).map(([slug, Page]) => (
                    <Route key={slug} path={`/rankings/${slug}`} element={<Page />} />
                ))}
                <Route path="/calendario/:mes" element={<Calendar />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    </HashRouter>
);

export default App;
