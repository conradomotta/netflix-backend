import { filmeService } from '../services/filmeService.js';

export const filmeController = {
  listar: async (req, res) => {
    try {
      const { categoria } = req.query;
      const resultado = await filmeService.listarFilmes(categoria);
      return res.json(resultado);
    } catch (error) {
      return res.status(500).json({ erro: 'Erro ao buscar filmes.' });
    }
  },

  buscarPorId: async (req, res) => {
    try {
      const { id } = req.params;
      const filme = await filmeService.buscarPorId(id);

      if (!filme) {
        return res.status(404).json({ mensagem: 'Filme não encontrado no catálogo!' });
      }

      return res.json(filme);
    } catch (error) {
      return res.status(500).json({ erro: 'Erro ao buscar filme por ID.' });
    }
  },

  buscarPorAno: async (req, res) => {
    try {
      const { ano } = req.params;
      const filmes = await filmeService.buscarPorAno(ano);

      if (filmes.length === 0) {
        return res.status(404).json({ mensagem: 'Nenhum filme encontrado para este ano!' });
      }

      return res.json(filmes);
    } catch (error) {
      return res.status(500).json({ erro: 'Erro ao buscar filmes por ano.' });
    }
  },

  criar: async (req, res) => {
    try {
      const { titulo, categoria, ano } = req.body;
      const novoFilme = await filmeService.criarFilme({ titulo, categoria, ano: Number(ano) });
      
      // 201 Created: Retorno indicando que o recurso foi inserido com sucesso
      return res.status(201).json(novoFilme);
    } catch (error) {
      return res.status(400).json({ erro: error.message });
    }
  },

  atualizar: async (req, res) => {
    try {
      const { id } = req.params;
      const { titulo, categoria, ano } = req.body;

      const filmeAtualizado = await filmeService.atualizarFilme(id, { 
        titulo, 
        categoria, 
        ano: Number(ano) 
      });

      if (!filmeAtualizado) {
        return res.status(404).json({ mensagem: 'Filme não encontrado para atualização!' });
      }

      return res.json(filmeAtualizado);
    } catch (error) {
      return res.status(400).json({ erro: error.message });
    }
  },

  deletar: async (req, res) => {
    try {
      const { id } = req.params;
      const deletado = await filmeService.deletarFilme(id);

      if (!deletado) {
        return res.status(404).json({ mensagem: 'Filme não encontrado para remoção!' });
      }

      return res.json({ mensagem: 'Filme removido do catálogo com sucesso!' });
    } catch (error) {
      return res.status(500).json({ erro: 'Erro ao remover filme do catálogo.' });
    }
  }
};