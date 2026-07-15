// Fonte unica da taxonomia dos torneios.
//
// Antes, a lista dos 24 torneios vivia em tres sitios (App.js, Navebar.js e a
// filtersList do Rankings.js) e adicionar um torneio obrigava a editar os
// tres. Este ficheiro substitui-os. E dados puros, sem imports, para nao
// criar ciclos.
//
// ATENCAO: `nav` e `key` sao campos SEPARADOS de proposito. Em dois casos o
// rotulo da navbar nao e igual a chave do rankings.json:
//     nav "Counter-Strike2 5x5" -> key "CounterStrike 2"
//     nav "Arenas LOL"          -> key "Arenas LoL"
// Unifica-los parte os filtros do Rankings em silencio, sem erro nenhum.
//
//   slug   : segmento da rota (/rankings/<slug>)
//   nav    : rotulo mostrado na navbar
//   key    : chave em rankings.json
//   month  : mes do torneio
//   amount : individual | duos | trios | grupo
//   format : online | presencial

export const TOURNAMENTS = [
    { slug: "bilatrecos",           nav: "Bilatrecos",                 key: "Bilatrecos",                 month: "março",    amount: "duos",        format: "presencial" },
    { slug: "tft",                  nav: "Teamfight Tactics",          key: "Teamfight Tactics",          month: "março",    amount: "individual",  format: "online" },
    { slug: "futbiladas",           nav: "Futbiladas",                 key: "Futbiladas",                 month: "março",    amount: "grupo",       format: "presencial" },
    { slug: "lol5x5",               nav: "League of Legends 5x5",      key: "League of Legends 5x5",      month: "março",    amount: "grupo",       format: "online" },
    { slug: "rocketleague",         nav: "Rocket League 3x3",          key: "Rocket League 3x3",          month: "abril",    amount: "trios",       format: "online" },
    { slug: "sueca",                nav: "Sueca",                      key: "Sueca",                      month: "abril",    amount: "duos",        format: "presencial" },
    { slug: "scribblio",            nav: "Scribbl.io",                 key: "Scribbl.io",                 month: "abril",    amount: "individual",  format: "online" },
    { slug: "brawlhalla",           nav: "Brawlhalla",                 key: "Brawlhalla",                 month: "maio",     amount: "individual",  format: "online" },
    { slug: "bilabilhar",           nav: "Bilabilhar",                 key: "Bilabilhar",                 month: "maio",     amount: "duos",        format: "presencial" },
    { slug: "cs25x5",               nav: "Counter-Strike2 5x5",        key: "CounterStrike 2",            month: "maio",     amount: "grupo",       format: "online" },
    { slug: "basquetiladas",        nav: "Basquetiladas",              key: "Basquetiladas",              month: "junho",    amount: "trios",       format: "presencial" },
    { slug: "overwatch2",           nav: "Overwatch 2",                key: "Overwatch 2",                month: "junho",    amount: "grupo",       format: "online" },
    { slug: "amongus",              nav: "AmongUs",                    key: "AmongUs",                    month: "junho",    amount: "individual",  format: "online" },
    { slug: "escaperoom",           nav: "EscapeRoom",                 key: "EscapeRoom",                 month: "junho",    amount: "grupo",       format: "presencial" },
    { slug: "bilapredictseuropeu",  nav: "Bilapredicts Europeu 2024",  key: "Bilapredicts Europeu 2024",  month: "junho",    amount: "individual",  format: "online" },
    { slug: "arenaslol",            nav: "Arenas LOL",                 key: "Arenas LoL",                 month: "julho",    amount: "duos",        format: "online" },
    { slug: "pingpong",             nav: "Ping Pong",                  key: "Ping Pong",                  month: "julho",    amount: "individual",  format: "presencial" },
    { slug: "volleyball",           nav: "Volleyball",                 key: "Volleyball",                 month: "julho",    amount: "trios",       format: "presencial" },
    { slug: "businesstour",         nav: "Business Tour",              key: "Business Tour",              month: "agosto",   amount: "individual",  format: "online" },
    { slug: "circuito",             nav: "Circuito",                   key: "Circuito",                   month: "agosto",   amount: "trios",       format: "presencial" },
    { slug: "dbd",                  nav: "DeadByDaylight",             key: "DeadByDaylight",             month: "agosto",   amount: "grupo",       format: "online" },
    { slug: "minecraftminigames",   nav: "Minecraft Minigames",        key: "Minecraft Minigames",        month: "agosto",   amount: "individual",  format: "online" },
    { slug: "batalhanaval",         nav: "Batalha Naval",              key: "Batalha Naval",              month: "agosto",   amount: "grupo",       format: "presencial" },
    { slug: "lolpickems",           nav: "LOL Worlds 2024 Pick'em",    key: "LOL Worlds 2024 Pick'em",    month: "outubro",  amount: "individual",  format: "online" },
];

export const MONTHS = ["março","abril","maio","junho","julho","agosto","outubro"];
export const AMOUNTS = ['individual', 'duos', 'trios', 'grupo'];
export const FORMATS = ['online', 'presencial'];

// Reconstroi a filtersList que o Rankings.js usava. Ha um teste que prova que
// o resultado e identico a lista hardcoded original.
export const buildFiltersList = () => {
    const byGroup = (field, value) => TOURNAMENTS.filter((t) => t[field] === value).map((t) => t.key);
    const out = { todos: TOURNAMENTS.map((t) => t.key) };
    MONTHS.forEach((m) => { out[m] = byGroup('month', m); });
    AMOUNTS.forEach((a) => { out[a] = byGroup('amount', a); });
    FORMATS.forEach((f) => { out[f] = byGroup('format', f); });
    return out;
};
