import { tmdbService } from '../services/tmdbService.js';

export const tmdbController = {
  obterEmAlta: async (req, res) => {
    try {
      const dados = await tmdbService.buscarEmAlta();
      return res.json(dados);
    } catch (error) {
      return res.status(500).json({ erro: error.message });
    }
  },

  obterDetalhes: async (req, res) => {
    try {
      const { id } = req.params;
      const filme = await tmdbService.buscarDetalhes(id);

      if (!filme) {
        return res.status(404).json({ mensagem: 'Filme não encontrado no TMDB!' });
      }

      return res.json(filme);
    } catch (error) {
      return res.status(500).json({ erro: 'Erro interno ao consultar o TMDB' });
    }
  },

  obterElenco: async (req, res) => {
    try {
      const { id } = req.params;
      const elenco = await tmdbService.buscarElenco(id);

      if (!elenco) {
        return res.status(404).json({ mensagem: 'Elenco não encontrado para este filme!' });
      }

      return res.json(elenco);
    } catch (error) {
      return res.status(500).json({ erro: 'Erro interno ao consultar o TMDB' });
    }
  },

  pesquisar: async (req, res) => {
    try {
      const { query } = req.query;

      if (!query) {
        return res.status(400).json({ mensagem: 'O parâmetro de busca ?query=nome é obrigatório!' });
      }

      const resultado = await tmdbService.pesquisarFilme(query);
      return res.json(resultado);
    } catch (error) {
      return res.status(500).json({ erro: 'Erro ao realizar pesquisa no TMDB' });
    }
  }
};