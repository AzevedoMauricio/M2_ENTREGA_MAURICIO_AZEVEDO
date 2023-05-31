var express = require("express");
var router = express.Router();

const inserirCandidato = require("../sql_functions/candidatos.inserirCadidatos");

router.post("/", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");

  const candidato_nome = req.body.candidato_nome;
  const candidato_telefone = req.body.candidato_telefone;
  const candidato_email = req.body.candidato_email;
  const candidato_descricao = req.body.candidato_descricao;

  inserirCandidato(
    candidato_nome,
    candidato_telefone,
    candidato_email,
    candidato_descricao,
    res
  );
});

module.exports = router;
