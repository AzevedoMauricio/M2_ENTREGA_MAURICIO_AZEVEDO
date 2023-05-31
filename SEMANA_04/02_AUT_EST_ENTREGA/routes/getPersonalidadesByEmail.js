var express = require("express");
var router = express.Router();

const getPersonalidadesByEmail = require("../sql_functions/read/personalidades.getPersonalidadesByEmail");

router.get("/", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*");
  const email = req.query.email;

  getPersonalidadesByEmail(email, res);
});

module.exports = router;
