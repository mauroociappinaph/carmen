const { getLeadsFromLinkedinService } = require('../services/leadsService');

// Controller to get leads from Linkedin
const getLeadsFromLinkedin = async (req, res) => {
  try {
    const search = req.query.q || 'marketing';
    const leads = await getLeadsFromLinkedinService(search);
    res.status(200).json(leads);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getLeadsFromLinkedin };
