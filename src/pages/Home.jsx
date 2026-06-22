import styles from './Styles/Home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className={styles.home}>
            <section className={styles.hero}>
                <div className={styles.overlay}></div>
                <div className={styles.heroContent}>
                    <p className={styles.preTitle}>THE ART OF CELEBRATION</p>
                    <h1 className={styles.title}>Eventos que Trascienden</h1>
                    <p className={styles.subtitle}>Diseñamos experiencias inmersivas y exclusivas donde cada detalle es una obra de arte. Transformamos visiones en realidades memorables.</p>
                    <div className={styles.actions}>
                        <Link to="/contacto" className={styles.btnPrimary}>Solicitar Cotización</Link>
                        <Link to="/galeria" className={styles.btnSecondary}>Ver Portafolio</Link>
                    </div>
                </div>
            </section>

            <section className={styles.stats}>
                <div className={styles.statItem}>
                    <h2>10+</h2>
                    <p>Años de Excelencia</p>
                </div>
                <div className={styles.statItem}>
                    <h2>500+</h2>
                    <p>Eventos Realizados</p>
                </div>
                <div className={styles.statItem}>
                    <h2>100%</h2>
                    <p>Satisfacción Total</p>
                </div>
            </section>
        </div>
    );
};

export default Home;