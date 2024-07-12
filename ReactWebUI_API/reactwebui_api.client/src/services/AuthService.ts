// src/services/AuthService.ts
import axios from 'axios';

const apiUrl = 'https://localhost:7271/api/';
// https://localhost:7271/api/Auth/login
const AuthService = {
    register: async function (email: string, password: string, name: string, age: string, gender: string,role:string) {
        try {
            const response = await axios.post(apiUrl + 'Auth/register', { email, password, name, age, gender ,role});
            return response.data;
        } catch (error) {
            console.error('Registration failed:', error);
            return { success: false, message: 'Registration failed' };
        }
    },

    login: async function (email: string, password: string) {
        try {
            const response = await axios.post(apiUrl + 'Auth/login', { email, password });
            return response.data.token;
        } catch (error) {
            console.error('Login failed:', error);
            return null;
        }
    },

    sendOtpByEmail: async function (email: string) {
        try {
            const response = await axios.post(apiUrl + 'Auth/send-otp', { email });
            return response.data;
        } catch (error) {
            console.error('Failed to send OTP:', error);
            return { success: false, message: 'Failed to send OTP' };
        }
    },

    verifyOtp: async function (email: string, otp: string) {
        try {
            const response = await axios.post(apiUrl + 'Auth/verify-otp', { email, otp });
            return response.data.token;
        } catch (error) {
            console.error('OTP verification failed:', error);
            return null;
        }
    },

    // Implement other methods like updateProfile, resetPassword, etc.
};

export default AuthService;
