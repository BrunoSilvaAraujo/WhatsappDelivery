const banco = require("../banco")
const cardapio = require('../cardapio')

function execute(user, msg) {
    
    if (!cardapio.opcoes[msg] ) {
        return [`🤖 _Opção inválida, digite corretamente..._`]
    }
    banco.db[user].itens[ banco.db[user].itens.length -1 ] = {...banco.db[user].itens[ banco.db[user].itens.length -1 ], sabor2: cardapio.opcoes[msg].descricao}
    
    banco.db[user].stage = 24
    return [`🤖 Anotado, se tiver alguma observação digite-a em uma única mensagem:`]

}

exports.execute = execute