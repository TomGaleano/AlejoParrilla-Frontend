import React from 'react';

const MapComponent = () => {
    return (
        <div className="vinculate_form"> {/* Aplica la misma clase que al formulario */}
            <iframe
                title="Google Map"
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/d/u/0/embed?mid=1TkQpEiy6ntYtMd-ieVkRhm5XtgbzT-0&ehbc=2E312F"
                style={{ width: '100%', height: '100%' }} // Asegura que el mapa ocupe todo el espacio disponible
            ></iframe>
        </div>
    );
};

export default MapComponent;