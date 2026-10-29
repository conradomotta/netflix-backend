import { Router } from 'express';
import { filmeController } from '../controllers/filmeController.js';

const router = Router();

router.get('/filmes', filmeController.listar);
router.get('/filmes/:id', filmeController.buscarPorId);
router.get('/filmes/ano/:ano', filmeController.buscarPorAno);

export default router;