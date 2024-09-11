const mongoose = require("mongoose");

const mongoDB =
  "mongodb+srv://teste:teste@cluster0.d3vld.mongodb.net/";

async function main() {
  await mongoose.connect(mongoDB);
}

main()
  .then(() => console.log("conectado com o banco"))
  .catch((err) => console.log(err));

module.exports = mongoose;