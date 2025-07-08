const express = require('express');
const router = express.Router();

const { getLeadsFromWeb } = require('../controllers/leadsControllers');

// Route to get leads from any site
router.get('/web-leads', getLeadsFromWeb);

module.exports = router;
