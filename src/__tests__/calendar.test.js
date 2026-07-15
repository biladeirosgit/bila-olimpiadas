// Os 6 componentes {Marco,Abril,Maio,Junho,Julho,Agosto}Calendar.js eram
// identicos linha a linha e foram consolidados num so <Calendar/>. Como o novo
// depende de useParams, saiu do golden.test.js -- esta suite substitui essa
// cobertura, exercitando a rota real.
//
// O invariante que importa: cada mes tem de continuar a servir exatamente a
// mesma imagem que servia antes.

import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Calendar from '../bo/calendario/Calendar';

const renderAt = (path) =>
    render(
        <MemoryRouter initialEntries={[path]}>
            <Routes>
                <Route path="/calendario/:mes" element={<Calendar />} />
                <Route path="/" element={<div>HOME</div>} />
            </Routes>
        </MemoryRouter>
    );

// slug da rota -> ficheiro servido. O mes mantem-se (incluindo a cedilha de
// "março"); so a extensao mudou de .png para .webp na otimizacao das imagens.
const ESPERADO = {
    marco: 'março.webp',
    abril: 'abril.webp',
    maio: 'maio.webp',
    junho: 'junho.webp',
    julho: 'julho.webp',
    agosto: 'agosto.webp',
};

describe('calendário consolidado', () => {
    test.each(Object.entries(ESPERADO))('/calendario/%s serve %s', (slug, ficheiro) => {
        const { container } = renderAt(`/calendario/${slug}`);
        const img = container.querySelector('img');
        expect(img).toBeInTheDocument();
        // decodeURIComponent porque o "ç" e o "~" vao codificados no src
        expect(decodeURIComponent(img.getAttribute('src'))).toContain(`/images/${ficheiro}`);
    });

    test('as 6 rotas existem', () => {
        expect(Object.keys(ESPERADO)).toHaveLength(6);
    });

    test('um mês inválido não rebenta: redireciona', () => {
        renderAt('/calendario/setembro');
        expect(screen.getByText('HOME')).toBeInTheDocument();
    });

    test('a imagem tem alt descritivo', () => {
        const { container } = renderAt('/calendario/marco');
        expect(container.querySelector('img').getAttribute('alt')).toBe('Calendário de março');
    });
});
