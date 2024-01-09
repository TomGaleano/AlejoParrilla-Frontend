import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import { Inicio } from './components/inicio'

//import ReactGA from 'react-ga';

//const trackingId = <Tracking ID HERE>;
//ReactGA.initialize(trackingId);



function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Inicio />} />
        </Routes>
    </Router>
  )
}

export default App