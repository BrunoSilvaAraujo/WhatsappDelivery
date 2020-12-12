const banco = require("../banco")

function execute(user, msg) {

  console.log(banco.db[user])     // AQUI CONSOLE.LOG()

  let resumo = "  *_Confirmação do Pedido_* \n\n"
  let total = 0
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
  if (banco.db[user].pagamento && banco.db[user].pagamento == 'dinheiro') {

    resumo += `-----------------------------------------\nForma de pagamento ----  ${banco.db[user].pagamento}\n`
    resumo += `Troco para ---- R$ ${item.troco}\n\n`

  } else if (banco.db[user].pagamento && banco.db[user].pagamento == 'cartão') { 

    resumo += `-----------------------------------------\nForma de pagamento ---- ${banco.db[user].pagamento}\n`

  }

  let totalStr = total.toString()
  if (totalStr.slice(1, 2) == "." || totalStr.slice(2, 3) == "." || totalStr.slice(3, 4) == ".") {

    if ( totalStr.length == 4 || totalStr.length == 5 || totalStr.length == 6 ) {

      resumo += `_Endereço de entrega_ --- ${banco.db[user].endereco}\n-----------------------------------------\n\n`
      resumo += `_Taxa de entrega_ R$ 3.00\n`;
      resumo += `_Total_ -------- R$ ${total + 3}\n`;

    }else {

      resumo += `_Endereço de entrega_ --- ${banco.db[user].endereco}\n-----------------------------------------\n\n`
      resumo += `_Taxa de entrega_ R$ 3.00\n`;
      resumo += `_Total_ -------- R$ ${total + 3}0\n`;

    }
    
  } else {

    resumo += `_Endereço de entrega_ --- ${banco.db[user].endereco}\n-----------------------------------------\n\n`
    resumo += `_Taxa de entrega_ R$ 3.00\n`;
    resumo += `_Total_ -------- R$ ${total + 3}.00\n`;
    
  }
  banco.db[user].total = total
  banco.db[user].stage = 6
  return [resumo,"🤖 Se tudo estiver correto, é hora de confirmar o pedido.\n\n*1 -* Quero confirmar o pedido\n*2 -* Quero voltar ao início e recomeçar"     
  ]
}

exports.execute = execute;
