import 'dotenv/config';

// Endereço base da API do TMDB
const BASE_URL = 'https://api.themoviedb.org/3';

// Configuração dos cabeçalhos das requisições com o nosso Token de Acesso
const headers = {
  accept: 'application/json',
  Authorization: `Bearer ${process.env.TMDB_TOKEN}`
};

export const tmdbService = {
  // 1. Buscar os filmes que estão em alta (Trends da semana)
  buscarEmAlta: async () => {
    const response = await fetch(`${BASE_URL}/trending/movie/week?language=pt-BR`, { headers });
    
    if (!response.ok) {
      throw new Error('Falha ao buscar filmes em alta no TMDB');
    }

    return await response.json();
  },

  // 2. Buscar detalhes completos de um filme específico pelo ID do TMDB
  buscarDetalhes: async (id) => {
    const response = await fetch(`${BASE_URL}/movie/${id}?language=pt-BR`, { headers });
    
    if (!response.ok) {
      return null;
    }

    return await response.json();
  },

  // 3. Buscar o elenco e equipe técnica de um filme
  buscarElenco: async (id) => {
    const response = await fetch(`${BASE_URL}/movie/${id}/credits?language=pt-BR`, { headers });
    
    if (!response.ok) {
      return null;
    }

    return await response.json();
  },

  // 4. Pesquisar filmes por nome/palavra-chave
  pesquisarFilme: async (nome) => {
    const response = await fetch(`${BASE_URL}/search/movie?query=${encodeURIComponent(nome)}&language=pt-BR`, { headers });
    
    if (!response.ok) {
      throw new Error('Falha ao pesquisar filme no TMDB');
    }

    return await response.json();
  }
};