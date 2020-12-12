const banco = require("../banco")
const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, "V", "v"]

function execute(user, msg) {

    if ( !arrayNumeros.filter(item => item == msg )) {
        return [`🤖 _Opção inválida, digite corretamente..._`]
    }

    if ( msg == "V" || msg == "v" ) {
        banco.db[user].stage = 2
        return stages.step[2].obj.execute(user, ".20")
    }

    if ( msg == "." ) {
        banco.db[user].stage = 22
        return [`🤖 Como deseja montar sua pizza ?\n\n*1 -* Inteira\n*2 -* Meio a meio\n*V -* Para voltar na etapa anterior`]
    }

    banco.db[user].itens[banco.db[user].itens.length -1] = {...banco.db[user].itens[banco.db[user].itens.length -1], quantidade: msg }
    banco.db[user].stage = 22
    return [`🤖 Como deseja montar sua pizza ?\n\n*1 -* Inteira\n*2 -* Meio a meio\n*V -* Para voltar na etapa anterior`]
    

}

exports.execute = execute