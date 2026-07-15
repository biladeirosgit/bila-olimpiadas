import React from 'react';
import './PageShell.css';

// Substitui o wrapper que estava copy-pasted em 25 ficheiros:
//
//     <div className="w3-container w3-light-gray" style={{textAlign:"center"}}>
//       <div className="w3-container w3-center"
//            style={{width:"60%", display:"inline-block"}}>
//
// O `width:60%` inline confinava o conteudo a ~234px num telemovel de 390px.
const PageShell = ({ title, children }) => (
    <main className="page">
        {title && <h1 className="page-title">{title}</h1>}
        {children}
    </main>
);

// A legenda das abreviaturas explica a tabela que vem imediatamente antes dela,
// por isso e composta no sitio certo pela pagina em vez de ser um prop do
// PageShell -- um prop punha-a sempre no fim, e nas 9 paginas com brackets isso
// empurrava-a para depois do embed do Challonge.
export const Legend = ({ children }) => (
    <div className="page-legend">
        <p>{children}</p>
    </div>
);

export default PageShell;
