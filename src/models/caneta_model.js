const db = require("../db.js");

const Schema = db.Schema;

const CanetaSchema = new Schema({
  cor: {
    type: String,
    required: true,
  },
  ehbic: {
    type: String,
    required: false
  }
});

const Caneta = db.model("Caneta", CanetaSchema);

module.exports = Caneta;