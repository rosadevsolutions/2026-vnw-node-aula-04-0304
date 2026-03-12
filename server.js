// 01 - Import do módulo Express para criar o servidor web
const express = require("express");

// 02 - Criação de uma instância do aplicativo Express
const app = express();

// 03 - Definição da porta em que o servidor
// irá escutar (3000 ou a porta definida na variável de ambiente)
const PORT = process.env.PORT || 3000;

// 04 - Middleware personalizado para logar as requisições
function meuLog(req, res, next) {
  // 05 - Exibe no console a data, método e URL da requisição
  console.log(`[${new Date().toLocaleDateString('pt-BR')}] - Requisição (método: ${req.method}) realizada no endpoint "${req.url}"`);
  // 06 - Chama a próxima função de middleware na pilha
  next();
}
// 07 - Uso do middleware personalizado para logar as requisições
app.use(meuLog);


// 08 - Definição de uma rota para a raiz do site ("/") 
// que responde com "Hello World!"
app.get("/", (req, res) => {
  // 09 - Envia uma resposta JSON com a mensagem "Hello World!"
  res.send({message: "Hello World!"});
});

// 10 - Definição de uma rota para "/data" 
app.post("/data", (req, res) => {
  // 11 - Extrai os dados do corpo da requisição
  const data = req.body;

  // 12 - Envia uma resposta JSON com 
  // a mensagem "Dados recebidos!" e os dados recebidos
  res.status(200).json({
    message: "Dados recebidos!",
    data
  });
});

// 10 - Início do servidor na porta 3000
app.listen(PORT, () => {
  // 11 - Exibe no console a mensagem indicando que o servidor está rodando e a URL para acessá-lo
  console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});