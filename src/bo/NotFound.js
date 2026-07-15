import React from 'react';
import { Link } from 'react-router-dom';
import PageShell from '../components/PageShell';

// Nao havia rota de 404: qualquer URL errado dava uma pagina em branco.
const NotFound = () => (
    <PageShell title="Página não encontrada">
        <p style={{ textAlign: 'center', color: 'var(--color-text-secondary)' }}>
            Esta página não existe. <Link to="/">Voltar ao início</Link>
        </p>
    </PageShell>
);

export default NotFound;
