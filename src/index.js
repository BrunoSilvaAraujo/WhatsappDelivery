// Supports ES6
// import { create, Whatsapp } from 'sulla';
const bot = require("venom-bot");
const banco = require("./banco");
const stages = require("./stages");

bot.create().then((client) => start(client));
function start(client) {
  client.onMessage((message) => {
    let resp = stages.step[getStage(message.from)].obj.execute(
      message.from,
      message.body,
      message.sender.name,
      message.sender.pushname
    );
    if (resp[0].slice(0,2) !== './') {
      
      if (resp.length == 1) {
        client.sendText(message.from, resp[0]);
      }
      if (resp.length == 2) {
        client.sendText(message.from, resp[1])
        client.sendText(message.from, resp[0]);
      }
      if (resp.length == 3) {
        client.sendText(message.from, resp[2])
        client.sendText(message.from, resp[1])
        client.sendText(message.from, resp[0])
      }
      if (resp.length == 4) {
        client.sendText(message.from, resp[0])
        client.sendText(message.from, resp[1])
        client.sendText(message.from, resp[2])
        client.sendText(message.from, resp[3])
      }
      //for (let index = 0; index < resp.length; index++) {      este for está enviando as mensagens na ordem errada...
      //  const element = resp[index];
      //  client.sendText(message.from, element);
      //}
    }
    if (resp[0].slice(0,2) === './') {
      client.sendImage(message.from, resp[0], resp[1])
    }
    
  });
}

function getStage(user) {
  if (banco.db[user]) {
    //Se existir esse numero no banco de dados
    return banco.db[user].stage;
  } else {
    //Se for a primeira vez que entra e contato
    banco.db[user] = {
      stage: 0,
      nome: "",
      endereco: "",
      telefone: "",
      pagamento: "",
      troco: "",
      taxaEntrega: "3.00",
      total: "",
      itens: [],
    };
    return banco.db[user].stage;
  }
}
