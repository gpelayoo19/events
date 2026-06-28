import styles from './Styles/WhatsAppButton.module.css';
import { FaWhatsapp } from 'react-icons/fa';
import { company } from '../../config/company.js';

const WhatsAppButton = ({
    phoneNumber = company.whatsapp.number,
    message = company.whatsapp.message
}) => {
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
            aria-label="Contactar por WhatsApp"
            title="Escríbenos por WhatsApp"
        >
            <FaWhatsapp size={32} />
        </a>
    );
}

export default WhatsAppButton;