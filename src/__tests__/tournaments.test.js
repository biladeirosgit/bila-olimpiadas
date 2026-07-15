// Prova que a fonte unica (src/data/tournaments.js) reproduz exatamente a
// filtersList que estava hardcoded no Rankings.js. Sem isto, derivar a lista
// seria um ato de fe -- e os filtros partem em silencio, sem erro nenhum.

import { TOURNAMENTS, buildFiltersList } from '../data/tournaments';
import rankingsjson from '../bo/rankings/rankings.json';

// Copia CONGELADA da filtersList original, tal como estava no Rankings.js
// antes do refactor. Nao editar: e o oraculo.
const FILTERS_LIST_ORIGINAL = {
    todos: ['Bilatrecos', 'Teamfight Tactics', 'Futbiladas', 'League of Legends 5x5', 'Rocket League 3x3', 'Sueca', 'Scribbl.io', 'Brawlhalla', 'Bilabilhar', 'CounterStrike 2', 'Basquetiladas', 'Overwatch 2', 'AmongUs', 'EscapeRoom', 'Bilapredicts Europeu 2024', 'Arenas LoL', 'Ping Pong', 'Volleyball', 'Business Tour', 'Circuito', 'DeadByDaylight', 'Minecraft Minigames', 'Batalha Naval', "LOL Worlds 2024 Pick'em"],
    'março': ['Bilatrecos', 'Teamfight Tactics', 'Futbiladas', 'League of Legends 5x5'],
    abril: ['Rocket League 3x3', 'Sueca', 'Scribbl.io'],
    maio: ['Brawlhalla', 'Bilabilhar', 'CounterStrike 2'],
    junho: ['Basquetiladas', 'Overwatch 2', 'AmongUs', 'EscapeRoom', 'Bilapredicts Europeu 2024'],
    julho: ['Arenas LoL', 'Ping Pong', 'Volleyball'],
    agosto: ['Business Tour', 'Circuito', 'DeadByDaylight', 'Minecraft Minigames', 'Batalha Naval'],
    outubro: ["LOL Worlds 2024 Pick'em"],
    duos: ['Bilatrecos', 'Sueca', 'Bilabilhar', 'Arenas LoL'],
    trios: ['Basquetiladas', 'Rocket League 3x3', 'Volleyball', 'Circuito'],
    grupo: ['Futbiladas', 'League of Legends 5x5', 'CounterStrike 2', 'Overwatch 2', 'EscapeRoom', 'DeadByDaylight', 'Batalha Naval'],
    individual: ['Teamfight Tactics', 'Scribbl.io', 'Brawlhalla', 'AmongUs', 'Bilapredicts Europeu 2024', 'Ping Pong', 'Business Tour', 'Minecraft Minigames', "LOL Worlds 2024 Pick'em"],
    online: ['Teamfight Tactics', 'League of Legends 5x5', 'Scribbl.io', 'Rocket League 3x3', 'Brawlhalla', 'CounterStrike 2', 'Overwatch 2', 'AmongUs', 'Bilapredicts Europeu 2024', 'Arenas LoL', 'Business Tour', 'DeadByDaylight', 'Minecraft Minigames', "LOL Worlds 2024 Pick'em"],
    presencial: ['Bilatrecos', 'Futbiladas', 'Sueca', 'Bilabilhar', 'Basquetiladas', 'EscapeRoom', 'Ping Pong', 'Volleyball', 'Circuito', 'Batalha Naval'],
};

const sorted = (o) => Object.fromEntries(Object.entries(o).map(([k, v]) => [k, [...v].sort()]));

describe('fonte unica dos torneios', () => {
    test('a filtersList derivada e identica a original', () => {
        // Ordenado: os grupos sao conjuntos, a ordem nunca foi significativa.
        expect(sorted(buildFiltersList())).toEqual(sorted(FILTERS_LIST_ORIGINAL));
    });

    test('sao 24 torneios', () => {
        expect(TOURNAMENTS).toHaveLength(24);
    });

    test('todas as chaves existem no rankings.json', () => {
        const noJson = new Set();
        Object.values(rankingsjson).forEach((t) => Object.keys(t).forEach((k) => noJson.add(k)));
        TOURNAMENTS.forEach((t) => expect([...noJson]).toContain(t.key));
    });

    test('o json nao tem torneios sem entrada na fonte unica', () => {
        const noJson = new Set();
        Object.values(rankingsjson).forEach((t) => Object.keys(t).forEach((k) => noJson.add(k)));
        const conhecidos = new Set(TOURNAMENTS.map((t) => t.key));
        expect([...noJson].filter((k) => !conhecidos.has(k))).toEqual([]);
    });

    test('slugs e chaves sao unicos', () => {
        expect(new Set(TOURNAMENTS.map((t) => t.slug)).size).toBe(24);
        expect(new Set(TOURNAMENTS.map((t) => t.key)).size).toBe(24);
    });

    test('cada torneio tem exatamente um mes, um amount e um format', () => {
        TOURNAMENTS.forEach((t) => {
            expect(t.month).toBeTruthy();
            expect(['individual', 'duos', 'trios', 'grupo']).toContain(t.amount);
            expect(['online', 'presencial']).toContain(t.format);
        });
    });

    // Os dois casos onde o rotulo da navbar diverge da chave do json. Se
    // alguem os "unificar", os filtros partem sem dar erro -- este teste e o
    // alarme.
    test('nav e key divergem exatamente nos 2 casos conhecidos', () => {
        const divergentes = TOURNAMENTS.filter((t) => t.nav !== t.key).map((t) => [t.nav, t.key]);
        expect(divergentes).toEqual([
            ['Counter-Strike2 5x5', 'CounterStrike 2'],
            ['Arenas LOL', 'Arenas LoL'],
        ]);
    });
});
