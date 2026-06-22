import styles from './Styles/Gallery.module.css';

const Gallery = () => {
    const images = [1, 2, 3, 4, 5, 6]; // Marcadores de imagen

    return (
        <div className={styles.galleryPage}>
            <header className={styles.header}>
                <h1>Our Portfolio</h1>
                <p>A curated selection of the most exquisite celebrations.</p>
            </header>

            <div className={styles.masonry}>
                {images.map((img, i) => (
                    <div key={i} className={styles.item}>
                        <img src={`{{DATA:IMAGE:IMAGE_1}}`} alt={`Event ${i}`} />
                        <div className={styles.overlay}>
                            <span>VER DETALLES</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;