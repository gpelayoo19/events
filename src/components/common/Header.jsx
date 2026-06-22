import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Styles/Header.module.css';

const links = [
    { to: '/', label: 'Inicio' },
    { to: '/servicios', label: 'Servicios' },
    { to: '/nosotros', label: 'Nosotros' },
    { to: '/galeria', label: 'Galería' },
    { to: '/contacto', label: 'Contacto' },
];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navLinkClass = ({ isActive }) => isActive ? styles.active : '';

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link to="/" className={styles.logo}>
                    Eventos ODC
                </Link>
                <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
                    {links.map(({ to, label }) => (
                        <NavLink
                            key={to}
                            to={to}
                            onClick={() => setIsOpen(false)}
                            className={navLinkClass}
                        >
                            {label}
                        </NavLink>
                    ))}
                </nav>

                <Link to="/contacto" className={styles.cta}>Cotizar</Link>

                <button className={styles.hamburger} onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={isOpen}>
                    <span className={isOpen ? styles.barClose : ''}></span>
                    <span className={isOpen ? styles.barClose : ''}></span>
                    <span className={isOpen ? styles.barClose : ''}></span>
                </button>
            </div>
        </header>
    );
};

export default Header;