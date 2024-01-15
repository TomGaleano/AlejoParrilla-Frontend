import React, { useEffect, useState } from 'react';
import './loader.css'
import './restaurant.css'
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
        <div className="card">
            <img className = "image" src={restaurante.image} alt={restaurante.name} />
            <div className="content">
                <a href="#">
                    <span className="title">
                        {restaurante.name}
                    </span>
                </a>
                <p className="desc">
                    {restaurante.description}
                </p>
                <span className="description">
                    Telefono: {restaurante.phone}
                </span><br />
                <span className="description">
                    Dirección: {restaurante.address}
                </span><br />

                <a className="action" target='_blank' href={restaurante.url} rel="noopener noreferrer">
                    Ubicación
                    <span aria-hidden="true">
                        →
                    </span>
                </a>
            </div>
        </div>
    );
};

export default DetallesRestaurante;