import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import { Inicio } from './components/inicio'
import { Sobrenosotros } from './components/sobre-nosotros'
import MenuGrid from './components/menu'

//import ReactGA from 'react-ga';

//const trackingId = <Tracking ID HERE>;
//ReactGA.initialize(trackingId);



function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre-nosotros" element={<Sobrenosotros/>} />
          <Route path="/menu" element={<MenuGrid category="Carnes" />} />
        </Routes>
    </Router>
  )
}

export default App