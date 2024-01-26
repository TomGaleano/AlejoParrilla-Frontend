import './FloatingButton.css'

import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

const FloatingButton: React.FC = () => {
    return (
      <FloatingWhatsApp
        phoneNumber={"+573016666666"}
        accountName={'Tomas'}
        allowEsc
        chatMessage="Hi, I'm interested in your product!"
        className="custom-class-name"
      />
    )
  }
export default FloatingButton