const execSqlQquery = require("../connection");
const callbackConnection = require("../callbackConnection");

function getRealizacoesByEmail(candidato_email, res) {
  const callbackQuery = `SELECT * FROM candidatos WHERE candidato_email = '${candidato_email}'`;
  callbackConnection(callbackQuery, (rows) => {
    const query = `SELECT * FROM realizacoes WHERE candidato_id = ${rows[0].candidato_id}`;
    execSqlQquery(query, res);
  });
}

module.exports = getRealizacoesByEmail;
