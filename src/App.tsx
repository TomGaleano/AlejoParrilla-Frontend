import { useState } from 'react';
import Helmet from 'react-helmet';
import { Inicio } from './components/inicio';
import { Sobrenosotros } from './components/sobre-nosotros';
import { Vinculate } from './components/vinculate';
import Navbar from './components/navbar';
import MenuGrid from './components/menu';


//import ReactGA from 'react-ga';

//const trackingId = <Tracking ID HERE>;
//ReactGA.initialize(trackingId);

const faviconUrls = [
  '/favicon1.ico',
  '/favicon2.ico',
  '/favicon3.ico',
  '/favicon4.ico',
];

function App() {

  const [view, setView] = useState('Inicio');
  const iconIndex = Math.floor(Math.random() * faviconUrls.length) + 1;


  const renderView = () => {
    switch (view) {
      case 'Inicio':
        return <Inicio />;
      case 'Nosotros':
        return <Sobrenosotros />;
      case 'Contacto':
        return <Vinculate />;
      case 'Menú':
        return <div style={{ paddingTop: '10vh' }}><MenuGrid /></div>;
      default:
        return <Inicio />;
    }
  }

  return (
    <>
      <Helmet>
        <link rel="icon" href={faviconUrls[iconIndex - 1]} />
      </Helmet>
      <div>
        <Navbar setView={setView} />
        {renderView()}
      </div>
    </>

  );
}

export default App;