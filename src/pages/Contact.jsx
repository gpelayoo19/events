import styles from './Styles/Contact.module.css';

const Contact = () => {
    return (
        <div className={styles.contactPage}>
            <div className={styles.container}>
                <div className={styles.info}>
                    <h1>CONTÁCTANOS</h1>
                    <p>Permítanos convertir su visión en una realidad sofisticada.</p>
                    <div className={styles.details}>
                        <p><strong>UBICACIÓN:</strong> Av. de la Reforma 250, CDMX</p>
                        <p><strong>TELÉFONO:</strong> +52 (55) 1234 5678</p>
                        <p><strong>EMAIL:</strong> hello@luxeevents.com</p>
                    </div>
                </div>

                <form className={styles.form}>
                    <input type="text" placeholder="NOMBRE COMPLETO" />
                    <input type="email" placeholder="EMAIL" />
                    <input type="tel" placeholder="TELÉFONO" />
                    <textarea placeholder="CUÉNTANOS SOBRE TU EVENTO"></textarea>
                    <button type="submit">ENVIAR MENSAJE →</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;