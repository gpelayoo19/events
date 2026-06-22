import { Link } from 'react-router-dom';
import styles from './Styles/Button.module.css';

const Button = ({ children, to, variant = 'primary', type = 'button', onClick }) => {
    const className = `${styles.btn} ${styles[variant]}`;

    if (to) {
        return <Link to={to} className={className}>{children}</Link>;
    }

    return (
        <button type={type} className={className} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;