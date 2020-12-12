const banco = require("../banco")
const stages = require('../stages')

function execute(user, msg) {


    if (msg == "V" || msg == "v") {
        banco.db[user].stage = 100
        return stages.step[100].obj.execute(user, "")
    }

    if ( msg == 1 ) {
        banco.db[user].stage = 5
        return stages.step[5].obj.execute(user, "")
    }

    if ( msg == 2 ) {
        banco.db[user].stage = 101
        return stages.step[101].obj.execute(user, "redigitaEndereco")
    }

    banco.db[user].endereco = msg
    return [`🤖 Anotado, veja se está tudo certo com o endereço ?\n\n*1 -* O endereço está certo\n*2 -* Quero digitar o endereço novamente`]
}

exports.execute = execute