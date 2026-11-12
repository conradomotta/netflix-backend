import 'dotenv/config';
import express from 'express';

// -----------------------------------------------------------------------------
// [NOVA LINHA ADICIONADA]
// Importamos a biblioteca CORS que acabamos de instalar via npm.
// -----------------------------------------------------------------------------
import cors from 'cors'; 

import filmeRoutes from './src/routes/filmeRoutes.js';
import tmdbRoutes from './src/routes/tmdbRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

// -----------------------------------------------------------------------------
// [NOVA LINHA ADICIONADA]
// Ativamos o middleware CORS no Express.
// O que essa linha faz? Ela adiciona cabeçalhos especiais em todas as respostas HTTP
// dizendo ao navegador: "Pode liberar o acesso para qualquer página Front-end consultar minha API!".
// -----------------------------------------------------------------------------
app.use(cors());

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