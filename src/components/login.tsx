import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export interface LoginProps {
    className?: string;
    children?: React.ReactNode;
}

export const Login = ({
    className = "",
    children = null,
}: LoginProps) => {
    const [userData, setUserData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        phone: ""
    });

    const navigate = useNavigate();

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/login`, userData,{
                withCredentials: true});
            console.log(response.data);
            localStorage.setItem("user", JSON.stringify(response?.data?.user));
            navigate("/home");
        } catch (error) {
            console.error("Error during login:", error);
        }
    };

    return (
        <div className={`text-center ${className}`}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', margin: '0 auto' }}>
                <label>
                    Email:
                    <input name="email" type="email" value={userData.email} onChange={handleChange} placeholder="Email" />
                </label>
                <label>
                    Password:
                    <input name="password" type="password" value={userData.password} onChange={handleChange} placeholder="Password" />
                </label>
                <button type="submit" style={{ marginTop: '20px' }}>Inicia sesión</button>
            </form>
            {children}
        </div>
    );
};