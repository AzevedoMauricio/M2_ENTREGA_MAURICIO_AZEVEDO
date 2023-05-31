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

const getEnderecoByEmail = require("./routes/getEnderecoById");
app.use("/get-endereco-by-email", getEnderecoByEmail);

const getExperienciasByEmail = require("./routes/getExperienciasByEmail");
app.use("/get-experiencias-by-email", getExperienciasByEmail);

const getFormacoesByEmail = require("./routes/getFormacoesByEmail");
app.use("/get-formacoes-by-email", getFormacoesByEmail);

const getHabilidadesByEmail = require("./routes/getHabilidadesByEmail");
app.use("/get-habilidades-by-email", getHabilidadesByEmail);

const getPersonalidadesByEmail = require("./routes/getPersonalidadesByEmail");
app.use("/get-personalidades-by-email", getPersonalidadesByEmail);

const getRealizacoesByEmail = require("./routes/getRealizacoesByEmail");
app.use("/get-realizacoes-by-email", getRealizacoesByEmail);

//UPDATE
const atualizarCandidato = require("./routes/updateCandidato");
app.use("/update-candidato", atualizarCandidato);

//DELETE
const deleteCandidatoByEmail = require("./routes/deleteCandidatoByEmail");
app.use("/delete-candidato-by-email", deleteCandidatoByEmail);

app.listen(port, () => {
  console.log(`Servidor rodando em ${hostname}:${port}`);
});
