import express from 'express';
const router = express.Router();

import { getLeadsFromWeb } from '../controllers/leadsControllers.js';

// Route to get leads from any site
router.get('/web-leads', getLeadsFromWeb);

export default router;
