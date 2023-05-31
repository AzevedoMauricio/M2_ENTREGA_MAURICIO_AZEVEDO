var express = require("express");
var router = express.Router();

const getEnderecoByEmail = require("../sql_functions/read/enderecos.getEnderecoByEmail");

router.get("/", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");
  const email = req.query.email;

  getEnderecoByEmail(email, res);
});

module.exports = router;
