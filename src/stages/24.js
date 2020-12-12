const banco = require("../banco")
const cardapio = require('../cardapio')

function execute(user, msg) {
    
    banco.db[user].itens[ banco.db[user].itens.length -1 ] = {...banco.db[user].itens[ banco.db[user].itens.length -1 ], observacao: msg}
    banco.db[user].stage = 60
    return [`🤖 Você deseja pedir mais algum item do nosso cardápio?\n\n*1 -* Sim\n*2 -* Não\n*V -* Para excluir um item adicionado`]
}

exports.execute = execute