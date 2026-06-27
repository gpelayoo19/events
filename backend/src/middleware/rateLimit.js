import rateLimit from 'express-rate-limit';

export const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: {
        error: 'Demasiados intentos. Por favor espera 15 minutos para reintentar'
    },
    standardHeaders: true,
    legacyHeaders: false,
});