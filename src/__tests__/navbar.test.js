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

    // Antes escondia-se so o "Bila-" a 900px, e ate num tablet se lia
    // "Olimpíadas" sozinho. Agora e tudo-ou-nada: abaixo de 420px o
    // .brand-text inteiro sai e fica o logo, que continua a identificar o site.
    test('o nome nunca e cortado a meio: ou inteiro, ou so o logo', () => {
        const { container } = renderNav();
        const css = require('fs').readFileSync(
            require('path').join(__dirname, '../components/NavBar.css'),
            'utf8'
        );
        expect(css).not.toMatch(/\.brand-long\s*\{\s*display:\s*none/);
        expect(css).toMatch(/\.navbar-brand \.brand-text\s*\{\s*display:\s*none/);
        // e o logo tem de sobreviver para haver a que cair
        expect(container.querySelector('.navbar-logo')).toBeInTheDocument();
    });

    describe('voltar ao hub', () => {
        test('aponta para o hub dos Biladeiros', () => {
            const { container } = renderNav();
            expect(container.querySelector('.hub-link')).toHaveAttribute(
                'href',
                'https://biladeirosgit.github.io/'
            );
        });

        // O hub e OUTRO site: um <Link> do router tentaria navegar dentro
        // desta app e nunca la chegava.
        test('e um <a> normal, nao um Link do router', () => {
            const { container } = renderNav();
            const a = container.querySelector('.hub-link');
            expect(a.tagName).toBe('A');
            expect(a.getAttribute('href')).toMatch(/^https:\/\//);
        });

        // Abaixo de 900px o .hub-link-text e escondido por CSS. Sem o
        // aria-label, o link ficaria com nome acessivel vazio (a img e alt="").
        test('tem nome acessivel que sobrevive ao mobile', () => {
            const { container } = renderNav();
            const a = container.querySelector('.hub-link');
            expect(a.getAttribute('aria-label')).toBeTruthy();
            expect(a.querySelector('img').getAttribute('alt')).toBe('');
        });
    });

    test('as tabs de topo estao em ingles', () => {
        const { container } = renderNav();
        const tabs = [...container.querySelectorAll('.navbar-links > .navbar-link, .navbar-group > .navbar-link')]
            .map((n) => n.textContent.replace('▾', '').trim());
        expect(tabs).toEqual(['Home', 'Rankings', 'Calendar']);
    });
});
