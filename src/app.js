const express = require("express");
const app = express();

//Rotas

//Documentação da API
const indexRoute = require("./routes/index");

//Rotas do CRUD da trilha sonora da série Supernatural
const songRoute = require("./routes/song");

//Obtenção do token JWT para autentição nas rotas privadas da API
const tokenRoute = require("./routes/token");

//Content Types suportados
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/", indexRoute);
app.use("/song", songRoute);
app.use("/token",tokenRoute);

module.exports = app;
