import { conectarBanco } from '../database/sqlite.js';

export const filmeRepository = {
  // 1. Busca todos os filmes usando SQL: SELECT * FROM filmes
  buscarTodos: async () => {
    const db = await conectarBanco();
    return await db.all('SELECT * FROM filmes');
  },

  // 2. Busca filme por ID usando SQL: SELECT com WHERE id = ?
  buscarPorId: async (id) => {
    const db = await conectarBanco();
    return await db.get('SELECT * FROM filmes WHERE id = ?', [id]);
  },

  // 3. Busca filmes por categoria (ignora maiúsculas/minúsculas usando LOWER)
  buscarPorCategoria: async (categoria) => {
    const db = await conectarBanco();
    return await db.all(
      'SELECT * FROM filmes WHERE LOWER(categoria) = LOWER(?)', 
      [categoria]
    );
  },

  // 4. Busca filmes por ano
  buscarPorAno: async (ano) => {
    const db = await conectarBanco();
    return await db.all('SELECT * FROM filmes WHERE ano = ?', [ano]);
  },

  // 5. Insere um novo filme usando SQL: INSERT INTO
  criar: async (filme) => {
    const db = await conectarBanco();
    const resultado = await db.run(
      'INSERT INTO filmes (titulo, categoria, ano) VALUES (?, ?, ?)',
      [filme.titulo, filme.categoria, filme.ano]
    );
    
    return {
      id: resultado.lastID,
      ...filme
    };
  }
};