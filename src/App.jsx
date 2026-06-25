import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';

import WhatsAppButton from './components/common/WhatsAppButton.jsx';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import About from './pages/About.jsx';
import Gallery from './pages/Gallery.jsx';
import Contact from './pages/Contact.jsx';
import './index.css';

function App() {

  return (
    <>
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/servicios" element={<Services />} />
              <Route path="/nosotros" element={<About />} />
              <Route path="/galeria" element={<Gallery />} />
              <Route path="/contacto" element={<Contact />} />
            </Route>
          </Routes>
        </main>
        <WhatsAppButton phoneNumber="573016985605" message="Hola, me gustaría solicitar una cotización" />
      </Router>
    </>
  )
}

export default App
