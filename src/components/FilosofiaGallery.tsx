import React from 'react';
import "./FilosofiaGallery.css";

const FilosofiaGallery: React.FC = () => {
    return (
        <section className='ContainerGallery'>
            <div className='ContainerGallery-1'>
                <div className='text-container'>
                    <h3 className='containerTitle'>Embracing Colombian Heritage</h3>
                    <p className='containerText-paragraph'>En Alejo Parrilla, creemos en la celebración de la rica herencia culinaria de Colombia. A través de nuestra cocina, fusionamos sabores tradicionales colombianos con la maestría de la parrilla, ofreciendo a nuestros clientes una experiencia única que resalta la diversidad y autenticidad de nuestra cultura gastronómica. Nos enorgullece ser guardianes de esta herencia y compartir su belleza con cada bocado.</p>
                </div>
            </div>
            <div className='ContainerGallery-2'>
                <div className='text-container'>
                    <h3 className='containerTitle'>Familial Connection</h3>
                    <p className='containerText-paragraph'>En el corazón de Alejo Parrilla yace la esencia de la familiia. Creemos que cada comida es una oportunidad para crear recuerdos especiales y fortalecer los lazos entre amigos y seres queridos. Nuestra atmósfera acogedora refleja el espíritu familiar, donde cada cliente es recibido con calidez y atención personalizada. En Alejo Parrilla, queremos que cada visita se sienta como un regreso a casa.</p>
                </div>
            </div>
            <div className='ContainerGallery-3'>
                <div className='text-container'>
                    <h3 className='containerTitle'>Excellence in Grilling</h3>
                    <p className='containerText-paragraph'>La parrilla es nuestro arte, y la excelencia es nuestro estándar. Nos comprometemos a ofrecer la más alta calidad en cada plato que servimos. Desde la selección cuidadosa de ingredientes frescos hasta la maestría en la parrilla, buscamos superar las expectativas de nuestros clientes en cada detalle. Alejo Parrilla no es solo un restaurante; es un santuario de sabores, donde la calidad y la variedad de nuestros productos se encuentran con la satisfacción del cliente.</p>
                </div>
            </div>
        </section>
    );
};

export default FilosofiaGallery;