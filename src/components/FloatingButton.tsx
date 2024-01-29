import './FloatingButton.css'

import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

const FloatingButton: React.FC = () => {
    return (
      <FloatingWhatsApp
        phoneNumber={"+573504746586"}
        accountName={'Alejo Parrilla'}
        allowEsc
        chatMessage="¿Te apetece un buen asado? En Alejo Parrilla tenemos las carnes más jugosas y tiernas, preparadas al estilo tradicional. Haz tu pedido ahora y recíbelo en tu casa en minutos. ¡Te encantará! 🍽️🚚"
        className="custom-class-name"
        avatar="./images/alejo-parrilla-1.jpg"
        statusMessage="Siempre a tu disposición"
        darkMode={false}
        notification={true}
        chatboxHeight={420}
        allowClickAway={true}
      />
    )
  }
export default FloatingButton