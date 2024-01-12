import React, { useState } from 'react';
import { Inicio } from './components/inicio';
import { Sobrenosotros } from './components/sobre-nosotros';
import { Vinculate } from './components/vinculate';
import MenuGrid from './components/menu';
import Navbar from './components/navbar';

//import ReactGA from 'react-ga';

//const trackingId = <Tracking ID HERE>;
//ReactGA.initialize(trackingId);



function App() {
  const [view, setView] = useState('Inicio');

  const renderView = () => {
    switch (view) {
      case 'Inicio':
        return <Inicio />;
      case 'Nosotros':
        return <Sobrenosotros />;
      case 'Menu':
        return <MenuGrid category="Carnes" />;
      case 'Vinculate':
        return <Vinculate />;
      default:
        return <Inicio />;
    }
  }

  return (
    <div>
      <Navbar setView={setView} />
      {renderView()}
    </div>
  );
}

export default App;