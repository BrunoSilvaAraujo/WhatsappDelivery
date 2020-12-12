const banco = require("../banco")
const cardapio = require('../cardapio')

function execute(user, msg) {

    if ( msg == 1 ) {
        let preco1 = cardapio.opcoes[12].preco[retornaPrecoAcai(user)]
        banco.db[user].itens[banco.db[user].itens.length -1] = {...banco.db[user].itens[banco.db[user].itens.length -1], quantidade: msg, preco: preco1}
        banco.db[user].stage = 42
        return [`🤖 Se tiver alguma observação digite-a em uma única mensagem:`]
    }

    if ( msg == 2 ) {
        let preco2 = cardapio.opcoes[12].preco[retornaPrecoAcai(user)]
        banco.db[user].itens[banco.db[user].itens.length -1] = {...banco.db[user].itens[banco.db[user].itens.length -1], quantidade: msg, preco: preco2}
        banco.db[user].stage = 42
        return [`🤖 Se tiver alguma observação digite-a em uma única mensagem:`]
    }
}

exports.execute = execute

function retornaPrecoAcai(user) {
    switch(banco.db[user].itens[banco.db[user].itens.length -1].tamanho) {
        case "700ml":
            return 700
        case "500ml":
            return 500
    }
}