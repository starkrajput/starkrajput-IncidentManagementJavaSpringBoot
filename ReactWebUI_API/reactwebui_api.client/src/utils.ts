/* eslint-disable @typescript-eslint/no-explicit-any */
// Utilities for localStorage simulation and common functions
export interface User {
    username: string;
    email: string;
    phoneNumber: string;
    address: string;
    pinCode: string;
    city: string;
    country: string;
    password: string;
}

export interface Incident {
    id: string;
    reporter: string;
    details: string;
    reportedDate: string;
    priority: 'High' | 'Medium' | 'Low';
    status: 'Open' | 'In progress' | 'Closed';
}

export const saveToLocalStorage = (key: string, data: any) => {
    localStorage.setItem(key, JSON.stringify(data));
}

export const getFromLocalStorage = (key: string) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

export const generateIncidentId = (): string => {
    const randomNumber = Math.floor(10000 + Math.random() * 90000);
    return `RMG${randomNumber}${new Date().getFullYear()}`;
}
