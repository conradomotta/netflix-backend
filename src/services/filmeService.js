import { filmeRepository } from '../repositories/filmeRepository.js';

export const filmeService = {
  listarFilmes: (categoria) => {
    if (categoria) {
      return filmeRepository.buscarPorCategoria(categoria);
    }
    return filmeRepository.buscarTodos();
  },

  buscarPorId: (id) => {
    const idNumero = Number(id);
    return filmeRepository.buscarPorId(idNumero);
  },

  buscarPorAno: (ano) => {
    const anoNumero = Number(ano);
    return filmeRepository.buscarPorAno(anoNumero);
  }
};