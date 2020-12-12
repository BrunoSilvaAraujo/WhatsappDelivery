const banco = require("../banco")

function execute(user, msg) {
    
    let item = ""
    banco.db[user].itens.map((itens, index) => {
        if ( itens.sabor2 ) {
            item += `*${index} -* ${itens.descricao} com ${itens.sabor2}\n`
        }else {
            item += `*${index} -* ${itens.descricao}\n`
        }
        
    })
    banco.db[user].stage = 62
    return [`🤖 Qual item deseja excluir ?\n\n${item}`]
}

exports.execute = execute