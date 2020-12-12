const banco = require("../banco")
const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

function execute(user, msg) {

    if (!arrayNumeros.filter(item => item == msg)) {
       return [`🤖 _Item não existe, digite corretamente._`]
    }

    if (msg > msg.length) {
        return [`🤖 _Item não existe, digite corretamente._`]
    }
    
    banco.db[user].itens.splice(msg, 1)
    banco.db[user].stage = 60
    
    return [`🤖 Item deletado com sucesso!\n\ndeseja pedir mais algum item do nosso cardápio?\n\n*1 -* Sim\n*2 -* Não\n*E -* Para excluir um item adicionado`]
    
}

exports.execute = execute