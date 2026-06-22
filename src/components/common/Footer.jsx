import { Link } from 'react-router-dom';
import styles from './Styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.brand}>
                    <Link to="/" className={styles.logo}>LUXE EVENTS</Link>
                    <p className={styles.desc}>Transformando visiones en realidades atemporales desde 2014. Expertos en el arte de la celebración.</p>
                </div>

                <div className={styles.nav}>
                    <h4>EXPLORA</h4>
                    <Link to="/servicios">Servicios</Link>
                    <Link to="/galeria">Portafolio</Link>
                    <Link to="/nosotros">Sobre Nosotros</Link>
                    <Link to="/contacto">Contacto</Link>
                </div>

                <div className={styles.social}>
                    <h4>SÍGUENOS</h4>
                    <a href="#">Instagram</a>
                    <a href="#">Facebook</a>
                    <a href="#">TikTok</a>
                    <a href="#">LinkedIn</a>
                </div>

                <div className={styles.contact}>
                    <h4>CONTACTO</h4>
                    <p>Av. de la Reforma 250, CDMX</p>
                    <p>+52 (55) 1234 5678</p>
                    <p>hello@luxeevents.com</p>
                </div>
            </div>
            <div className={styles.bottom}>
                <p>&copy; {new Date().getFullYear()} LUXE EVENTS. ALL RIGHTS RESERVED.</p>
            </div>
        </footer>
    );
};

export default Footer;