// GOLDEN MASTER — rede de seguranca da reestruturacao visual.
//
// Fotografa o CONTEUDO de cada pagina (texto das celulas, titulos, imagens,
// iframes), nao a sua estrutura. E imune a mudancas de classes, wrappers e
// <br>, mas qualquer posicao, nome ou ponto que se mexa aparece aqui.
//
// Depois do commit que gera o .snap, `npm test -- -u` passa a exigir
// justificacao escrita no commit: cada -u e uma declaracao de "mudei o que o
// utilizador ve, de proposito".

import React from 'react';
import { render } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';

// A Navebar e o Footer sao mockados de proposito: sem isto, o snapshot
// pre-refactor incluiria o lixo deles em text/headings/images, e quando o
// <Layout> os retirar das paginas esses campos mudavam em massa, afogando
// qualquer regressao real. Com os mocks, a migracao para <Layout> e invisivel
// ao teste. ATENCAO: quando o Navebar.js/Footer.js forem apagados, estas duas
// linhas tem de sair NO MESMO COMMIT ou o jest rebenta com "Cannot find module".
jest.mock('../bo/Navebar', () => () => null);
jest.mock('../bo/Footer', () => () => null);

import BilaOlimpiadasPage from '../bo/BilaOlimpiadasPage';
import Rankings from '../bo/rankings/Rankings';

import Bilatrecos from '../bo/rankings/marco/Bilatrecos';
import TFT from '../bo/rankings/marco/TFT';
import Futbiladas from '../bo/rankings/marco/Futbiladas';
import LOL5x5 from '../bo/rankings/marco/LOL5x5';

import RocketLeague3x3 from '../bo/rankings/abril/RocketLeague3x3';
import Scribblio from '../bo/rankings/abril/Scribblio';
import Sueca from '../bo/rankings/abril/Sueca';

import Bilabilhar from '../bo/rankings/maio/Bilabilhar';
import Brawlhalla from '../bo/rankings/maio/Brawlhalla';
import CounterStrike5x5 from '../bo/rankings/maio/CounterStrike5x5';

import Basquetiladas from '../bo/rankings/junho/Basquetiladas';
import Overwatch from '../bo/rankings/junho/Overwatch';
import AmongUs from '../bo/rankings/junho/Amongus';
import EscapeRoom from '../bo/rankings/junho/EscapeRoom';
import BilapredictsEuropeu from '../bo/rankings/junho/BilapredictsEuropeu';

import ArenasLOL from '../bo/rankings/julho/ArenasLOL';
import PingPong from '../bo/rankings/julho/PingPong';
import Volleyball from '../bo/rankings/julho/Volleyball';

import BusinessTour from '../bo/rankings/agosto/BusinessTour';
import Circuito from '../bo/rankings/agosto/Circuito';
import DeadByDaylight from '../bo/rankings/agosto/DeadByDaylight';
import MinecraftMinigames from '../bo/rankings/agosto/Minecraft Minigames';
import BatalhaNaval from '../bo/rankings/agosto/BatalhaNaval';

import PickemsLOL from '../bo/rankings/outubro/PickemsLOL';

import MarcoCalendar from '../bo/calendario/MarcoCalendar';
import AbrilCalendar from '../bo/calendario/AbrilCalendar';
import MaioCalendar from '../bo/calendario/MaioCalendar';
import JunhoCalendar from '../bo/calendario/JunhoCalendar';
import JulhoCalendar from '../bo/calendario/JulhoCalendar';
import AgostoCalendar from '../bo/calendario/AgostoCalendar';

const TOURNAMENT_PAGES = {
    Bilatrecos, TFT, Futbiladas, LOL5x5,
    RocketLeague3x3, Scribblio, Sueca,
    Bilabilhar, Brawlhalla, CounterStrike5x5,
    Basquetiladas, Overwatch, AmongUs, EscapeRoom, BilapredictsEuropeu,
    ArenasLOL, PingPong, Volleyball,
    BusinessTour, Circuito, DeadByDaylight, MinecraftMinigames, BatalhaNaval,
    PickemsLOL,
};

const OTHER_PAGES = {
    BilaOlimpiadasPage, Rankings,
    MarcoCalendar, AbrilCalendar, MaioCalendar, JunhoCalendar, JulhoCalendar, AgostoCalendar,
};

const ALL_PAGES = { ...TOURNAMENT_PAGES, ...OTHER_PAGES };

const norm = (s) => s.replace(/\s+/g, ' ').trim();

const snapshot = (container) => ({
    headings: [...container.querySelectorAll('h1,h2,h3,h4,h5')]
        .map((n) => `${n.tagName}: ${norm(n.textContent)}`),
    // O invariante duro. A Navebar e um <ul> e o Footer um <div>+<h3>: nenhum
    // contem <table>, logo isto devolve so tabelas de pagina, antes e depois.
    // Este campo tem de ficar identico do principio ao fim do refactor.
    tables: [...container.querySelectorAll('table')].map((t) =>
        [...t.querySelectorAll('tr')].map((tr) =>
            [...tr.querySelectorAll('th,td')].map((c) => norm(c.textContent))
        )
    ),
    images: [...container.querySelectorAll('img')].map((i) => [i.getAttribute('alt'), i.getAttribute('src')]),
    iframes: [...container.querySelectorAll('iframe')].map((f) => [f.getAttribute('title'), f.getAttribute('src')]),
    text: norm(container.textContent),
});

const renderPage = (Page) => render(<HashRouter><Page /></HashRouter>).container;

describe.each(Object.entries(ALL_PAGES))('%s', (name, Page) => {
    test('conteudo inalterado', () => {
        expect(snapshot(renderPage(Page))).toMatchSnapshot();
    });
});

// Invariantes explicitos: se o snapshot alguma vez for regenerado por engano,
// estes continuam a apanhar o essencial.
describe('invariantes', () => {
    test('as 24 paginas de torneio renderizam', () => {
        expect(Object.keys(TOURNAMENT_PAGES)).toHaveLength(24);
    });

    test('cada pagina de torneio tem conteudo', () => {
        Object.entries(TOURNAMENT_PAGES).forEach(([name, Page]) => {
            expect(norm(renderPage(Page).textContent).length).toBeGreaterThan(0);
        });
    });

    test('contagem de tabelas por pagina', () => {
        const counts = Object.fromEntries(
            Object.entries(TOURNAMENT_PAGES).map(([name, Page]) => [
                name,
                renderPage(Page).querySelectorAll('table').length,
            ])
        );
        expect(counts).toMatchSnapshot();
    });

    test('total de celulas por pagina de torneio', () => {
        const cells = Object.fromEntries(
            Object.entries(TOURNAMENT_PAGES).map(([name, Page]) => [
                name,
                renderPage(Page).querySelectorAll('td').length,
            ])
        );
        expect(cells).toMatchSnapshot();
    });
});
