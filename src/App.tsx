import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import { Home } from './components/home'
import { Login } from './components/login'
import { Register } from './components/register'
import { Inicio } from './components/inicio'
//import ReactGA from 'react-ga';

//const trackingId = <Tracking ID HERE>;
//ReactGA.initialize(trackingId);



function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/test" element={<Test/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </Router>
  )
}

export default App