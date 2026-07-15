import React from 'react';
import './Bracket.css';

// Embed do Challonge. 9 paginas tem um; antes cada uma repetia o wrapper e o
// iframe a mao, com width/height fixos. O `heading` e configuravel porque o
// Volleyball chama-lhe "Resultados" e nao "Brackets".
const Bracket = ({ title, src, heading = 'Brackets' }) => (
    <section className="bracket">
        <h2 className="section-title">{heading}</h2>
        <div className="bracket-frame">
            <iframe title={title} src={src} loading="lazy" allowTransparency="true" />
        </div>
    </section>
);

export default Bracket;
