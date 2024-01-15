import React from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

interface MapProps {
    locations: any[]; // Reemplazar 'any' con el tipo adecuado para la propiedad 'locations'
}

const Map: React.FC<MapProps> = ({ locations }) => {
    const mapContainerStyle = {
        width: '100%',
        height: '400px',
    };

    const center = {
        lat: 4.687747682024201, // Establece la latitud del centro del mapa
        lng: -74.13019486345699, // Establece la longitud del centro del mapa
    };

    const options = {
        disableDefaultUI: false, // Deshabilita la interfaz de usuario predeterminada de Google Maps
        zoomControl: true,
    };

    return (
        <LoadScript googleMapsApiKey="AIzaSyCzuFvJ5puhXUY7QnkqzYixNKDG-AM2FM4">
            <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={14} options={options}>
                {locations.map((location, index) => (
                    <Marker key={index} position={location.position} />
                ))}
            </GoogleMap>
        </LoadScript>
    );
};

export default Map;