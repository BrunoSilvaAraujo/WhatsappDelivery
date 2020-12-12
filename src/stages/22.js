const banco = require("../banco")
const cardapio = require('../cardapio')

function execute(user, msg) {
    
    if (msg != 1 && msg != 2 && msg != "V" && msg != "v") {
        return [`🤖 _Opção inválida, digite corretamente..._`]
    }

    if ( msg == 1 ) {
        banco.db[user].itens[banco.db[user].itens.length -1] = {...banco.db[user].itens[banco.db[user].itens.length -1], tipo: "inteira"}
        banco.db[user].stage = 24
        return [`🤖 Anotado, se tiver alguma observação digite-a em uma única mensagem:`]
    }
    
    if ( msg == 2 ) {
        banco.db[user].itens[banco.db[user].itens.length -1] = {...banco.db[user].itens[banco.db[user].itens.length -1], tipo: "meio a meio"}
        banco.db[user].stage = 23
        return [`🤖 Qual segundo sabor que deseja\n\nDigite o número do sabor que deseja acrescentar a pizza.`]
    }

    if ( msg == "V" || msg == "v" ) {
        banco.db[user].stage = 20
        return stages.step[20].obj.execute(user, ".")
    }
}

exports.execute = execute