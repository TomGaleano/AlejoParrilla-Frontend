import React, { useEffect, useState } from 'react';
import './loader.css'
import './Styles.css'



interface Restaurante {
    id: number;
    name: string;
    image: string;
    address: string;
    phone: string;
    description: string;
    schedule: string;
    url: string;
}
async function obtenerDatos(id: number): Promise<Restaurante | null> {
    try {
        const respuesta = await fetch('./json/restaurants.json');
        if (!respuesta.ok) {
            console.error('Error en la respuesta:', respuesta);
            return null;
        }
        const datos: Restaurante[] = await respuesta.json();
        const restaurante = datos.find(restaurante => restaurante.id === id);
        if (!restaurante) {
            console.error('No se encontró el restaurante con el id:', id);
        }
        return restaurante || null;
    } catch (error) {
        console.error('Error al obtener los datos:', error);
        return null;
    }
}

interface Props {
    id: number;
}
const DetallesRestaurante: React.FC<Props> = ({ id }) => {
    const [restaurante, setRestaurante] = useState<Restaurante | null>(null);
    useEffect(() => {
        obtenerDatos(id).then(setRestaurante);
    }, [id]);

    if (!restaurante) {
        return (
            <div className="spinner"></div>
        );
    }

    return (
        <div className="restaurant-card">
            <div className="restaurant-card-image" style={{backgroundImage:`url(${restaurante.image})`}}>
            </div>
            <div className="restaurant-card-text">
                <p className="h3"> {restaurante.name}</p>
                <p className="p">{restaurante.address}</p>
                <p className='p'>{restaurante.schedule}</p>
                <div className='restaurant-card-container-button'>
                    <button className="restaurant-card-button">
                        Teléfono
                    </button>
                    <button className="restaurant-card-button">
                        Ubicación
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DetallesRestaurante;