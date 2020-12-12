const banco = require("../banco")
const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, "V", "v"]

function execute(user, msg) {

    if ( !arrayNumeros.filter( item => item == msg ) ) {
        return [`🤖 _Você não digitou um número, digite corretamente..._`]
    }

    if ( msg == "V" || msg == "v" ) {
        banco.db[user].itens.splice(banco.db[user].itens[banco.db[user].itens.length -1], 1)
        banco.db[user].stage = 1
        return stages.step[1].obj.execute(user, "1")
    }

    if ( msg == 1 ) {
        banco.db[user].itens[banco.db[user].itens.length -1] = {...banco.db[user].itens[banco.db[user].itens.length -1], tamanho: "700ml"}
        banco.db[user].stage = 41
        return [`🤖 Qual a quantidade que deseja pedir ?`]
    }

    if ( msg == 2 ) {
        banco.db[user].itens[banco.db[user].itens.length -1] = {...banco.db[user].itens[banco.db[user].itens.length -1], tamanho: "500ml"}
        banco.db[user].stage = 41
        return [`🤖 Qual a quantidade que deseja pedir ?`]
    }
}

exports.execute = execute
