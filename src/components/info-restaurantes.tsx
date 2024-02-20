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
    isSelected: boolean;
}
const DetallesRestaurante: React.FC<Props> = ({ id, isSelected }) => {
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
        <div className="restaurant-card" style={isSelected ? {border:'var(--color-our-orange) 2px solid'}:{}}>
            <div className="restaurant-card-image" style={ isSelected ? { backgroundImage: `url(${restaurante.image})`, opacity:.8,display:'flex',alignItems:'center', justifyContent:'center' }: {backgroundImage: `url(${restaurante.image})`}}  >
                <h3 style={isSelected ? { display:'block', color:'var(--color-our-orange)'} : {display:'none'}}>Seleccionado</h3>
            </div>
            <div className="restaurant-card-text">
                <p className="h3"> {restaurante.name}</p>
                <p className="p">{restaurante.address}</p>
                <p className='p'>{restaurante.schedule}</p>
                <div className='restaurant-card-container-button'>
                    <a type='button' className="restaurant-card-button" href={`tel:${restaurante.phone}`}>
                        Teléfono
                    </a>
                    <a type='button' className="restaurant-card-button" href={restaurante.url} target="_blank" rel="noopener noreferrer">
                        Ubicación
                    </a>
                </div>
            </div>
        </div>
    );
};

export default DetallesRestaurante;