import { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Styles/Header.module.css';

const links = [
    { to: '/', label: 'Inicio' },
    { to: '/servicios', label: 'Servicios' },
    { to: '/nosotros', label: 'Nosotros' },
    { to: '/contacto', label: 'Contacto' },
];

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const headerRef = useRef(null);

    const navLinkClass = ({ isActive }) =>
        isActive ? `${styles.navLink} ${styles.active}` : styles.navLink;

    // Cerrar haciendo click fuera
    useEffect(() => {
        if (!isOpen) return;

        const handlePointerDown = (event) => {
            if (
                headerRef.current &&
                !headerRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener('pointerdown', handlePointerDown);

        return () => {
            document.removeEventListener('pointerdown', handlePointerDown);
        };
    }, [isOpen]);

    // Cerrar con Escape
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);

    // Bloquear scroll cuando el menú está abierto
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <header
            ref={headerRef}
            className={styles.header}
        >
            <div className={styles.container}>

                <Link
                    to="/"
                    className={styles.logo}
                    aria-label="Ir al inicio"
                >
                    Eventos ODC
                </Link>

                <nav
                    id="main-navigation"
                    className={`${styles.nav} ${isOpen ? styles.open : ''}`}
                >
                    {links.map(({ to, label }) => (
                        <NavLink
                            key={to}
                            to={to}
                            className={navLinkClass}
                            onClick={() => setIsOpen(false)}
                        >
                            {label}
                        </NavLink>
                    ))}
                </nav>

                <button
                    type="button"
                    aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
                    aria-expanded={isOpen}
                    aria-controls="main-navigation"
                    className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
                    onClick={() => setIsOpen(prev => !prev)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

            </div>
        </header>
    );
};

export default Header;