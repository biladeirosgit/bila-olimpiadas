// Prova que o mapa slug->componente do App.js e a fonte unica
// (data/tournaments.js) nao divergem. Antes, adicionar um torneio obrigava a
// editar o App.js, a Navebar.js e a filtersList do Rankings.js -- e nada
// impedia que ficassem dessincronizados.

import { TOURNAMENT_PAGES } from '../App';
import { TOURNAMENTS } from '../data/tournaments';

describe('rotas vs fonte unica', () => {
    test('todos os torneios da fonte unica tem pagina', () => {
        const comPagina = Object.keys(TOURNAMENT_PAGES).sort();
        const naFonte = TOURNAMENTS.map((t) => t.slug).sort();
        expect(comPagina).toEqual(naFonte);
    });

    test('sao 24 paginas de torneio', () => {
        expect(Object.keys(TOURNAMENT_PAGES)).toHaveLength(24);
    });

    test('nenhuma pagina e undefined (import partido)', () => {
        Object.entries(TOURNAMENT_PAGES).forEach(([slug, Page]) => {
            expect(Page).toBeDefined();
            expect(typeof Page).toBe('function');
        });
    });
});
