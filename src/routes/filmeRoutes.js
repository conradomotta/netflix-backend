import { Router } from 'express';
import { filmeController } from '../controllers/filmeController.js';

const router = Router();

// Rotas de Leitura (READ)
router.get('/filmes', filmeController.listar);
router.get('/filmes/:id', filmeController.buscarPorId);
router.get('/filmes/ano/:ano', filmeController.buscarPorAno);

// Rota de Criação (CREATE)
router.post('/filmes', filmeController.criar);

// Rota de Atualização (UPDATE)
router.put('/filmes/:id', filmeController.atualizar);

// Rota de Exclusão (DELETE)
router.delete('/filmes/:id', filmeController.deletar);

export default router;