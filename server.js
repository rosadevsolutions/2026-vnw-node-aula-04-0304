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
  console.log(
    `\nSTATUS: Requisição realizada \nMÉTODO: ${req.method} \nENDPOINT: "${req.url}" \nDATA: ${new Date().toLocaleDateString("pt-BR")}
    \n`,
  );
  // 06 - Chama a próxima função de middleware na pilha
  next();
}

function verificarAcesso(req, res, next) {
  const acessoNegado = true;

  if (acessoNegado) {
    res.send(
      "🔴 ACESSO NEGADO! Acesso restrito a usuários devidamente autorizados.",
    );
  }
  next();
}

// 07 - Uso do middleware personalizado para logar as requisições
app.use(meuLog);

// 08 - Definição de uma rota para a raiz do site ("/")"
app.get("/", (req, res) => {
  // 09 - Responde enviando uma mensagem "Dia chuvoso!"
  res.send("Usuário conectado");
});

// 12 - Definição de uma rota específica do site ("/area-restrita")
app.get("/area-restrita", verificarAcesso, (req, res) => {
  // 13 - Enviar uma resposta com uma mensagem "ACESSO NEGADO!"
  res.send("🟢 ACESSO AUTORIZADO! Seja bem-vindo!");
});

// 14 - Definição de rota dinamica para capturar o nome do produto a partir da URL
app.get("/produto/:nome", (req, res) => {
  // 15 - Capturar o valor do parâmetro "nome" da URL usando req.params.nome
  const nome = req.params.nome;
  // 16 - Formatar o nome com a primeira letra maiúscula e o restante em minúscula
  const nomeFormatado = nome.charAt(0).toUpperCase() + nome.slice(1);
  // 17 - Enviar uma resposta com a mensagem "PRODUTO SELECIONADO: [NOME DO PRODUTO]"
  res.send(`PRODUTO SELECIONADO: ${nomeFormatado}`);
});

// 15 - Definição de rota dinamica para capturar o ID do usuário a partir da URL
app.get("/usuario/:id", (req, res) => {
  const id = req.params.id;
  res.send(`ID DO USUÁRIO: ${id}`);
});

// 10 - Início do servidor na porta 3000
app.listen(PORT, () => {
  // 11 - Exibe no console a mensagem indicando que o servidor está rodando e a URL para acessá-lo
  console.log(
    `\n👍 SERVIDOR INICIALIZADO | 🏚️ PORTA: http://localhost:${PORT}`,
  );
});
