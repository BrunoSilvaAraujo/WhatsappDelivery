const banco = require("../banco")
const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, "V", "v"]

function execute(user, msg) {

    if ( !arrayNumeros.filter(item => item == msg )) {
        return [`🤖 _Opção inválida, digite corretamente..._`]
    }

    if ( msg == "V" || msg == "v" ) {
        banco.db[user].itens.splice(banco.db[user].itens[banco.db[user].itens.length -1], 1)
        banco.db[user].stage = 1
        return stages.step[1].obj.execute(user, "1")
    }

    banco.db[user].itens[banco.db[user].itens.length -1] = { ...banco.db[user].itens[banco.db[user].itens.length -1], quantidade: msg}
    banco.db[user].stage = 60
    return [`🤖 Anotado, você deseja pedir mais algum item do nosso cardápio?\n\n*1 -* Sim\n*2 -* Não\n*V -* Para voltar a etapa anterior`]

}

exports.execute = execute