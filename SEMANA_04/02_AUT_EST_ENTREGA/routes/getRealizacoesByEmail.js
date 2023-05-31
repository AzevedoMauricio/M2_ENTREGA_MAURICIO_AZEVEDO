var express = require("express");
var router = express.Router();

const getRealizacoesByEmail = require("../sql_functions/read/realizacoes.getRealizacoesByEmail");

router.get("/", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");
  const email = req.query.email;

  getRealizacoesByEmail(email, res);
});

module.exports = router;
