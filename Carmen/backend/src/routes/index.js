const express = require('express');
const router = express.Router();

// Aquí se importarán y montarán las rutas de cada recurso
// Ejemplo: router.use('/leads', require('./leads'));
router.use('/leads', require('./leadsRoute'));

const { chatAsk } = require('../controllers/chatController');
router.post('/chat/ask', chatAsk);

module.exports = router;
