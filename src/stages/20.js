const banco = require("../banco")
const cardapio = require('../cardapio')
const stages = require('../stages')

function execute(user, msg) {

    if ( msg != 1 && msg != 2 && msg != "V" && msg != "v" && msg != "." ) {
        return [`🤖 _Opção inválida, digite corretamente..._`]
    }
    
    if ( msg == "." ) {
        banco.db[user].stage = 21
        return [`🤖 Qual a quantidade que deseja pedir ?\n*V -* Para voltar na etapa anterior`]
    }
    
    if ( msg == 1 ) {
        let preco1 = cardapio.opcoes[retornaPrecoPizza(user)].preco.media
        banco.db[user].itens[banco.db[user].itens.length -1] = {...banco.db[user].itens[banco.db[user].itens.length -1], preco: preco1}
        banco.db[user].stage = 21
        return [`🤖 Qual a quantidade que deseja pedir ?\n*V -* Para voltar na etapa anterior`]
    }
    
    if ( msg == 2 ) {
        let preco2 = cardapio.opcoes[retornaPrecoPizza(user)].preco.grande
        banco.db[user].itens[banco.db[user].itens.length -1] = {...banco.db[user].itens[banco.db[user].itens.length -1], preco: preco2}
        banco.db[user].stage = 21
        return [`🤖 Qual a quantidade que deseja pedir ?\n*V -* Para voltar na etapa anterior`]
    }
    
    if ( msg == "V" || msg == "v" ) {
        banco.db[user].itens.splice(banco.db[user].itens[banco.db[user].itens.length -1], 1)
        banco.db[user].stage = 1
        return stages.step[1].obj.execute(user, "1")
    }

}

function retornaPrecoPizza(user) {
    switch (banco.db[user].itens[banco.db[user].itens.length -1].descricao) {
        case "Pizza Alho e Óleo":
            return 4
            break
        case "Pizza Americana":
            return 5
            break
        case "Pizza a Moda":
            return 6
            break
        case "Pizza Mineira":
            return 7
            break
    }
}

exports.execute = execute