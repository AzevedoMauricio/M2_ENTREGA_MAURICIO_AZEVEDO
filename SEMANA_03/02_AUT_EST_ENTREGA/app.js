const express = require("express");
const app = express();

const hostname = "http://localhost";
const port = 3000;

app.use(express.json());

//Endpoints

//CREATE
const inserirCandidato = require("./routes/inserirCandidatos");
app.use("/inserir-candidato", inserirCandidato);

//READ
const getCandidatosByEmail = require("./routes/getCandidatosByEmail");
app.use("/get-candidato-by-email", getCandidatosByEmail);

//UPDATE
const atualizarCandidato = require("./routes/updateCandidato");
app.use("/update-candidato", atualizarCandidato);

//DELETE
const deleteCandidatoByEmail = require("./routes/deleteCandidatoByEmail");
app.use("/delete-candidato-by-email", deleteCandidatoByEmail);

app.listen(port, () => {
  console.log(`Servidor rodando em ${hostname}:${port}`);
});
