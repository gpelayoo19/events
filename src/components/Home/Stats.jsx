import styles from './Styles/Stats.module.css';

const Stats = ({ items = [] }) => {
    return (
        <section className={styles.stats}>
            <div className={styles.container}>
                {items.map((item) => (
                    <div key={item.id} className={styles.item}>
                        <span className={styles.number}>{item.number}</span>
                        <span className={styles.divider}></span>
                        <span className={styles.label}>{item.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Stats;