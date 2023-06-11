const campoEndereco = document.getElementById("address");

const urlBase = "https://viacep.com.br/ws/";
const meuCep = "05510021";

fetch(urlBase + meuCep + "/json")
  .then((res) => res.json())
  .then((data) => {
    const meuEndereco = `${data.logradouro}, 80, Apto 1708B, ${data.bairro}, ${data.localidade}/${data.uf}, ${data.cep}`;
    campoEndereco.innerHTML = meuEndereco;
  });
