const banco = require("../banco")
const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function execute(user, msg) {

    if ( !arrayNumeros.filter( item => item == msg ) ) {
        return [`🤖 _Você não digitou um número, digite corretamente..._`]
    }
    banco.db[user].itens[banco.db[user].itens.length - 1] = {...banco.db[user].itens[banco.db[user].itens.length - 1], observacao: msg }
    banco.db[user].stage = 60
    return [`🤖 Você deseja pedir mais algum item do nosso cardápio?\n\n*1 -* Sim\n*2 -* Não\n*E -* Para excluir um item adicionado`]
}

exports.execute = execute