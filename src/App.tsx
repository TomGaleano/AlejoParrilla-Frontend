import { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import { Inicio } from './components/inicio';
import { Sobrenosotros } from './components/sobre-nosotros';
import { Vinculate } from './components/vinculate';
import Navbar from './components/navbar';
import LoadingPage from './components/loadingPage';
import NewMenu from './components/newMenu';
//import ReactGA from 'react-ga';

//const trackingId = <Tracking ID HERE>;
//ReactGA.initialize(trackingId);

const faviconUrls = [
  '/favicon1.ico',
  '/favicon2.ico',
  '/favicon3.ico',
  '/favicon4.ico',
];

const restaurantes = [
  { id: 1, label: "Diver Plaza" },
  { id: 2, label: "Nuestro Bogotá" },
  { id: 3, label: "Buró 25" },
  { id: 4, label: "Fontibón" },
];

const initialSelectedItem = restaurantes.find(restaurant => restaurant.label === "Selecciona tu sede");


function App() {

  const [view, setView] = useState('Inicio');
  const iconIndex = Math.floor(Math.random() * faviconUrls.length) + 1;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false); // Cuando se carga completamente el sitio, oculta la pantalla de carga
    };
    window.addEventListener('load', handleLoad);
    return () => {
      window.removeEventListener('load', handleLoad); // Limpia el evento al desmontar el componente
    };
  }, []);
  //Aquí se definen las constantes para restaurante.
  const [selectedItem, setSelectedItem] = useState(initialSelectedItem);

  const renderView = () => {
    switch (view) {
      case 'Inicio':
        return <Inicio />;
      case 'Nosotros':
        return <Sobrenosotros />;
      case 'Contacto':
        return <Vinculate />;
      case 'Menú':
        return <div><NewMenu /></div>;
      default:
        return <Inicio />;
    }
  }

  return (
    <>
      {loading ? ( // Muestra la pantalla de carga si loading es true
        <LoadingPage />
      ) : (
        <>
        <Helmet>
        <link rel="icon" href={faviconUrls[iconIndex - 1]} />
      </Helmet>
      <div>
        <Navbar
          setView={setView}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          restaurantes={restaurantes}
        />
        {renderView()}
      </div>
        </>
      )}
    </>






  );
}

export default App;