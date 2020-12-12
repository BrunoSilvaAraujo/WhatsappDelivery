const banco = require("../banco");
const stages = require("../stages");
const cardapio = require('../cardapio')

function execute(user, msg, contato, nomeContato) {

  let arrayControle = [ 'C', 'c', 'D', 'd', 1 ]

  arrayControle.map(item => {

    if ( msg != item ) {
      return [`🤖 Opção inválida, digite corretamente...`]
    }

  })

  if ( msg == 1 ) {
    banco.db[user].stage = 4
    return stages.step[4].obj.execute(user, "1")
  }

  if ( msg == 'C' || msg == "c" ) {

    return stages.step[4].obj.execute(user, "")

  }

  if ( msg == 'D' || msg == "d" ) {
    banco.db[user].stage = 4
    return [`🤖 Digite o valor em dinheiro para levarmos o troco... `]
  }

  let resumo = " *_RESUMO DO PEDIDO_* \n\n";
  let total = 0;
  banco.db[user].itens.forEach(item => {

    if (item.descricao == "Tijela Açai") {
      let preco = parseFloat(item.preco);
      resumo += `-----------------------------------------\n${item.descricao} ${item.quantidade} Un  R$ ${item.preco}
      \nQuantidade em ml: ${item.tamanho}\nObservação: ${item.observacao}
      \n-----------------------------------------`

      total += preco * item.quantidade
    }
    else if (item.descricao.slice(0, 5) == "Pizza") {
      let preco = parseFloat(item.preco);
      resumo += `-----------------------------------------\n${item.descricao} ${item.quantidade} Un  R$ ${item.preco}
      \nTipo: ${item.tipo}\nSegundo sabor: ${item.sabor2}\nObservação: ${item.observacao}
      \n-----------------------------------------`

      total += preco * item.quantidade
    }
    else {
      let preco = parseFloat(item.preco);
      resumo += `-----------------------------------------\n${item.descricao} ${item.quantidade} Un  R$ ${item.preco}
      \nObservação: ${item.observacao}\n-----------------------------------------`

      total += preco * item.quantidade
    }
    
  })
  
  let totalStr = total.toString();
  if (totalStr.slice(1, 2) == "." || totalStr.slice(2, 3) == "." || totalStr.slice(3, 4) == ".") {

    if ( totalStr.length == 4 || totalStr.length == 5 || totalStr.length == 6 ) {

      resumo += `\n\n_Taxa de entrega_ R$ 3.00\n`;
      resumo += `Total -------- R$ ${total + 3}\n`;

    }else {

      resumo += `\n\nTaxa de entrega R$ 3.00\n`;
      resumo += `Total -------- R$ ${total + 3}0\n`;

    }

  } else {

    resumo += `\n\nTaxa de entrega R$ 3.00\n`;
    resumo += `Total -------- R$ ${total + 3}.00\n`;

  }
  return [resumo, "🤖 Se deseja acrescentar algo a seu pedido ou continuar ?\n\n*1 -* Quero adicionar outro item ao meu pedido\n*C -* Para pagamento no cartão\n*D -* Para pagamento no dinheiro"];
  
}


exports.execute = execute;
