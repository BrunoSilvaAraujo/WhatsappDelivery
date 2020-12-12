const banco = require("../banco")
const stages = require('../stages')

function execute(user, msg) {
    if ( msg != 1 && msg != 2 && msg != "E" && msg != "e") {
        return [`🤖 _Você digitou uma opção que não existe, por favor digite corretamente._`]
    }

    if ( msg == 1 ) {
        banco.db[user].stage = 1
        return stages.step[1].obj.execute(user, "1")
    }  

    if ( msg == 2 ) {
        banco.db[user].stage = 3
        return stages.step[3].obj.execute(user, "")
    }

    if ( msg == "E" || msg == "e" ) {
        banco.db[user].stage = 61
        return stages.step[61].obj.execute(user, "")
    }
}

exports.execute = execute