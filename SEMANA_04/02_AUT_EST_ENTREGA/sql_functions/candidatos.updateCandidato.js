const execSqlQquery = require("./connection");

function atualizarCandidato(
  candidato_nome,
  candidato_telefone,
  candidato_email,
  candidato_descricao,
  res
) {
  const query = `UPDATE candidatos SET candidato_nome = '${candidato_nome}', candidato_telefone = '${candidato_telefone}', candidato_email = '${candidato_email}', candidato_descricao = '${candidato_descricao}' WHERE candidato_email = '${candidato_email}'`;

  execSqlQquery(query, res);
}

module.exports = atualizarCandidato;
