import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Styles/GalleryPreview.module.css';
import img1 from '../../assets/images/Image11.jpeg';
import img2 from '../../assets/images/Gallery1.jpeg';
import img3 from '../../assets/images/Image7.jpeg';
import img4 from '../../assets/images/Image12.jpeg';

const images = [
    { id: 1, src: img1, alt: 'Imagen 1' },
    { id: 2, src: img2, alt: 'Imagen 2' },
    { id: 3, src: img3, alt: 'Imagen 3' },
    { id: 4, src: img4, alt: 'Imagen 4' },
];

const GalleryPreview = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
    const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

    return (
        <section className={styles.gallery}>
            <div className={styles.header}>
                <span className={styles.tag}>Nuestro trabajo</span>
                <h2 className={styles.title}>Galería de Eventos</h2>
            </div>

            <div className={styles.carousel}>
                <button className={styles.arrowLeft} onClick={prev} aria-label="Anterior">
                    &#8592;
                </button>

                <div className={styles.track}>
                    {images.map((image, index) => (
                        <div
                            key={image.id}
                            className={`${styles.slide} ${index === current ? styles.active : ''}`}
                        >
                            <img src={image.src} alt={image.alt} />
                            <div className={styles.overlay}></div>
                        </div>
                    ))}
                </div>

                <button className={styles.arrowRight} onClick={next} aria-label="Siguiente">
                    &#8594;
                </button>
            </div>

            <div className={styles.dots}>
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`${styles.dot} ${index === current ? styles.dotActive : ''}`}
                        onClick={() => setCurrent(index)}
                        aria-label={`Ir a la imagen ${index + 1}`}
                    />
                ))}
            </div>

            <div className={styles.cta}>
                <Link to="/galeria" className={styles.ctaBtn}>
                    Ver más
                </Link>
            </div>
        </section>
    )

}

export default GalleryPreview;