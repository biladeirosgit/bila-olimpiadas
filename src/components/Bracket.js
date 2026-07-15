import React from 'react';
import './Bracket.css';

// Embed do Challonge. 9 paginas tem um; antes cada uma repetia o wrapper e o
// iframe a mao, com width/height fixos.
const Bracket = ({ title, src }) => (
    <section className="bracket">
        <h2 className="section-title">Brackets</h2>
        <div className="bracket-frame">
            <iframe title={title} src={src} loading="lazy" allowTransparency="true" />
        </div>
    </section>
);

export default Bracket;
