import React, { useState } from 'react';
import { User, saveToLocalStorage, getFromLocalStorage } from '../utils';

const Registration: React.FC = () => {
    const [formData, setFormData] = useState<User>({
        username: '',
        email: '',
        phoneNumber: '',
        address: '',
        pinCode: '',
        city: '',
        country: '',
        password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const users = getFromLocalStorage('users') || [];
        saveToLocalStorage('users', [...users, formData]);
        window.alert('Registration Successful');
    }

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="text" name="phoneNumber" placeholder="Phone Number" onChange={handleChange} required />
                <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
                <input type="text" name="pinCode" placeholder="Pin Code" onChange={handleChange} required />
                <input type="text" name="city" placeholder="City" onChange={handleChange} required />
                <input type="text" name="country" placeholder="Country" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Registration;
