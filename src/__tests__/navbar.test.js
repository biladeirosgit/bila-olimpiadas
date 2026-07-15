import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavBar from '../components/NavBar';

const renderNav = () => render(<MemoryRouter><NavBar /></MemoryRouter>);

describe('navbar', () => {
    // O `gap: 10px` do .navbar-brand aplicava-se a todos os filhos, logo abria
    // espaco no meio da palavra: lia-se "Bila Olimpíadas". O texto passou a ir
    // num so filho, e o traco entrou.
    test('a marca le-se "Bila-Olimpíadas", sem espaco e com traco', () => {
        const { container } = renderNav();
        expect(container.querySelector('.navbar-brand').textContent).toBe('Bila-Olimpíadas');
    });

    test('o texto da marca vive num so filho do .navbar-brand', () => {
        const { container } = renderNav();
        const filhos = [...container.querySelector('.navbar-brand').children];
        // o logo + um unico wrapper de texto
        expect(filhos.map((f) => f.tagName)).toEqual(['IMG', 'SPAN']);
        expect(filhos[1]).toHaveClass('brand-text');
    });

    test('em mobile some "Bila-" e sobra "Olimpíadas"', () => {
        const { container } = renderNav();
        // A regra e CSS (@media max-width:900px -> .brand-long { display:none })
        // mas a estrutura tem de a suportar: o traco vai COM o "Bila-".
        expect(container.querySelector('.brand-long').textContent).toBe('Bila-');
        expect(container.querySelector('.brand-accent').textContent).toBe('Olimpíadas');
    });
});
