const { createLeadService, getLeadsFromLinkedinService } = require('../services/leadsService');

// Controller to create a lead
const createLead = async (req, res) => {
  try {
    const lead = await createLeadService(req.body);
    res.status(201).json(lead);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

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

module.exports = { createLead, getLeadsFromLinkedin };
