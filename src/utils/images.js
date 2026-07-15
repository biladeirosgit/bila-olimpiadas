// Todos os caminhos de imagem passam por aqui. Antes havia tres padroes
// espalhados pelo codigo -- relativo, e dois com o dominio absoluto
// `https://biladeirosgit.github.io/bila-olimpiadas/...` hardcoded, que carregava
// de um deploy externo em vez do proprio site.

const base = () => process.env.PUBLIC_URL;

// O nome do jogador e a chave do rankings.json e o nome do ficheiro:
// "Zé Afonso" -> /images/Zé Afonso.png. Os acentos sao intencionais.
export const avatarSrc = (name) => `${base()}/images/${name}.png`;

export const teamSrc = (name) => `${base()}/images/${name}.png`;

export const calendarSrc = (mes) => `${base()}/images/${mes}.png`;

export const logoSrc = () => `${base()}/logo.png`;

export const heroLogoSrc = () => `${base()}/images/logo2.png`;
