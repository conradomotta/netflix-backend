import express from 'express';
import filmeRoutes from './src/routes/filmeRoutes.js';

const app = express();
const PORT = 3000;

app.use(express.json());

// Rota principal
app.get('/', (req, res) => {
  res.send('🎬 Bem-vindo à API do Clone da Netflix (Módulo 2)!');
});

// Registra as rotas de filmes
app.use(filmeRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Servidor refatorado rodando em http://localhost:3000`);
});