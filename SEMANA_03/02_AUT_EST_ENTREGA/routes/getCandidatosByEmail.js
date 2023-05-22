var express = require("express");
var router = express.Router();

const getCandidatoByEmail = require("../sql_functions/candidatos.getCandidatoByEmail");

router.get("/", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");
  const candidato_email = req.query.email;
  console.log(candidato_email);

  getCandidatoByEmail(candidato_email, res);
});

module.exports = router;
