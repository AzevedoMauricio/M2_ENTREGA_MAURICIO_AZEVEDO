var express = require("express");
var router = express.Router();

const getHabilidadesByEmail = require("../sql_functions/read/habilidades.getHabilidadesByEmail");

router.get("/", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");
  const email = req.query.email;

  getHabilidadesByEmail(email, res);
});

module.exports = router;
