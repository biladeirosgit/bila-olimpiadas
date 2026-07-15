// Comportamento do Ranking Geral. Escrito ANTES do refactor dos filtros
// (leitura DOM imperativa -> estado controlado) para servir de oraculo: os
// numeros aqui foram capturados do codigo original.
//
// Os filtros liam-se com document.querySelectorAll(".amount input") e o
// atributo `rel` transportava o valor. Sao seletores de COMPORTAMENTO
// disfarcados de seletores de estilo: um rename "so visual" partia-os em
// silencio, sem erro nenhum. Esta suite e o alarme.

import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Rankings from '../bo/rankings/Rankings';

const renderRankings = () => render(<MemoryRouter><Rankings /></MemoryRouter>);

// Le a tabela principal: [rank, nome, pts, participacoes, media, 🥇, 🥈, 🥉]
const linhas = (container) =>
    [...container.querySelectorAll('tbody tr')]
        .filter((tr) => tr.querySelectorAll('td').length === 8)
        .map((tr) => [...tr.querySelectorAll('td')].map((td) => td.textContent.trim()));

const toggle = (container, rel) => {
    const input = container.querySelector(`input[rel="${rel}"]`);
    expect(input).toBeInTheDocument();
    fireEvent.click(input);
};

describe('Ranking Geral', () => {
    test('sem filtros: o topo e Squnha 167, Xadas 154, Cludos 130', () => {
        const { container } = renderRankings();
        const top3 = linhas(container).slice(0, 3);
        expect(top3.map((l) => [l[1], l[2]])).toEqual([
            ['Squnha', '167'],
            ['Xadas', '154'],
            ['Cludos', '130'],
        ]);
    });

    test('sem filtros: 53 jogadores', () => {
        const { container } = renderRankings();
        expect(linhas(container)).toHaveLength(53);
    });

    test('o Squnha tem 23 participacoes e 9 ouros', () => {
        const { container } = renderRankings();
        const squnha = linhas(container).find((l) => l[1] === 'Squnha');
        expect(squnha[3]).toBe('23');
        expect(squnha[5]).toBe('9');
    });

    test('filtrar por Março muda o topo para Wisdow 30', () => {
        const { container } = renderRankings();
        toggle(container, 'março');
        const top = linhas(container)[0];
        expect([top[1], top[2]]).toEqual(['Wisdow', '30']);
    });

    // A prova de que a leitura DOM e o estado controlado sao equivalentes:
    // concat + includes e pertenca a conjunto, logo a ordem dos cliques nao
    // pode afetar o resultado.
    test('a ordem dos filtros nao afeta o resultado', () => {
        const a = renderRankings();
        toggle(a.container, 'março');
        toggle(a.container, 'online');
        const resultadoA = linhas(a.container);

        const b = renderRankings();
        toggle(b.container, 'online');
        toggle(b.container, 'março');
        const resultadoB = linhas(b.container);

        expect(resultadoA).toEqual(resultadoB);
    });

    test('desmarcar um filtro repoe o resultado original', () => {
        const { container } = renderRankings();
        const antes = linhas(container);
        toggle(container, 'março');
        expect(linhas(container)).not.toEqual(antes);
        toggle(container, 'março');
        expect(linhas(container)).toEqual(antes);
    });

    test('ordenar por pontos mantem o Squnha no topo', () => {
        const { container } = renderRankings();
        fireEvent.change(container.querySelector('select'), { target: { value: 'pts' } });
        expect(linhas(container)[0][1]).toBe('Squnha');
    });

    test('clicar num jogador expande as participacoes', () => {
        const { container } = renderRankings();
        const linhaSqunha = [...container.querySelectorAll('tbody tr')].find((tr) =>
            tr.textContent.includes('Squnha')
        );
        fireEvent.click(linhaSqunha);
        expect(screen.getAllByText(/Participações/i).length).toBeGreaterThan(0);
    });

    test('a penalizacao do Lemos no AmongUs aparece', () => {
        const { container } = renderRankings();
        const linhaLemos = [...container.querySelectorAll('tbody tr')].find((tr) =>
            tr.textContent.includes('Lemos')
        );
        fireEvent.click(linhaLemos);
        expect(container.textContent).toMatch(/Penalização por faltar/);
    });
});
