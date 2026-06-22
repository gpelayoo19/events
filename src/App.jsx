import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/common/Header.jsx';
import Footer from './components/common/Footer.jsx';
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

        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/galeria" element={<Gallery />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </main>
        <WhatsAppButton phonenumber="573016985605" message="Hola, me gustaría solicitar una cotización" />
        <Footer />

      </Router>
    </>
  )
}

export default App
