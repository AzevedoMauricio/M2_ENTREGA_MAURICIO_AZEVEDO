const execSqlQquery = require("./connection");

function getCandidatoByEmail(candidato_email, res) {
  const query = `SELECT * FROM candidatos WHERE candidato_email = '${candidato_email}'`;

  execSqlQquery(query, res);
}

module.exports = getCandidatoByEmail;
