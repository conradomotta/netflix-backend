// Nosso "banco de dados" simulado na memória
const filmes = [
  { id: 1, titulo: 'Stranger Things', categoria: 'Serie', ano: 2016 },
  { id: 2, titulo: 'O Oco do Diabo', categoria: 'Filme', ano: 2023 },
  { id: 3, titulo: 'Round 6', categoria: 'Serie', ano: 2021 },
  { id: 4, titulo: 'Interstellar', categoria: 'Filme', ano: 2014 },
  { id: 5, titulo: 'Matrix', categoria: 'Filme', ano: 1999 }
];

export const filmeRepository = {
  buscarTodos: () => filmes,
  
  buscarPorId: (id) => filmes.find(f => f.id === id),
  
  buscarPorCategoria: (categoria) => 
    filmes.filter(f => f.categoria.toLowerCase() === categoria.toLowerCase()),
    
  buscarPorAno: (ano) => filmes.filter(f => f.ano === ano)
};