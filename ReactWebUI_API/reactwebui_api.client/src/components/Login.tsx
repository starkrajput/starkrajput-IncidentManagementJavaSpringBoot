/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { getFromLocalStorage, saveToLocalStorage } from '../utils';
import { useHistory } from 'react-router-dom';

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const history = useHistory();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        const users = getFromLocalStorage('users') || [];
        const user = users.find((user: any) => user.email === email && user.password === password);
        if (user) {
            saveToLocalStorage('currentUser', user);
            history.push('/incidents');
        } else {
            window.alert('Invalid credentials');
        }
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input type="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
