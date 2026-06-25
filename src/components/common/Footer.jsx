import { Link } from 'react-router-dom';
import styles from './Styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.brand}>
                    <Link to="/" className={styles.logo}>Eventos ODC</Link>
                    <p className={styles.desc}>Cuéntanos tu idea y nosotros nos encargamos de hacerla realidad con creatividad, logística y perfección en cada detalle.</p>
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
                    <p>+57 3682920458</p>
                    <p>fakeemail@gmail.com</p>
                </div>
            </div>
            <div className={styles.bottom}>
                <p>&copy; {new Date().getFullYear()} EVENTOS ODC. ALL RIGHTS RESERVED.</p>
            </div>
        </footer>
    );
};

export default Footer;