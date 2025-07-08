import express from 'express';
const router = express.Router();

// Aquí se importarán y montarán las rutas de cada recurso
// Ejemplo: router.use('/leads', require('./leads'));
import leadsRoute from './leadsRoute.js';
router.use('/leads', leadsRoute);

import { chatAsk } from '../controllers/chatController.js';
router.post('/chat/ask', chatAsk);

export default router;
