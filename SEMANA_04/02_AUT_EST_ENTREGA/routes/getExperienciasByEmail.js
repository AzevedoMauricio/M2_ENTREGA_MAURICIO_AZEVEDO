var express = require("express");
var router = express.Router();

const getExperienciasByEmail = require("../sql_functions/read/experiencias.getExperienciasByEmail");

router.get("/", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");
  const email = req.query.email;

  getExperienciasByEmail(email, res);
});

module.exports = router;
