var stages = {
  0: {
    descricao: "Boas Vindas",
    obj: require("./stages/0"),
  },
  1: {
    descricao: "Apresentação do cardápio",
    obj: require("./stages/1"),
  },
  2: {
    descricao: "Escolha do lanche",
    obj: require("./stages/2"),
  },
  3: {
    descricao: "Resumo do pedido",
    obj: require("./stages/3"),
  },
  4: {
    descricao: "Escolha da forma de pagamento",
    obj: require("./stages/4"),
  },
  5: {
    descricao: "Confirmação do pedido",
    obj: require("./stages/5"),
  },
  6: {
    descricao: "Agradecimentos",
    obj: require("./stages/6"),
  },
  10: {
    descricao: "Sequência de hamburguer",
    obj: require("./stages/10"),
  },
  11: {
    descricao: "Sequência de hamburguer",
    obj: require("./stages/11"),
  },
  20: {
    descricao: "Sequência de pizza",
    obj: require("./stages/20"),
  },
  21: {
    descricao: "Sequência de pizza",
    obj: require("./stages/21"),
  },
  22: {
    descricao: "Sequência de pizza",
    obj: require("./stages/22"),
  },
  23: {
    descricao: "Sequência de pizza",
    obj: require("./stages/23"),
  },
  24: {
    descricao: "Sequência de pizza",
    obj: require("./stages/24"),
  },
  30: {
    descricao: "Sequência da esfirra",
    obj: require("./stages/30"),
  },
  31: {
    descricao: "Sequência da esfirra",
    obj: require("./stages/31"),
  },
  40: {
    descricao: "Sequência da açai",
    obj: require("./stages/40"),
  },
  41: {
    descricao: "Sequência da açai",
    obj: require("./stages/41"),
  },
  42: {
    descricao: "Sequência da açai",
    obj: require("./stages/42"),
  },
  50: {
    descricao: "Sequência da bebida",
    obj: require("./stages/50"),
  },
  60: {
    descricao: "Remoção de itens",
    obj: require("./stages/60"),
  },
  61: {
    descricao: "Sequência da remoção de itens",
    obj: require("./stages/61"),
  },
  62: {
    descricao: "Sequência da remoção de itens",
    obj: require("./stages/62"),
  },
  100: {
    descricao: "Registro do nome",
    obj: require("./stages/100"),
  },
  101: {
    descricao: "Registro do endereço",
    obj: require("./stages/101"),
  },
  102: {
    descricao: "Sequência do endereço",
    obj: require("./stages/102"),
  }
};

exports.step = stages;
