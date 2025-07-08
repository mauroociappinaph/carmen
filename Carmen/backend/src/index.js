import 'dotenv/config';
import express from 'express';
import cors from 'cors';
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Importa el barril de rutas
import routes from './routes/index.js';
app.use('/api', routes);

import errorHandler from './middlewares/errorHandler.js';
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
