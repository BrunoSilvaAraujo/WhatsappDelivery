const banco = require("../banco")
const fs = require('fs')


function execute(user, msg, contato, nomeContato) {

  let dadosAtuais = JSON.parse(fs.readFileSync('./cadastro.json'))
  let telefoneNormal = user.substring(2,13)
  banco.db[user].telefone = telefoneNormal

  let itensPedido = []
  controleClienteExistente = 0
  dadosAtuais.map(item => {
    if (item.telefone == telefoneNormal) {
      banco.db[user].nome = item.nome
      banco.db[user].endereco = item.endereco
      banco.db[user].telefone = item.telefone
      controleClienteExistente = 1
      itensPedido.push(item.itens)
    }
  })
  pedidos = "=======================\n"
  itensPedido[itensPedido.length -1].map(item => {
    pedidos += `_Item_ *---* ${item.descricao}\n_Quantidade_ *---* ${item.quantidade}\n_Pagamento_ *---* ${item.pagamento}\n=======================\n`
  })

  let nomeDoContato = ""
  if (nomeContato != undefined) {
    nomeDoContato = nomeContato
  }else {
    nomeDoContato = ""
  }

  if (controleClienteExistente == 0) {
    banco.db[user].stage = 6
    return [`🤖 Olá *_${nomeDoContato}_* sou um assistente virtual\n\nVou te ajudar com o seu pedido...\n\nPosso lhe apresentar nosso cardápio ?`,
    `*1 -* Sim, quero ver o cardápio.\n\n*2 -* Não, cancelar o pedido.`
    ]
  
  }
  
  banco.db[user].stage = 1 

  
  return [
    `🤖 Olá *_${nomeDoContato}_* seja Bem Vindo novamente😃!!!\n\nEsse foi seu último pedido:\n\n ${pedidos}\nQuer que enviemos novamente ? `,
    `*3 -* Sim, quero esse pedido outra vez.\n*4 -* Não, quero ver o cardápio.`
  ];
}

exports.execute = execute;
