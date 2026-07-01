import styles from './Styles/Contact.module.css';
import ContactForm from '../components/UI/ContactForm.jsx';
import { company } from '../config/company.js';
import SEO from '../components/common/SEO.jsx';

const Contact = () => {
    return (
        <div className={styles.contactPage}>
            <SEO
                title="Contacto"
                description="Contáctanos para cotizar tu próximo evento. Estamos en Pereira, Risaralda. Llámanos o escríbenos por WhatsApp."
                url="/contacto"
            />
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
                                href={`tel:${company.phone.link}`}
                                className={styles.detailValue}
                            >
                                {company.phone.display}
                            </a>
                        </div>

                        <div className={styles.detailItem}>
                            <span className={styles.detailLabel}>
                                Email
                            </span>

                            <a
                                href={`mailto:${company.email.link}`}
                                className={styles.detailValue}
                            >
                                {company.email.display}
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