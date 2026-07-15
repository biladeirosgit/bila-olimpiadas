// Todos os caminhos de imagem passam por aqui. Antes havia tres padroes
// espalhados pelo codigo -- relativo, e dois com o dominio absoluto
// `https://biladeirosgit.github.io/bila-olimpiadas/...` hardcoded, que carregava
// de um deploy externo em vez do proprio site.

const base = () => process.env.PUBLIC_URL;

// O nome do jogador e a chave do rankings.json e o nome do ficheiro:
// "Zé Afonso" -> /images/Zé Afonso.png. Os acentos sao intencionais.
export const avatarSrc = (name) => `${base()}/images/${name}.png`;

export const teamSrc = (name) => `${base()}/images/${name}.png`;

// Os calendarios sao fotografias de um cartaz: em PNG pesavam 2.4-3.7 MB cada,
// em WebP pesam ~90 kB. Sao referenciados so por aqui.
export const calendarSrc = (mes) => `${base()}/images/${mes}.webp`;

export const logoSrc = () => `${base()}/logo.png`;

export const heroLogoSrc = () => `${base()}/images/logo2.png`;
