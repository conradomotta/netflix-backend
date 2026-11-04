import { filmeRepository } from '../repositories/filmeRepository.js';

export const filmeService = {
  listarFilmes: async (categoria) => {
    if (categoria) {
      return await filmeRepository.buscarPorCategoria(categoria);
    }
    return await filmeRepository.buscarTodos();
  },

  buscarPorId: async (id) => {
    const idNumero = Number(id);
    return await filmeRepository.buscarPorId(idNumero);
  },

  buscarPorAno: async (ano) => {
    const anoNumero = Number(ano);
    return await filmeRepository.buscarPorAno(anoNumero);
  },

  criarFilme: async (dadosFilme) => {
    // Validação: Todos os campos são obrigatórios
    if (!dadosFilme.titulo || !dadosFilme.categoria || !dadosFilme.ano) {
      throw new Error('Todos os campos (titulo, categoria, ano) são obrigatórios!');
    }
    return await filmeRepository.criar(dadosFilme);
  },

  atualizarFilme: async (id, dadosFilme) => {
    const idNumero = Number(id);

    // Validação 1: Verifica se o filme existe antes de tentar atualizar
    const filmeExistente = await filmeRepository.buscarPorId(idNumero);
    if (!filmeExistente) {
      return null;
    }

    // Validação 2: Verifica se os campos obrigatórios foram fornecidos
    if (!dadosFilme.titulo || !dadosFilme.categoria || !dadosFilme.ano) {
      throw new Error('Todos os campos (titulo, categoria, ano) são obrigatórios para atualização!');
    }

    return await filmeRepository.atualizar(idNumero, dadosFilme);
  },

  deletarFilme: async (id) => {
    const idNumero = Number(id);

    // Verifica se o filme existe
    const filmeExistente = await filmeRepository.buscarPorId(idNumero);
    if (!filmeExistente) {
      return false;
    }

    return await filmeRepository.deletar(idNumero);
  }
};