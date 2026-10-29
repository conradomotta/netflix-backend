// 1. Importamos o framework Express
const express = require('express');  

// 2. Inicializamos o servidor Express
const app = express();  

// 3. Definimos a porta do servidor
const PORT = 3000;  

// 4. "Banco de dados" simulado: lista de filmes
const filmes = [  
  { id: 1, titulo: 'Stranger Things', categoria: 'Serie', ano: 2016 },  
  { id: 2, titulo: 'O Oco do Diabo', categoria: 'Filme', ano: 2023 },  
  { id: 3, titulo: 'Round 6', categoria: 'Serie', ano: 2021 },  
  { id: 4, titulo: 'Interstellar', categoria: 'Filme', ano: 2014 },  
  { id: 5, titulo: 'Matrix', categoria: 'Filme', ano: 1999 }  
];  

// Rota principal de boas-vindas
app.get('/', (req, res) => {  
  res.send('🎬 Bem-vindo à API do Clone da Netflix!');
});  

// Rota de status do servidor
app.get('/status', (req, res) => {  
  res.json({    
    status: 'ONLINE',    
    mensagem: 'Servidor da Netflix rodando com sucesso!',    
    timestamp: new Date()  
  });
});  

// Rota 1: Listar TODOS os filmes ou FILTRAR por categoria (?categoria=Serie)
app.get('/filmes', (req, res) => {  
  const { categoria } = req.query;  
  
  if (categoria) {    
    const filmesFiltrados = filmes.filter(      
      f => f.categoria.toLowerCase() === categoria.toLowerCase()    
    );    
    return res.json(filmesFiltrados);  
  }  
  
  res.json(filmes);
});  

// Rota 2: Buscar UM filme específico pelo seu ID (/filmes/1)
app.get('/filmes/:id', (req, res) => {  
  const idFilme = Number(req.params.id);  
  const filmeEncontrado = filmes.find(f => f.id === idFilme);  

  if (!filmeEncontrado) {    
    return res.status(404).json({ mensagem: 'Filme não encontrado no catálogo!' });  
  }  

  res.json(filmeEncontrado);
}); // <-- A rota de ID fecha corretamente AQUI!

// Rota 3 (Desafio): Buscar filmes por ANO (/filmes/ano/2021)
app.get('/filmes/ano/:ano', (req, res) => {
  // Convertemos o ano recebido na URL de texto (string) para número
  const anoBusca = Number(req.params.ano);

  // Usamos .filter() para encontrar TODOS os filmes lançados naquele ano
  const filmesDoAno = filmes.filter(f => f.ano === anoBusca);

  // Se o array voltar vazio (comprimento 0), significa que nada foi encontrado
  if (filmesDoAno.length === 0) {
    return res.status(404).json({ mensagem: 'Nenhum filme encontrado para este ano!' });
  }

  // Retorna a lista de filmes encontrados naquele ano em formato JSON
  res.json(filmesDoAno);
});

// 5. Inicialização do servidor
app.listen(PORT, () => {  
  console.log(`🚀 Servidor da Netflix rodando em http://localhost:3000`);
});