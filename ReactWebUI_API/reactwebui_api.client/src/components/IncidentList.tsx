import React, { useState, useEffect } from 'react';
import { Incident, getFromLocalStorage } from '../utils';

const IncidentList: React.FC = () => {
    const [incidents, setIncidents] = useState<Incident[]>([]);

    useEffect(() => {
        const fetchedIncidents = getFromLocalStorage('incidents') || [];
        setIncidents(fetchedIncidents);
    }, []);

    return (
        <div>
            <h2>Incident List</h2>
            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                        {incident.id} - {incident.details} ({incident.status})
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default IncidentList;
