import { Link } from 'react-router-dom';
import styles from './Styles/Footer.module.css';

const currentYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.brand}>
                    <Link to="/" className={styles.logo}>Eventos ODC</Link>
                    <p className={styles.desc}>Cuéntanos tu idea y nosotros nos encargamos de hacerla realidad con creatividad, logística y perfección en cada detalle.</p>
                </div>

                <div className={styles.links}>
                    <h4>EXPLORA</h4>
                    <Link to="/servicios">Servicios</Link>
                    <Link to="/nosotros">Sobre Nosotros</Link>
                    <Link to="/contacto">Contacto</Link>
                </div>

                <div className={styles.social}>
                    <h4>SÍGUENOS</h4>
                    <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="#" target="_blank" rel="noopener noreferrer">TikTok</a>
                    <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>

                <div className={styles.contact}>
                    <h4>CONTACTO</h4>
                    <a href="tel:+573682920458">+57 368 292 0458</a>
                    <a href="mailto:fakeemail@gmail.com">fakeemail@gmail.com</a>
                </div>
            </div>
            <div className={styles.bottom}>
                <p>&copy; {currentYear} EVENTOS ODC. ALL RIGHTS RESERVED.</p>
            </div>
        </footer>
    );
};

export default Footer;