import React, { useEffect, useState } from 'react';
import './loader.css'
import './Styles.css'


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
        <div className='restaurant_container'>
        <div className='restaurant_container-div1'>
          <img className='restaurant_container-div1-image' src={restaurante.image} alt="imagen del restaurante" />
        </div>
        <div className='restaurant_container-div2'>
          <h2 className='restaurant_container-div2-item'>{restaurante.name }</h2>
          <p className='restaurant_container-div2-item'>Dirección: <br/>{restaurante.address}</p>
          <p className='restaurant_container-div2-item'>Teléfono: <br/><a href={`tel:+57${restaurante.phone}`}> {restaurante.phone}</a></p>
          <button className='restaurant_container-div2-button restaurant_container-div2-item' onClick={() => window.open(restaurante.url, '_blank')}>
            <span className="circle1"></span>
            <span className="circle2"></span>
            <span className="circle3"></span>
            <span className="circle4"></span>
            <span className="circle5"></span>
            <span className='restaurant_container-div2-button-text'>Ubicación</span>
          </button>
        </div>
      </div>
    );
};

export default DetallesRestaurante;