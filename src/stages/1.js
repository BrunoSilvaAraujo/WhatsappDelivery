const banco = require("../banco");

function execute(user, msg) {

  if (msg != 1 && msg != 2 && msg != 3 && msg != 4){
    return ["```🤖 Código inválido, digite corretamente...```"]
  }

  if ( msg == 1 || msg == 4 ) {
    banco.db[user].stage = 2
    return ['./img/cardapio.jpg', 'imagem-cardápio'] // se quiser uma descrição colocar no terceiro parametro do array
  
  }

  if ( msg == 3 ) {
    return [`Verificar a sequencia...`]
  }

  if ( msg == 2 ) {
    banco.db[user].stage = 0
    return [`🤖 Cancelamento feito com sucesso !\nAgradecemos a preferência!!!`]
  }

}

exports.execute = execute;
