import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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

const lastImage = images.length - 1;

const GalleryPreview = () => {
    const [current, setCurrent] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrent((c) => (c === lastImage ? 0 : c + 1));
        }, 3000);

        return () => clearInterval(interval);

    }, [isPaused]);

    const pauseCarousel = () => {
        setIsPaused(true);

        setTimeout(() => {
            setIsPaused(false);
        }, 5000);
    };

    const prev = () => {
        pauseCarousel();

        setCurrent((c) => (c === 0 ? lastImage : c - 1));
    };

    const next = () => {
        pauseCarousel();

        setCurrent((c) => (c === lastImage ? 0 : c + 1));
    };

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
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={images[current].id}
                            className={styles.slide}
                            initial={{ opacity: 0, x: 60 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -60 }}
                            transition={{ duration: 0.6, ease: 'easeInOut' }}
                        >
                            <img src={images[current].src} alt={images[current].alt} />
                        </motion.div>
                    </AnimatePresence>
                </div>

                <button className={styles.arrowRight} onClick={next} aria-label="Siguiente">
                    &#8594;
                </button>
            </div>

            <div className={styles.dots}>
                {images.map((image, index) => (
                    <button
                        type="button"
                        key={image.id}
                        aria-pressed={index === current}
                        className={`${styles.dot} ${index === current ? styles.dotActive : ''}`}
                        onClick={() => {
                            pauseCarousel();
                            setCurrent(index);
                        }}
                        aria-label={`Ir a la imagen ${index + 1}`}
                    />
                ))}
            </div>

            <div className={styles.cta}>
                <Link to="/servicios" className={styles.ctaBtn}>
                    Ver más
                </Link>
            </div>
        </section >
    )

}

export default GalleryPreview;