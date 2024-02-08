import './Styles.css'
import './VisionCard.css'
import React, { useState } from 'react';

interface Vision {
  imageUrl: string;
  text: string;
  title: string;
}
const VisionCard: React.FC<Vision> = ({ imageUrl, text, title }) => {
  const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };
  return(
    <div className={`container-vision-item ${isClicked ? 'clicked' : ''}`} onClick={handleClick} style={{backgroundImage:`url(${imageUrl})`}}>
      <div className='container-vision-item-div'>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
const VisionComponent = () => {
  return(
    <div className="container-vision">
      <VisionCard imageUrl="./images/alejo-parrilla-1.jpg" title="Mision" text="En Alejo Parrilla, aspiramos a ser el destino culinario de referencia, liderando la industria gastronómica con inovación y tradición en cada plato."/>
      <VisionCard imageUrl="./images/alejo-parrilla-2.jpg" title="Mision" text="En Alejo Parrilla, aspiramos a ser el destino culinario de referencia, liderando la industria gastronómica con inovación y tradición en cada plato."/>
    </div>
  )
}
export default VisionComponent;

{/*<div className='container-vision-item'>
      <div className='container-vision-item-div' style={{backgroundImage:`url(${imageUrl})`}}>
        <p className='container-vision-item-title'>{title}</p>
      </div>
      <div className='container-vision-item-div'>
        <p className='container-vision-item-div-description'>{text}</p>
      </div>
    </div>*/}