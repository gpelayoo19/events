import { Router } from 'express';
import { Resend } from 'resend';
import { contactLimiter } from '../middleware/rateLimit.js';

const router = Router();

const validate = (body) => {
    const errors = {};
    if (!body.nombre?.trim()) errors.nombre = 'El nombre es requerido';
    if (!body.correo?.trim()) errors.correo = 'El correo es requerido';
    else if (!/\S+@\S+\.\S+/.test(body.correo)) errors.correo = 'Correo inválido';
    if (!body.descripcion?.trim()) errors.descripcion = 'El mensaje es requerido';
    return errors;
};

router.post('/', contactLimiter, async (req, res) => {
    const { nombre, correo, telefono, descripcion } = req.body;

    const errors = validate(req.body);
    if (Object.keys(errors).length > 0) {
        return res.status(400).json({ errors });
    }

    try {
        const resend = new Resend(process.env.RESEND_API_KEY);

        await resend.emails.send({
            from: process.env.EMAIL_FROM,
            to: process.env.EMAIL_TO,
            subject: `Nuevo mensaje de ${nombre} — Eventos ODC`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #d4af37; border-bottom: 1px solid #d4af37; padding-bottom: 12px;">
                        Nuevo mensaje desde el sitio web
                    </h2>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 12px 0; color: #666; width: 120px;">Nombre</td>
                            <td style="padding: 12px 0; font-weight: bold;">${nombre}</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 0; color: #666;">Correo</td>
                            <td style="padding: 12px 0;">${correo}</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 0; color: #666;">Teléfono</td>
                            <td style="padding: 12px 0;">${telefono || 'No proporcionado'}</td>
                        </tr>
                        <tr>
                            <td style="padding: 12px 0; color: #666; vertical-align: top;">Mensaje</td>
                            <td style="padding: 12px 0;">${descripcion.replace(/\n/g, '<br>')}</td>
                        </tr>
                    </table>
                </div>
            `,
        });

        res.status(200).json({ message: 'Mensaje enviado correctamente' });
    } catch (error) {
        console.error('Error Resend:', error);
        res.status(500).json({ error: 'Error al enviar el mensaje. Intenta de nuevo.' });
    }
});

export default router;