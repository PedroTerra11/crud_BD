const db = require("../db.js");

const Schema = db.Schema;

const AeroportoSchema = new Schema({
  nome: {
    type: String,
    required: true,
  },
  endereco: {
    type: Schema.Types.Mixed,
    required: false
  }
});

const Aeroporto = db.model("Aeroporto", AeroportoSchema);

module.exports = Aeroporto;