const execSqlQquery = require("./connection");

function deleteCandidatoByEmail(candidato_email, res) {
  const query = `DELETE FROM candidatos WHERE candidato_email = '${candidato_email}'`;

  execSqlQquery(query, res);
}

module.exports = deleteCandidatoByEmail;
