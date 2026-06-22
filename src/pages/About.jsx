import styles from './Styles/About.module.css';

const About = () => {
    return (
        <div className={styles.aboutPage}>
            <section className={styles.history}>
                <div className={styles.content}>
                    <p className={styles.tag}>EXCLUSIVIDAD & LEGADO</p>
                    <h1>Nuestra Historia</h1>
                    <p>Fundada en el corazón del diseño vanguardista, LUXE EVENTS nació de la visión de transformar celebraciones ordinarias en hitos atemporales de sofisticación.</p>
                    <p>Nuestra trayectoria está marcada por la búsqueda incansable de la perfección estética y operativa.</p>
                </div>
                <div className={styles.imageBlock}>
                    <img src="{{DATA:IMAGE:IMAGE_1}}" alt="Luxe interior" />
                </div>
            </section>

            <section className={styles.values}>
                <div className={styles.valueItem}>
                    <span className={styles.icon}>💎</span>
                    <h3>MISIÓN</h3>
                    <p>Crear experiencias sensoriales inigualables que reflejen la esencia única de nuestros clientes.</p>
                </div>
                <div className={styles.valueItem}>
                    <span className={styles.icon}>👁️</span>
                    <h3>VISIÓN</h3>
                    <p>Ser reconocidos globalmente como el referente definitivo en el diseño de eventos de lujo.</p>
                </div>
            </section>
        </div>
    );
};

export default About;