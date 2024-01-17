import React, { useEffect, useState } from 'react';
import './loader.css'
import './Inicio.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


interface Schedule {
    [day: string]: string;
}
interface Restaurante {
    id: number;
    name: string;
    image: string;
    address: string;
    phone: string;
    description: string;
    schedule: Schedule;
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
        <div className="restaurant_card">
            <img className="restaurant_section_image" src={restaurante.image} alt={restaurante.name} />
            <h2 className="restaurant_title">{restaurante.name}</h2>
            <p className="restaurant_address">{restaurante.address}</p>
            <div className="restaurant_button_container"style={{'padding':'10px', 'display':'flex', 'flexWrap':'wrap', 'justifyContent':'space-between'}}>
                <a href={`tel:+57${restaurante.phone}`} style={{'minWidth':'20px'}}>
                    <button className="restaurant_button" >
                        <span className="restaurant_button_content">
                            <FontAwesomeIcon icon={faPhone} />
                            <span>Llámanos</span>
                        </span>
                    </button>
                </a>
                <a href={restaurante.url} target="_blank" rel="noopener noreferrer" style={{'minWidth':'20px'}}>
                    <button className="restaurant_button">
                        <span className="restaurant_button_content">
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                            <span>Visítanos</span>
                        </span>
                    </button>
                </a>
            </div>
        </div>
    );
};

export default DetallesRestaurante;