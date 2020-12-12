const banco = require("../banco")
const stages = require("../stages")

function execute(user, msg) {

  if ( msg == 1 ) {
    banco.db[user].stage = 1
    return stages.step[1].obj.execute(user, "1")
  }

  if (msg == '') {
    banco.db[user].pagamento = 'cartão' 
    banco.db[user].stage = 100
    return stages.step[100].obj.execute(user, '')

  }
  banco.db[user].pagamento = 'dinheiro'
  banco.db[user].troco = msg
  
  banco.db[user].stage = 100
  return stages.step[100].obj.execute(user, '')
}

exports.execute = execute;
