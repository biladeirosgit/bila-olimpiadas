import React from 'react';
import './Footer.css';

// "2024" e o rotulo da EDICAO (março-outubro de 2024), nao um copyright.
// Torna-lo dinamico com new Date().getFullYear() mostraria o ano corrente e
// seria introduzir um bug, nao corrigir um.
const Footer = () => (
    <footer className="footer">
        <p>Bila-Olimpíadas 2024</p>
    </footer>
);

export default Footer;
