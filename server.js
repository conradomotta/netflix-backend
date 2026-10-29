// 1. Chamamos a biblioteca Express que instalamos para uso no código
const express = require('express');

// 2. Inicializamos a aplicação Express (criamos o nosso servidor)
const app = express();

// 3. Definimos o endereço da "porta" do computador onde o servidor vai rodar.
// Pense na porta como um canal de TV: o canal 3000 será o canal da nossa API.
const PORT = 3000;

// 4. Criamos uma ROTA. 
// Rota é o caminho que o usuário digita no navegador. 
// O caminho '/' representa a página inicial (raiz).
// - 'req' (requisição): é o pedido que vem do usuário.
// - 'res' (resposta): é a resposta que o servidor devolve para o usuário.
app.get('/', (req, res) => {
  res.send('🎬 Bem-vindo à API do Clone da Netflix!');
});

app.get('/status', (req, res) => {
  res.send('Status do Servidor Netflix: ONLINE!');
});

// 5. Ligamos o servidor para começar a escutar os pedidos no canal (porta) 3000
app.listen(PORT, () => {
  console.log(`Servidor da Netflix rodando em http://localhost:3000`);
});