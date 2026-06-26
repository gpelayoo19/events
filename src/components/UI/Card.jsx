import styles from './Styles/Card.module.css';

const Card = ({ image, imageAlt, children }) => {
    return (
        <article className={styles.card}>
            {image && (
                <div className={styles.imageWrapper}>
                    <img
                        src={image}
                        alt={imageAlt}
                        loading="lazy"
                        decoding='async'
                    />
                </div>
            )}

            <div className={styles.content}>
                {children}
            </div>
        </article>
    );
};

export default Card;