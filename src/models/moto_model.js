const db = require("../db.js");

const Schema = db.Schema;

const MotoSchema = new Schema({
  marca: {
    type: String,
    required: true,
  },
  cor: {
    type: String,
    required: true
  },
  modelo: {
    type: String,
    required: true
  },
  cilidrada: {
    type: Number,
    required: true
  },
  peso: {
    type: Number,
    required: true
  },
});

const Moto = db.model("Moto", MotoSchema);

module.exports = Moto;