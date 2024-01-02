import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export interface RegisterProps {
    className?: string;
    children?: React.ReactNode;
}

export const Register = ({
    className = "",
    children = null,
}: RegisterProps) => {
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
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/register`, userData);
            console.log(response.data);
            navigate("/login");
        } catch (error) {
            console.error("Error during registration:", error);
        }
    };

    return (
        <div className={`text-center ${className}`}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', margin: '0 auto' }}>
                <label>
                    Tu nombre:
                    <input name="first_name" value={userData.first_name} onChange={handleChange} placeholder="Tu nombre" />
                </label>
                <label>
                    Tu apellido:
                    <input name="last_name" value={userData.last_name} onChange={handleChange} placeholder="Tu apellido" />
                </label>
                <label>
                    Email:
                    <input name="email" type="email" value={userData.email} onChange={handleChange} placeholder="Email" />
                </label>
                <label>
                    Contraseña:
                    <input name="password" type="password" value={userData.password} onChange={handleChange} placeholder="Contraseña" />
                </label>
                <label>
                    Número de teléfono:
                    <input name="phone" type="number" value={userData.phone} onChange={handleChange} placeholder="Número de teléfono" />
                </label>
                <button type="submit" style={{ marginTop: '20px' }}>Regístrate</button>
            </form>
            {children}
        </div>
    );
};