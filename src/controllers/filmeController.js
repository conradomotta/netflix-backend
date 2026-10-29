import { filmeService } from '../services/filmeService.js';

export const filmeController = {
  listar: (req, res) => {
    const { categoria } = req.query;
    const resultado = filmeService.listarFilmes(categoria);
    return res.json(resultado);
  },

  buscarPorId: (req, res) => {
    const { id } = req.params;
    const filme = filmeService.buscarPorId(id);

    if (!filme) {
      return res.status(404).json({ mensagem: 'Filme não encontrado no catálogo!' });
    }

    return res.json(filme);
  },

  buscarPorAno: (req, res) => {
    const { ano } = req.params;
    const filmes = filmeService.buscarPorAno(ano);

    if (filmes.length === 0) {
      return res.status(404).json({ mensagem: 'Nenhum filme encontrado para este ano!' });
    }

    return res.json(filmes);
  }
};