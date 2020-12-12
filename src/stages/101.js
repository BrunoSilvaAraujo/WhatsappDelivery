const banco = require("../banco")
const stages = require('../stages')

function execute(user, msg) {

    if ( msg === "passaNome" ) {

        if ( banco.db[user].endereco != "" ) {
            return [`🤖 Perfeito, e o endereço será este:\n===================\n${banco.db[user].endereco}\n===================\n\n*1 -* Vou usar esse endereço\n*2 -* Quero digitar outro endereço`]
        }
    }

    if ( msg == 1 ) {
        banco.db[user].stage = 5
        return stages.step[5].obj.execute(user, "")
    }

    if ( msg == 2 ) {
        banco.db[user].nome = msg
        banco.db[user].stage = 102
        return [`🤖 Ótimo, agora precisamos que você nos informe seu endereço completo com ponto de referência, em uma única mensagem: \n`]
    }

    if ( msg == "redigitaEndereco" ) {
        banco.db[user].stage = 102
        return [`🤖 Vamos lá, digite seu endereço completo com ponto de referência, em uma única mensagem: \n`]
    }

    banco.db[user].nome = msg
    banco.db[user].stage = 102
    return [`🤖 Anotado, agora precisamos que você nos informe seu endereço completo com ponto de referência, em uma única mensagem:\n\n*V -* Para digitar o nome novamente`]

}

exports.execute = execute