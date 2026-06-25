import styles from './Styles/Services.module.css';

import Image1 from '../assets/images/Image3.jpeg';
import Image2 from '../assets/images/service.jpeg';
import Image3 from '../assets/images/Image8.jpeg';
import Image4 from '../assets/images/Image13.jpeg';
import Image5 from '../assets/images/Image14.jpeg';
import Image6 from '../assets/images/Image4.jpeg';

const services = [
    {
        id: 1,
        title: 'Producción de eventos',
        description: 'Diseñamos y ejecutamos eventos corporativos, sociales y masivos con una logística impecable.',
        image: Image1
    },
    {
        id: 2,
        title: 'Decoraciones y ambientaciones',
        description: 'Creamos ambientaciones únicas que transforman cualquier espacio, cuidando cada detalle para lograr armonía, estilo y una experiencia visual inolvidable.',
        image: Image2
    },
    {
        id: 3,
        title: 'Modelos y personal',
        description: 'Equipo profesional de modelos, anfitriones y staff para garantizar una atención de alto nivel.',
        image: Image3
    },
    {
        id: 4,
        title: 'Catering',
        description: 'Experiencias gastronómicas personalizadas que combinan sabor, calidad y presentación.',
        image: Image4
    },
    {
        id: 5,
        title: 'Arquitectura efímera',
        description: 'Diseño y construcción de espacios creativos que potencian la identidad de tu marca.',
        image: Image5
    },
    {
        id: 6,
        title: 'Litografía',
        description: 'Diseño e impresión de material publicitario y corporativo para eventos.',
        image: Image6
    },
];

const Services = () => {
    return (
        <div className={styles.servicesPage}>
            <header className={styles.pageHeader}>
                <p className={styles.preTitle}>EQUIPO PROFESIONAL Y CREATIVO</p>
                <h1 className={styles.title}>Nuestros Servicios</h1>
                <p className={styles.description}>Cada detalle cuenta y nosotros lo hacemos posible</p>
            </header>

            <section className={styles.grid}>
                {services.map((service) => (
                    <div key={service.id} className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <img src={service.image} alt={service.title} />
                        </div>
                        <div className={styles.cardContent}>
                            <p className={styles.cardCategory}></p>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <button className={styles.learnMore}>SABER MÁS →</button>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Services;