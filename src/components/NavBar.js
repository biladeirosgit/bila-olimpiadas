import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TOURNAMENTS, MONTHS } from '../data/tournaments';
import { logoSrc } from '../utils/images';
import './NavBar.css';

// A navbar antiga abria os submenus por `:hover` puro CSS (com a tecnica do
// left:-99999px). Em touch nao ha hover, logo os Rankings e o Calendario eram
// literalmente inacessiveis no telemovel. Aqui e tudo click-toggle: e a unica
// forma de funcionar nos dois sitios.
//
// A antiga tinha tambem 2 niveis de flyout (Rankings > mes > torneio). Passa a
// um so: um mega-menu com uma coluna por mes.

const byMonth = MONTHS.map((month) => ({
    month,
    items: TOURNAMENTS.filter((t) => t.month === month),
}));

const NavBar = () => {
    const location = useLocation();
    const [open, setOpen] = useState(null); // 'rankings' | 'calendario' | 'burger' | null
    const navRef = useRef(null);

    // Fechar ao navegar: sem isto o menu fica aberto por cima da pagina nova.
    useEffect(() => setOpen(null), [location.pathname]);

    useEffect(() => {
        const onKey = (e) => e.key === 'Escape' && setOpen(null);
        const onClick = (e) => {
            if (navRef.current && !navRef.current.contains(e.target)) setOpen(null);
        };
        document.addEventListener('keydown', onKey);
        document.addEventListener('mousedown', onClick);
        return () => {
            document.removeEventListener('keydown', onKey);
            document.removeEventListener('mousedown', onClick);
        };
    }, []);

    const toggle = (menu) => setOpen((cur) => (cur === menu ? null : menu));
    const isRanking = location.pathname.startsWith('/rankings');
    const isCalendar = location.pathname.startsWith('/calendario');

    return (
        <nav className="navbar" ref={navRef}>
            <div className="navbar-inner">
                <Link to="/" className="navbar-brand">
                    <img src={logoSrc()} alt="" className="navbar-logo" />
                    {/* O texto vai num so filho: o `gap` do .navbar-brand serve
                        para separar o logo, nao para abrir espaco no meio da
                        palavra. */}
                    <span className="brand-text">
                        <span className="brand-long">Bila-</span>
                        <span className="brand-accent">Olimpíadas</span>
                    </span>
                </Link>

                <button
                    className="navbar-burger"
                    aria-label="Menu"
                    aria-expanded={open === 'burger'}
                    onClick={() => toggle('burger')}
                >
                    <span />
                    <span />
                    <span />
                </button>

                <div className={`navbar-links${open === 'burger' ? ' is-open' : ''}`}>
                    <Link to="/" className={`navbar-link${location.pathname === '/' ? ' active' : ''}`}>
                        Home
                    </Link>

                    <div className="navbar-group">
                        <button
                            className={`navbar-link navbar-toggle${isRanking ? ' active' : ''}`}
                            aria-expanded={open === 'rankings'}
                            onClick={() => toggle('rankings')}
                        >
                            Rankings <span className="chevron">▾</span>
                        </button>
                        {open === 'rankings' && (
                            <div className="mega">
                                <Link to="/rankings" className="mega-featured">
                                    Ranking Geral
                                </Link>
                                <div className="mega-months">
                                    {byMonth.map(({ month, items }) => (
                                        <div className="mega-col" key={month}>
                                            <h3>{month}</h3>
                                            {items.map((t) => (
                                                <Link key={t.slug} to={`/rankings/${t.slug}`}>
                                                    {t.nav}
                                                </Link>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="navbar-group">
                        <button
                            className={`navbar-link navbar-toggle${isCalendar ? ' active' : ''}`}
                            aria-expanded={open === 'calendario'}
                            onClick={() => toggle('calendario')}
                        >
                            Calendário <span className="chevron">▾</span>
                        </button>
                        {open === 'calendario' && (
                            <div className="mega mega--narrow">
                                <div className="mega-col">
                                    {MONTHS.filter((m) => m !== 'outubro').map((m) => (
                                        <Link key={m} to={`/calendario/${m === 'março' ? 'marco' : m}`}>
                                            {m}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
