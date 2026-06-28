import { Link } from 'react-router-dom';
import styles from './Styles/Footer.module.css';
import { FaInstagram, FaFacebookF, FaTiktok, FaLinkedinIn, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { company } from '../../config/company.js'

const currentYear = new Date().getFullYear();

const navigationLinks = [
    { to: "/servicios", label: "Servicios" },
    { to: "/nosotros", label: "Nosotros" },
    { to: "/contacto", label: "Contacto" },
];

const socialLinks = [
    { name: "Instagram", href: company.social.instagram, icon: FaInstagram },
    { name: "Facebook", href: company.social.facebook, icon: FaFacebookF },
    { name: "TikTok", href: company.social.tiktok, icon: FaTiktok },
    { name: "LinkedIn", href: company.social.linkedin, icon: FaLinkedinIn },
];

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.brand}>
                    <Link to="/" className={styles.logo}>{company.name}</Link>
                    <p className={styles.desc}>Cuéntanos tu idea y nosotros nos encargamos de hacerla realidad con creatividad, logística y perfección en cada detalle.</p>
                </div>

                <div className={styles.links}>
                    <h4>Explora</h4>
                    {navigationLinks.map(({ to, label }) => (
                        <Link key={to} to={to}>
                            {label}
                        </Link>
                    ))}
                </div>

                <div className={styles.social}>
                    <h4>Síguenos</h4>

                    {socialLinks.map(({ name, href, icon: Icon }) => (
                        <a
                            key={name}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Icon className={styles.icon} />
                            <span>{name}</span>
                        </a>
                    ))}
                </div>

                <div className={styles.contact}>
                    <h4>CONTACTO</h4>
                    <a href={`tel:${company.phone.link}`}>
                        <FaPhoneAlt className={styles.icon} />
                        <span>{company.phone.display}</span>
                    </a>

                    <a href={`mailto:${company.email.link}`}>
                        <FaEnvelope className={styles.icon} />
                        <span>{company.email.display}</span>
                    </a>
                </div>
            </div>
            <div className={styles.bottom}>
                <p>&copy; {currentYear} Eventos ODC · Todos los derechos reservados.</p>
            </div>
        </footer >
    );
};

export default Footer;