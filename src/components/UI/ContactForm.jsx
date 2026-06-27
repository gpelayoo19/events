import { useState } from 'react';
import styles from './Styles/ContactForm.module.css';
import Button from '../UI/Button';

const initialForm = {
    nombre: '',
    correo: '',
    telefono: '',
    descripcion: '',
};

const validate = (form) => {
    const errors = {};
    if (!form.nombre.trim()) errors.nombre = 'El nombre es requerido';
    if (!form.correo.trim()) errors.correo = 'El correo es requerido';
    else if (!/\S+@\S+\.\S+/.test(form.correo)) errors.correo = 'Correo inválido';
    if (!form.descripcion.trim()) errors.descripcion = 'El mensaje es requerido';
    return errors;
};

const ContactForm = () => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState('idle');

    const handleChange = (e) => {
        const { id, value } = e.target;
        setForm((prev) => ({ ...prev, [id]: value }));
        if (errors[id]) setErrors((prev) => ({ ...prev, [id]: '' }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = validate(form);
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setStatus('sending');

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            const data = await response.json();

            if (!response.ok) {
                if (data.errors) setErrors(data.errors);
                else setStatus('error');
                return;
            }

            setStatus('success');
            setErrors({});
            setForm(initialForm);
        } catch {
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className={styles.successContainer}>
                <div className={styles.successIcon}>✓</div>
                <h3 className={styles.successTitle}>¡Mensaje enviado!</h3>
                <p className={styles.successText}>
                    Gracias por contactarnos. Te responderemos a la brevedad posible.
                </p>
                <button
                    className={styles.successBtn}
                    onClick={() => setStatus('idle')}
                >
                    Enviar otro mensaje
                </button>
            </div>
        );
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.field}>
                <label htmlFor="nombre" className={styles.label}>Nombre</label>
                <input
                    id="nombre"
                    type="text"
                    className={`${styles.input} ${errors.nombre ? styles.inputError : ''}`}
                    placeholder="Tu nombre completo"
                    autoComplete="name"
                    value={form.nombre}
                    onChange={handleChange}
                    disabled={status === 'sending'}
                />
                {errors.nombre && <span className={styles.error}>{errors.nombre}</span>}
            </div>

            <div className={styles.field}>
                <label htmlFor="correo" className={styles.label}>Correo</label>
                <input
                    id="correo"
                    type="email"
                    className={`${styles.input} ${errors.correo ? styles.inputError : ''}`}
                    placeholder="tu@email.com"
                    autoComplete="email"
                    value={form.correo}
                    onChange={handleChange}
                    disabled={status === 'sending'}
                />
                {errors.correo && <span className={styles.error}>{errors.correo}</span>}
            </div>

            <div className={styles.field}>
                <label htmlFor="telefono" className={styles.label}>Teléfono</label>
                <input
                    id="telefono"
                    type="tel"
                    className={styles.input}
                    placeholder="Teléfono"
                    autoComplete="tel"
                    value={form.telefono}
                    onChange={handleChange}
                    disabled={status === 'sending'}
                />
            </div>

            <div className={styles.field}>
                <label htmlFor="descripcion" className={styles.label}>Cuéntanos sobre tu evento</label>
                <textarea
                    id="descripcion"
                    rows={5}
                    className={`${styles.textarea} ${errors.descripcion ? styles.inputError : ''}`}
                    placeholder="Escribe aquí..."
                    value={form.descripcion}
                    onChange={handleChange}
                />
                {errors.descripcion && <span className={styles.error}>{errors.descripcion}</span>}
            </div>

            <Button type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
            </Button>

            {status === 'error' && (
                <p className={styles.errorMsg}>
                    Ocurrió un error. Por favor intenta de nuevo.
                </p>
            )}
        </form>
    );
};

export default ContactForm;