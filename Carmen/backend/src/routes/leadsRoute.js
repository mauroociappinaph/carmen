const express = require('express');
const router = express.Router();

const { createLead, getLeadsFromLinkedin } = require('../controllers/leadsControllers');

// Route to create a lead
router.post('/', createLead);

// Route to get leads from Linkedin
router.get('/linkedin-leads', getLeadsFromLinkedin);

module.exports = router;
