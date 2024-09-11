const db = require("../db.js");

const Schema = db.Schema;

const RefrigeranteSchema = new Schema({
  sabor: {
    type: String,
    required: true,
  },
  kcal200: {
    type: Number,
    required: false
  },
  porcentagem_suco: {
    type: Number,
    min: 0,
    max: 1,
    required: false
  },
  tamanhoMl: {
    type: Number,
    required: true
  }
});

const Refrigerante = db.model("Refrigerante", RefrigeranteSchema);

module.exports = Refrigerante;