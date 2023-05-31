const execSqlQquery = require("../connection");
const callbackConnection = require("../callbackConnection");

function getHabilidadesByEmail(candidato_email, res) {
  const callbackQuery = `SELECT * FROM candidatos WHERE candidato_email = '${candidato_email}'`;
  callbackConnection(callbackQuery, (rows) => {
    const query = `SELECT * FROM habilidades WHERE candidato_id = ${rows[0].candidato_id}`;
    execSqlQquery(query, res);
  });
}

module.exports = getHabilidadesByEmail;
