import { filmeService } from '../services/filmeService.js';

export const filmeController = {
  listar: async (req, res) => {
    const { categoria } = req.query;
    const resultado = await filmeService.listarFilmes(categoria);
    return res.json(resultado);
  },

  buscarPorId: async (req, res) => {
    const { id } = req.params;
    const filme = await filmeService.buscarPorId(id);

    if (!filme) {
      return res.status(404).json({ mensagem: 'Filme não encontrado no catálogo!' });
    }

    return res.json(filme);
  },

  buscarPorAno: async (req, res) => {
    const { ano } = req.params;
    const filmes = await filmeService.buscarPorAno(ano);

    if (filmes.length === 0) {
      return res.status(404).json({ mensagem: 'Nenhum filme encontrado para este ano!' });
    }

    return res.json(filmes);
  }
};