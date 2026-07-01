import { Link } from "react-router-dom";
import styles from "./Styles/NotFound.module.css";
import SEO from "../components/common/SEO.jsx";

const NotFound = () => {
    return (
        <>
            <SEO
                title="Página no encontrada"
                description="La página que estás buscando no existe. Vuelve al inicio de Eventos ODC."
            />
            <main className={styles.page}>
                <div className={styles.container}>
                    <span className={styles.code}>404</span>
                    <h1 className={styles.title}>Página no encontrada</h1>
                    <p className={styles.description}>
                        Lo sentimos, la página que estás buscando no existe. Puede que haya sido eliminada o esté temporalmente no disponible.
                    </p>
                    <Link to="/" className={styles.btn}>Volver al inicio</Link>
                </div>
            </main>
        </>
    );
};

export default NotFound;