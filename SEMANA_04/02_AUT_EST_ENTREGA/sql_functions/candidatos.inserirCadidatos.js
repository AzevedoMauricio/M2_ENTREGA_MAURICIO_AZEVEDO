const execSqlQquery = require("./connection");

function inserirCandidato(
  candidato_nome,
  candidato_telefone,
  candidato_email,
  candidato_descricao,
  res
) {
  const query = `INSERT INTO candidatos (candidato_nome, candidato_telefone, candidato_email, candidato_descricao) VALUES ('${candidato_nome}', '${candidato_telefone}', '${candidato_email}', '${candidato_descricao}')`;

  execSqlQquery(query, res);
}

module.exports = inserirCandidato;
