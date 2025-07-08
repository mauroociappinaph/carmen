import { getLeadsFromWebService } from '../services/leadsService.js';

// Controller to get leads from any site
const getLeadsFromWeb = async (req, res) => {
  try {
    const search = req.query.q || 'marketing';
    const site = req.query.site || '';
    const leads = await getLeadsFromWebService(search, site);
    res.status(200).json(leads);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { getLeadsFromWeb };
