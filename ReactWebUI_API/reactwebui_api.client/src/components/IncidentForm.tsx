import React, { useState } from 'react';
import { Incident, saveToLocalStorage, getFromLocalStorage, generateIncidentId } from '../utils';

const IncidentForm: React.FC = () => {
    const [formData, setFormData] = useState<Incident>({
        id: generateIncidentId(),
        reporter: '',
        details: '',
        reportedDate: new Date().toISOString(),
        priority: 'Low',
        status: 'Open'
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const incidents = getFromLocalStorage('incidents') || [];
        saveToLocalStorage('incidents', [...incidents, formData]);
        window.alert('Incident Created Successfully');
    }

    return (
        <div>
            <h2>Create Incident</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="reporter" placeholder="Reporter" onChange={handleChange} required />
                <textarea name="details" placeholder="Incident Details" onChange={handleChange} required />
                <input type="datetime-local" name="reportedDate" value={formData.reportedDate} onChange={handleChange} required />
                <select name="priority" onChange={handleChange} required>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
                <select name="status" onChange={handleChange} required>
                    <option value="Open">Open</option>
                    <option value="In progress">In progress</option>
                    <option value="Closed">Closed</option>
                </select>
                <button type="submit">Create</button>
            </form>
        </div>
    );
}

export default IncidentForm;
