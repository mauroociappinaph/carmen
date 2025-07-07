const express = require('express');
const router = express.Router();

const { crearLead } = require('../controllers/leads');

// Ruta para crear un lead
router.post('/', crearLead);

module.exports = router;
