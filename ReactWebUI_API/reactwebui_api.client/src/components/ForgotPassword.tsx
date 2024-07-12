/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { getFromLocalStorage } from '../utils';
import { useHistory } from 'react-router-dom';

const ForgotPassword: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const history = useHistory();

    const handleForgotPassword = (e: React.FormEvent) => {
        e.preventDefault();
        const users = getFromLocalStorage('users') || [];
        const user = users.find((user: any) => user.email === email);
        if (user) {
            // Here we can send the reset link or password to the user's email.
            window.alert('Password reset link has been sent to your email');
            history.push('/login');
        } else {
            window.alert('Email not found');
        }
    }

    return (
        <div>
            <h2>Forgot Password</h2>
            <form onSubmit={handleForgotPassword}>
                <input type="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ForgotPassword;
