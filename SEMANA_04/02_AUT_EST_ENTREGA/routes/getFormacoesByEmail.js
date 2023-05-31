var express = require("express");
var router = express.Router();

const getFormacoesByEmail = require("../sql_functions/read/formacoes.getFormacoesByEmail");

router.get("/", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");
  const email = req.query.email;

  getFormacoesByEmail(email, res);
});

module.exports = router;
