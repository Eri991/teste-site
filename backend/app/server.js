const express = require("express");
const app = express();
const db = require("./config/db.config.js");
const Cliente = db.Cliente;
var bodyParser = require("body-parser");
let router = require("./routes/routes.js");
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
};
const { NULL } = require("sequelize");
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.static("resources"));
app.use("/", router);

app.get("/", (req, res) => {
  return res.status(200).send(Cliente);
});
const server = app.listen(8080, function () {
  let host = server.address().address;
  let port = server.address().port;
  console.log(`App está rodando no endereço http://${host}:${port}`);
});


db.sequelize.sync({ force: true }).then(() => {
  Cliente.sync().then(() => {
    const clientes = [
      { nome: "Pedro", idade: 23, email: "pedro@email.com", is_deleted: "0"},
      { nome: "Sara", idade: 31, email: "sara@email.com", is_deleted: "0"},
      { nome: "Emilly", idade: 18, email: "emilly@email.com", is_deleted: "0"},
    ];

    clientes.map((cliente) => {
      Cliente.create(cliente);
    });
  });
});
