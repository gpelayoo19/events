import styles from './Styles/Contact.module.css';
import ContactForm from '../components/UI/ContactForm.jsx';

const Contact = () => {
    return (
        <div className={styles.contactPage}>
            <div className={styles.container}>

                <div>
                    <span className={styles.preTitle}>
                        Estamos para ayudarte
                    </span>

                    <h1 className={styles.title}>
                        Contáctanos
                    </h1>

                    <p className={styles.subtitle}>
                        Hagamos realidad tu próximo evento
                    </p>

                    <div className={styles.details}>
                        <div className={styles.detailItem}>
                            <span className={styles.detailLabel}>
                                Teléfono
                            </span>

                            <a
                                href="tel:+573371234567"
                                className={styles.detailValue}
                            >
                                +57 337 123 567
                            </a>
                        </div>

                        <div className={styles.detailItem}>
                            <span className={styles.detailLabel}>
                                Email
                            </span>

                            <a
                                href="mailto:fakeemail@gmail.com"
                                className={styles.detailValue}
                            >
                                fakeemail@gmail.com
                            </a>
                        </div>
                    </div>
                </div>

                <ContactForm />

            </div>
        </div>
    );
};

export default Contact;