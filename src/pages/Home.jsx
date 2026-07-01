import styles from './Styles/Home.module.css';
import Hero from '../components/Home/Hero.jsx';
import Stats from '../components/Home/Stats.jsx';
import GalleryPreview from '../components/Home/GalleryPreview.jsx';
import imgHero from '../assets/images/img1.jpeg';
import SEO from '../components/common/SEO.jsx';

const statsData = [
    { id: 1, number: '10+', label: 'Años de Experiencia' },
    { id: 2, number: '500+', label: 'Eventos Realizados' },
    { id: 3, number: '100%', label: 'Satisfacción Total' },
];

const Home = () => {
    return (
        <div className={styles.home}>
            <SEO
                title="Inicio"
                description="Producción integral de eventos en Pereira. Corporativos, sociales y masivos con logística impecable."
                image={imgHero}
                url="/"
            />
            <Hero
                preTitle="EL ARTE DE CREAR EVENTOS PERFECTOS"
                title="Haz que tu próximo evento sea inolvidable"
                subtitle="Experiencia en eventos de alto impacto"
                backgroundImage={imgHero}
            />
            <Stats items={statsData} />
            <GalleryPreview />
        </div>
    );
};

export default Home;