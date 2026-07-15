// A homepage era navbar + 1 imagem + footer. Agora calcula KPIs a partir do
// rankings.json em runtime, por isso os numeros ficam travados aqui.

import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BilaOlimpiadasPage from '../bo/BilaOlimpiadasPage';

const renderHome = () => render(<MemoryRouter><BilaOlimpiadasPage /></MemoryRouter>);

describe('homepage', () => {
    test('os 6 KPIs batem certo com o rankings.json', () => {
        const { container } = renderHome();
        const kpis = [...container.querySelectorAll('.kpi-tile')].map((t) => [
            t.querySelector('.kpi-value').textContent,
            t.querySelector('.kpi-label').textContent,
        ]);
        expect(kpis).toEqual([
            ['24', 'Torneios'],
            ['53', 'Jogadores'],
            ['298', 'Participações'],
            ['1770', 'Pontos'],
            ['179', 'Medalhas'],
            ['7', 'Meses'],
        ]);
    });

    test('nenhum KPI diz NaN ou undefined', () => {
        const { container } = renderHome();
        expect(container.textContent).not.toMatch(/NaN|undefined/);
    });

    // As participacoes da homepage (298) sao MENOS que o `pr` da tabela de
    // Rankings (302): a tabela conta os 4 registos com Lugar "-", que sao de
    // quem nao participou. Nao "corrigir" o pr -- mudaria valores visiveis.
    test('participacoes exclui os 4 registos com Lugar "-"', () => {
        const { container } = renderHome();
        const part = [...container.querySelectorAll('.kpi-tile')]
            .find((t) => t.querySelector('.kpi-label').textContent === 'Participações')
            .querySelector('.kpi-value').textContent;
        expect(part).toBe('298');
    });

    test('o podio mostra os 5 primeiros', () => {
        const { container } = renderHome();
        const podio = [...container.querySelectorAll('.podio li')].map((li) => [
            li.querySelector('.podio-lugar').textContent,
            li.querySelector('.podio-nome').textContent,
            li.querySelector('strong').textContent,
        ]);
        expect(podio).toEqual([
            ['🥇', 'Squnha', '167'],
            ['🥈', 'Xadas', '154'],
            ['🥉', 'Cludos', '130'],
            ['4º', 'Geremias', '127'],
            ['5º', 'Wisdow', '106'],
        ]);
    });

    test('so os 3 primeiros levam medalha', () => {
        const { container } = renderHome();
        const lugares = [...container.querySelectorAll('.podio-lugar')];
        expect(lugares.filter((l) => /[🥇🥈🥉]/u.test(l.textContent))).toHaveLength(3);
        expect(lugares.filter((l) => l.classList.contains('podio-lugar--num'))).toHaveLength(2);
    });

    test('o Squnha lidera os ouros com 9', () => {
        const { container } = renderHome();
        const primeiro = container.querySelectorAll('.insight-card')[1].querySelectorAll('li')[0];
        expect(primeiro.textContent).toBe('Squnha9 🥇');
    });

    test('as medalhas somam 179 (69+66+44)', () => {
        const { container } = renderHome();
        const card = [...container.querySelectorAll('.insight-card')].find(
            (c) => c.querySelector('h2').textContent === 'Medalhas distribuídas'
        );
        const ns = [...card.querySelectorAll('strong')].map((s) => Number(s.textContent));
        expect(ns).toEqual([69, 66, 44]);
        expect(ns.reduce((a, b) => a + b)).toBe(179);
    });

    test('tem CTA para o ranking geral', () => {
        renderHome();
        expect(screen.getByText('Ver Ranking Geral').closest('a')).toHaveAttribute('href', '/rankings');
    });
});
