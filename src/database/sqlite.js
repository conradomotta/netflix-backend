import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// Função para abrir e conectar ao arquivo do banco de dados SQLite
export async function conectarBanco() {
  const db = await open({
    filename: './database.db', // Arquivo que será criado na raiz do projeto
    driver: sqlite3.Database
  });

  // Criamos a tabela 'filmes' via SQL puro caso ela ainda não exista
  await db.exec(`
    CREATE TABLE IF NOT EXISTS filmes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      titulo TEXT NOT NULL,
      categoria TEXT NOT NULL,
      ano INTEGER NOT NULL
    );
  `);

  // Se a tabela estiver vazia, inserimos alguns filmes iniciais para teste
  const qtdFilmes = await db.get('SELECT COUNT(*) as total FROM filmes');
  if (qtdFilmes.total === 0) {
    await db.run(
      `INSERT INTO filmes (titulo, categoria, ano) VALUES 
        ('Stranger Things', 'Serie', 2016),
        ('O Oco do Diabo', 'Filme', 2023),
        ('Round 6', 'Serie', 2021),
        ('Interstellar', 'Filme', 2014),
        ('Matrix', 'Filme', 1999)`
    );
    console.log('📦 Banco de dados SQLite populado com os filmes iniciais!');
  }

  return db;
}