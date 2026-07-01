import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import ScrollToTop from './components/common/ScrollToTop.jsx';
import MainLayout from './layouts/MainLayout';
import './index.css';

const Home = lazy(() => import('./pages/Home.jsx'));
const Services = lazy(() => import('./pages/Services.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));


function App() {

  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<div style={{ background: '#121414', minHeight: '100vh' }} />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="servicios" element={<Services />} />
            <Route path="nosotros" element={<About />} />
            <Route path="contacto" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
