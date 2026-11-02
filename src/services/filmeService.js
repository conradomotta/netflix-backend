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
  }
};