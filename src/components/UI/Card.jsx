import styles from './Styles/Card.module.css';

const Card = ({ image, category, title, description, children }) => {
    return (
        <div className={styles.card}>
            {image && (
                <div className={styles.imageWrapper}>
                    <img src={image} alt={title} />
                </div>
            )}
            <div className={styles.content}>
                {category && <p className={styles.category}>{category}</p>}
                {title && <h3 className={styles.title}>{title}</h3>}
                {description && <p className={styles.description}>{description}</p>}
                {children}
            </div>
        </div>
    );
};

export default Card;