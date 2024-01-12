import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Navbar from './components/navbar.tsx'
import Footer from './components/footer.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar setView={function (view: string ): void {
      throw new Error('Function not implemented.')
    } } />
    <App />
    <Footer />
  </React.StrictMode>,
)
