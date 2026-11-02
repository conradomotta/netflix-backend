import { Router } from 'express';
import { tmdbController } from '../controllers/tmdbController.js';

const router = Router();

// Rota de filmes em alta
router.get('/tmdb/em-alta', tmdbController.obterEmAlta);

// Rota de busca por texto
router.get('/tmdb/pesquisar', tmdbController.pesquisar);

// Rota de detalhes do filme pelo ID do TMDB
router.get('/tmdb/filmes/:id', tmdbController.obterDetalhes);

// Rota do elenco do filme pelo ID do TMDB
router.get('/tmdb/filmes/:id/elenco', tmdbController.obterElenco);

export default router;