const { execFile } = require('child_process');
const axios = require('axios');

// Extrae el nombre de la empresa del summary usando patrones comunes
function extractCompanyFromSummary(summary) {
  const patterns = [
    /at ([A-Za-z0-9&.\- ]+)/i, // "at Empresa"
    /en ([A-Za-z0-9&.\- ]+)/i, // "en Empresa"
    /works at ([A-Za-z0-9&.\- ]+)/i, // "works at Empresa"
    /trabaja en ([A-Za-z0-9&.\- ]+)/i, // "trabaja en Empresa"
  ];
  for (const pattern of patterns) {
    const match = summary.match(pattern);
    if (match && match[1]) {
      return match[1].replace(/[.,;].*$/, '').trim();
    }
  }
  return '';
}

const getEmailFromHunter = async (name, domain) => {
  try {
    const apiKey = process.env.HUNTER_API_KEY;
    const response = await axios.get('https://api.hunter.io/v2/email-finder', {
      params: {
        domain,
        full_name: name,
        api_key: apiKey,
      },
    });
    return response.data.data && response.data.data.email ? response.data.data.email : null;
  } catch (error) {
    return null;
  }
};

const getLeadsFromLinkedinService = async search => {
  return new Promise((resolve, reject) => {
    const args = [
      '-y',
      'firecrawl-mcp',
      'search',
      '--query',
      `${search} site:linkedin.com/in`,
      '--limit',
      '5',
      '--lang',
      'en',
      '--country',
      'us',
    ];

    execFile(
      'npx',
      args,
      {
        env: { ...process.env, FIRECRAWL_API_KEY: process.env.FIRECRAWL_API_KEY },
      },
      async (error, stdout, stderr) => {
        if (error) {
          return reject({ message: 'Error running firecrawl-mcp', error: stderr });
        }
        try {
          const result = JSON.parse(stdout);
          // Enriquecer cada lead con email de Hunter.io y nombre de empresa
          const leads = await Promise.all(
            (result.results || []).map(async item => {
              const name = item.title || '';
              const linkedin = item.url || '';
              const summary = item.snippet || '';
              const company = extractCompanyFromSummary(summary);
              // Intentar extraer dominio de la empresa del summary o dejarlo vacío
              let domain = '';
              const match = summary.match(/([a-zA-Z0-9-]+\.[a-zA-Z]{2,})/);
              if (match) domain = match[1];
              const email = domain && name ? await getEmailFromHunter(name, domain) : null;
              return { name, linkedin, summary, company, email };
            })
          );
          resolve({ message: 'Leads from Linkedin obtained successfully', data: leads });
        } catch (parseError) {
          reject({ message: 'Error parsing firecrawl-mcp output', error: parseError });
        }
      }
    );
  });
};

module.exports = { getLeadsFromLinkedinService };
