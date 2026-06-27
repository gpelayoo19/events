import styles from './Styles/Hero.module.css';
import Button from '../UI/Button.jsx';

const Hero = ({ title, subtitle, preTitle, backgroundImage }) => {
    return (
        <section className={styles.hero} style={{ backgroundImage: `url(${backgroundImage})` }} aria-label="Foto principal">
            <div className={styles.overlay}></div>
            <div className={styles.container}>
                {preTitle && <p className={styles.preTitle}>{preTitle}</p>}
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.subtitle}>{subtitle}</p>
                <div className={styles.actions}>
                    <Button to="/contacto" variant="primary">Solicitar Cotización</Button>
                    <Button to="/servicios" variant="secondary">Ver Portafolio</Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;