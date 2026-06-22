import styles from './Styles/Services.module.css';

const services = [
    {
        title: 'Bodas de Lujo',
        description: 'Desde la conceptualización hasta el "sí, acepto". Creamos escenarios donde el romance se encuentra con la máxima exclusividad.',
        image: '{{DATA:IMAGE:IMAGE_1}}' // Usar marcador de imagen relevante
    },
    {
        title: 'Eventos Corporativos',
        description: 'Galas y conferencias que proyectan la excelencia y el liderazgo de su marca en entornos impecables.',
        image: '{{DATA:IMAGE:IMAGE_1}}'
    },
    {
        title: 'Fiestas Privadas',
        description: 'Celebraciones íntimas y exclusivas diseñadas para cautivar a los invitados más exigentes.',
        image: '{{DATA:IMAGE:IMAGE_1}}'
    },
    {
        title: 'Producción Audiovisual',
        description: 'Tecnología de vanguardia para crear experiencias inmersivas que trascienden lo convencional.',
        image: '{{DATA:IMAGE:IMAGE_1}}'
    }
];

const Services = () => {
    return (
        <div className={styles.servicesPage}>
            <header className={styles.pageHeader}>
                <p className={styles.preTitle}>EXPERIENCIAS INOLVIDABLES</p>
                <h1 className={styles.title}>Nuestros Servicios Exclusivos</h1>
                <p className={styles.description}>Transformamos visiones en realidades extraordinarias con precisión milimétrica.</p>
            </header>

            <section className={styles.grid}>
                {services.map((service, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <img src={service.image} alt={service.title} />
                        </div>
                        <div className={styles.cardContent}>
                            <p className={styles.cardCategory}>PREMIUM EXPERIENCE</p>
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