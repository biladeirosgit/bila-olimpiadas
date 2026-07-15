import React from 'react';
import './RankingTable.css';

// Tabela de ranking generica. Uma coluna e um par [rotulo, acessor]:
//
//     ['Nome']                  -> atalho: o rotulo e a chave
//     ['Pts', 'Pt']             -> <th>Pts</th>, celula = row['Pt']
//     ['Nº', (row, i) => i + 1] -> celula calculada (aceita JSX)
//
// O par [rotulo, chave] E a camada de normalizacao: desacopla o rotulo da
// chave, por pagina. E por isso que as 24 paginas podem ter 24 esquemas
// diferentes (`Nome`/`Membros`/`Equipa`/`Duo`, `Pt` vs `Pts`) sem que seja
// preciso mexer num unico objeto de dados -- o que seria destrutivo: no
// Circuito, `Pt` e `Pts` coexistem e significam coisas diferentes.
//
// A lista e explicita e ordenada de proposito. Uma API baseada em
// Object.keys(row) partiria o PickemsLOL, onde a ordem dos <th> nao
// corresponde a ordem das chaves do objeto.

const cell = (accessor, row, i) => (typeof accessor === 'function' ? accessor(row, i) : row[accessor]);

const RankingTable = ({ columns, rows }) => (
    <div className="table-scroll">
        <table className="ranking-table">
            <thead>
                <tr>
                    {columns.map(([label], c) => (
                        <th key={c}>{label}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, i) => (
                    <tr key={i}>
                        {columns.map(([label, accessor = label], c) => (
                            <td key={c}>{cell(accessor, row, i)}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default RankingTable;
