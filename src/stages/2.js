const banco = require("../banco")
const cardapio = require('../cardapio')


function execute(user, msg) {

  if (!cardapio.opcoes[msg]) {
    return [`🤖 _Opção inválida, digite corretamente..._`]
  }

  if ( msg == 1 || msg == 2 || msg == 3 ) {

    banco.db[user].itens.push({ descricao: cardapio.opcoes[msg].descricao, preco: cardapio.opcoes[msg].preco })
    
    banco.db[user].stage = 10
    return [`🤖 Qual a quantidade que deseja pedir ?\n*V -* Voltar a etapa anterior`]
  }

  if ( msg == 4 || msg == 5 || msg == 6 || msg == 7 ) {
    banco.db[user].itens.push({ descricao: cardapio.opcoes[msg].descricao })
    banco.db[user].stage = 20
    return [`🤖 Qual tamanho para a pizza ?\n\n*1 -* média\n*2 -* Grande\n*V -* Voltar a etapa anterior`]
  }

  if ( msg == ".20") {
    banco.db[user].stage = 20
    return [`🤖 Qual tamanho para a pizza ?\n\n*1 -* média\n*2 -* Grande\n*V -* Voltar a etapa anterior`]
  }

  if (msg == 8 || msg == 9 || msg == 10 || msg == 11 ) {
    banco.db[user].itens.push({ descrição: cardapio.opcoes[msg].descricao, preco: cardapio.opcoes[msg].preco })
    banco.db[user].stage = 30
    return [`🤖 Qual a quantidade que voce deseja pedir ?\n*V -* Voltar a etapa anterior`]
  }

  if ( msg == 12 ) {
    banco.db[user].itens.push({ descricao: cardapio.opcoes[msg].descricao})
    banco.db[user].stage = 40
    return [`🤖 Qual tamanho do Açaí\n\n*1 -* 700ml\n*2 -* 500ml\n*V -* Voltar a etapa anterior`]
  }

  if ( msg == 13 || msg == 14 || msg == 15 || msg == 16 ) {
    banco.db[user].itens.push({ descrição: cardapio.opcoes[msg].descricao, preco: cardapio.opcoes[msg].preco })
    banco.db[user].stage = 50
    return [`🤖 Qual a quantidade que voce deseja pedir ?\n*V -* Voltar a etapa anterior`]
  }
}

exports.execute = execute;
