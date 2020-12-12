const banco = require("../banco")
const stages = require('../stages')

function execute(user, msg) {

    if ( banco.db[user].nome != "" && msg == "") {
        return [`🤖 Quer enviar seu pedido com esse nome: *_${banco.db[user].nome}_*\n\n*1 -* Vou usar esse nome\n*2 -* Quero digitar outro nome`]
    }

    if ( msg == 1 ) {
        banco.db[user].stage = 101
        return stages.step[101].obj.execute(user, "passaNome")
    }

    if ( msg == 2 ) {
        banco.db[user].stage = 101
        return [`🤖 Digite seu nome em uma única mensagem: \n`]
    }

    banco.db[user].stage = 101
    return [`🤖 Precisamos que você nos informe seu nome em uma única mensagem: \n`]

}

exports.execute = execute