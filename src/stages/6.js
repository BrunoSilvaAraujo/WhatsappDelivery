const banco = require("../banco")
const stages = require("../stages")
const fs = require('fs')


function execute(user, msg) {

    if ( msg != 1 && msg != 2 ) {
        return [`🤖 _Opção inválida, digite corretamente..._`]
    }

    if ( msg == 2 ) {
        banco.db[user].itens = []
        return stages.step[1].obj.execute(user, "1")
    }

    if (msg == 1) {
        let dadosAtuais = JSON.parse(fs.readFileSync('./cadastro.json'))
        dadosAtuais.push({
            ...banco.db[user]
        })
        fs.writeFileSync('./cadastro.json', JSON.stringify(dadosAtuais))
        banco.db[user].itens = []
        return [
          "*Obrigado pela preferencia.*😃😃😃",
          "```🤖 Aguarde, seu pedido chegará em breve, em um tempo estimado de 30 à 60 minutos\n\nPara mais informações ligue para XXXXX-XXXX```",
        ];
      }
}

exports.execute = execute