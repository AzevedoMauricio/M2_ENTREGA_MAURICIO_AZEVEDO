var express = require("express");
var router = express.Router();

const deleteCandidatoByEmail = require("../sql_functions/candidatos.deleteCandidatoByEmail");

router.delete("/", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");
  const candidato_email = req.body.candidato_email;

  deleteCandidatoByEmail(candidato_email, res);
});

module.exports = router;
