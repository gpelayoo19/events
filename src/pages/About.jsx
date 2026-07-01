import { Link } from 'react-router-dom';
import styles from './Styles/About.module.css';
import image1 from '../assets/images/Image10.jpeg';
import SEO from '../components/common/SEO.jsx';

const values = [
    {
        id: 1,
        icon: "💎",
        title: "MISIÓN",
        description: "Brindar soluciones integrales en producción de eventos, creando experiencias memorables a través de la creatividad, la logística y la excelencia en cada detalle."
    },
    {
        id: 2,
        icon: "👁️",
        title: "VISIÓN",
        description: "Ser una empresa líder en producción de eventos a nivel nacional, reconocida por la calidad, innovación y capacidad de transformar ideas en experiencias únicas."
    },
    {
        id: 3,
        icon: "🤝",
        title: "VALORES",
        description: "Calidad, Compromiso, Creatividad, Responsabilidad, Innovación"
    }
];

const About = () => {
    return (
        <div className={styles.aboutPage}>
            <SEO
                title="Nosotros"
                description="Conoce al equipo de Eventos ODC. Más de 10 años de experiencia en producción de eventos corporativos y sociales en Pereira, Colombia."
                url="/nosotros"
            />
            <section className={styles.history}>
                <div className={styles.content}>
                    <span className={styles.tag}>Producción integral de eventos</span>
                    <h1 className={styles.title}>Nosotros</h1>
                    <p className={styles.text}>Somos un equipo dedicado a la producción integral de eventos. Nos especializamos en crear experiencias únicas, cuidando cada detalle desde la planeación hasta la ejecución.</p>
                    <p className={styles.text}>Contamos con experiencia en producción, logística, modelos, catering, mobiliario y montaje de eventos de todo tipo.</p>

                    <div className={styles.ctaGroup}>
                        <Link to="/contacto" className={styles.ctaPrimary}>Contáctanos</Link>
                        <Link to="/servicios" className={styles.ctaSecondary}>Ver servicios</Link>
                    </div>
                </div>
                <div className={styles.imageBlock}>
                    <img src={image1} alt="Equipo de Eventos ODC realizando el montaje de un evento corporativo" loading="lazy" decoding="async" />
                </div>
            </section>

            <section className={styles.values}>
                {values.map((item) => (
                    <div key={item.id} className={styles.valueItem}>
                        <span className={styles.icon}>{item.icon}</span>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </section>

        </div >
    );
};

export default About;