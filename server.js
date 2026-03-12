// 01 - Import do módulo Express para criar o servidor web
const express = require("express");

// 02 - Criação de uma instância do aplicativo Express
const app = express();

// 03 - Definição da porta em que o servidor
// irá escutar (3000 ou a porta definida na variável de ambiente)
const PORT = process.env.PORT || 3000;

// 04 - Middleware para parsear JSON no corpo das requisições
app.use(express.json());

// 05 - Definição de uma rota para a raiz do site ("/") 
// que responde com "Hello World!"
app.get("/", (req, res) => {
  // 06 - Envia uma resposta JSON com a mensagem "Hello World!"
  res.json({message: "Hello World!"});
});