import 'dotenv/config';
import express from 'express';
import filmeRoutes from './src/routes/filmeRoutes.js';
import tmdbRoutes from './src/routes/tmdbRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Rota de boas-vindas
app.get('/', (req, res) => {
  res.send('🎬 Bem-vindo à API do Clone da Netflix com integração ao TMDB!');
});

// Rotas locais e rotas externas
app.use(filmeRoutes);
app.use(tmdbRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando com sucesso em http://localhost:${PORT}`);
});