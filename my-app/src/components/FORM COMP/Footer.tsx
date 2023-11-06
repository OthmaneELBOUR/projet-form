import React, { useEffect, useState } from 'react';

export const Footer: React.FC = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000); // Mettez à jour la date toutes les secondes

        return () => clearInterval(intervalId); // Nettoyez l'intervalle lors du démontage du composant
    }, []);

    // Options de formatage pour la date et l'heure
    const dateTimeFormatOptions: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false, // Utiliser le format 24 heures
    };

    const formattedDate = new Intl.DateTimeFormat('fr-FR', dateTimeFormatOptions).format(currentDate);

    return (
        <footer className='ml-15'>
            <div className="text-right">
                <strong>Copyright © 2023</strong><br />
                <p>{formattedDate}</p>
            </div>
        </footer>
    );
    }