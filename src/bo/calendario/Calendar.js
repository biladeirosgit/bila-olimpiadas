import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import PageShell from '../../components/PageShell';
import { calendarSrc } from '../../utils/images';
import './Calendar.css';

// Substitui os 6 componentes {Marco,Abril,Maio,Junho,Julho,Agosto}Calendar.js,
// que eram identicos linha a linha e so diferiam no nome do mes da imagem.
//
// A rota usa "marco" (sem cedilha) mas o ficheiro chama-se "março.png".
const SLUG_TO_MES = {
    marco: 'março',
    abril: 'abril',
    maio: 'maio',
    junho: 'junho',
    julho: 'julho',
    agosto: 'agosto',
};

const Calendar = () => {
    const { mes } = useParams();
    const nome = SLUG_TO_MES[mes];

    if (!nome) return <Navigate to="/" replace />;

    return (
        <PageShell title={`Calendário de ${nome}`}>
            <div className="calendar">
                <img src={calendarSrc(nome)} alt={`Calendário de ${nome}`} />
            </div>
        </PageShell>
    );
};

export default Calendar;
