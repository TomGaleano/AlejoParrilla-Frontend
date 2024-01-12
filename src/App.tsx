import { useState } from 'react';
import { Inicio } from './components/inicio';
import { Sobrenosotros } from './components/sobre-nosotros';
import Navbar from './components/navbar';
import MenuGrid from './components/menu';

//import ReactGA from 'react-ga';

//const trackingId = <Tracking ID HERE>;
//ReactGA.initialize(trackingId);



function App() {

  const [view, setView] = useState('Inicio');



  const renderView = () => {
    switch(view) {
      case 'Inicio':
        return <Inicio />;
      case 'Nosotros':
        return <Sobrenosotros />;
      case 'Menu':
        return <div style={{ paddingTop: '10vh', paddingBottom: '20px' }}><MenuGrid /></div>;
      case 'Contacto':
        return <div>Poner contacto aquí</div>;
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