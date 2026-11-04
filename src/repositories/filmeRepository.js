import { conectarBanco } from '../database/sqlite.js';

export const filmeRepository = {
  // 1. READ: Buscar todos os filmes
  buscarTodos: async () => {
    const db = await conectarBanco();
    return await db.all('SELECT * FROM filmes');
  },

  // 2. READ: Buscar um filme por ID
  buscarPorId: async (id) => {
    const db = await conectarBanco();
    return await db.get('SELECT * FROM filmes WHERE id = ?', [id]);
  },

  // 3. READ: Buscar filmes por categoria
  buscarPorCategoria: async (categoria) => {
    const db = await conectarBanco();
    return await db.all(
      'SELECT * FROM filmes WHERE LOWER(categoria) = LOWER(?)', 
      [categoria]
    );
  },

  // 4. READ: Buscar filmes por ano
  buscarPorAno: async (ano) => {
    const db = await conectarBanco();
    return await db.all('SELECT * FROM filmes WHERE ano = ?', [ano]);
  },

  // 5. CREATE: Inserir um novo filme no banco
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
  },

  // 6. UPDATE: Atualizar os dados de um filme existente
  atualizar: async (id, filme) => {
    const db = await conectarBanco();
    await db.run(
      'UPDATE filmes SET titulo = ?, categoria = ?, ano = ? WHERE id = ?',
      [filme.titulo, filme.categoria, filme.ano, id]
    );

    return {
      id: Number(id),
      ...filme
    };
  },

  // 7. DELETE: Remover um filme pelo seu ID
  deletar: async (id) => {
    const db = await conectarBanco();
    const resultado = await db.run('DELETE FROM filmes WHERE id = ?', [id]);
    // Retorna true se alterou (deletou) ao menos 1 linha no banco
    return resultado.changes > 0;
  }
};