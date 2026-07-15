import React from 'react';
import './PageShell.css';

// Substitui o wrapper que estava copy-pasted em 25 ficheiros:
//
//     <div className="w3-container w3-light-gray" style={{textAlign:"center"}}>
//       <div className="w3-container w3-center"
//            style={{width:"60%", display:"inline-block"}}>
//
// O `width:60%` inline confinava o conteudo a ~234px num telemovel de 390px.
const PageShell = ({ title, legend, children }) => (
    <main className="page">
        {title && <h1 className="page-title">{title}</h1>}
        {children}
        {legend && (
            <div className="page-legend">
                <p>{legend}</p>
            </div>
        )}
    </main>
);

export default PageShell;
