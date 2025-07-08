import axios from 'axios';
import { getLeadsFromWebService } from '../services/leadsService.js';

// Utilidad para preguntar a Mistral
async function askMistral(message) {
  const apiKey = process.env.API_KEY_MISTRAL;

  const response = await axios.post(
    'https://api.mistral.ai/v1/chat/completions',
    {
      model: 'mistral-tiny',
      messages: [
        {
          role: 'system',
          content:
            'Eres un asistente que ayuda a buscar leads en la web. Si el usuario pide buscar leads, responde SOLO con un JSON con los campos: { "search": "término de búsqueda", "site": "dominio opcional" }. Si no es una búsqueda de leads, responde { "search": null }.',
        },
        { role: 'user', content: message },
      ],
    },
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    }
  );
  // Intentar extraer el JSON de la respuesta
  const text = response.data.choices[0].message.content;
  console.log('Mistral raw response:', text);
  try {
    return JSON.parse(text);
  } catch {
    return { search: null };
  }
}

// Controlador principal del chat
const chatAsk = async (req, res) => {
  try {
    const { message } = req.body;
    console.log('Mensaje recibido del usuario:', message);
    if (!message) return res.status(400).json({ error: 'Message is required' });
    const mistralResult = await askMistral(message);
    console.log('Respuesta de Mistral interpretada:', mistralResult);
    if (!mistralResult.search) {
      return res.status(200).json({ message: 'No lead search detected', data: [] });
    }
    const leads = await getLeadsFromWebService(mistralResult.search, mistralResult.site || '');
    console.log('Leads encontrados:', leads);
    res.status(200).json(leads);
  } catch (error) {
    console.error('Error en chatAsk:', error);
    res.status(500).json({ error: error.message });
  }
};

export { chatAsk };
