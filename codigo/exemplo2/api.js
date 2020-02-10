const express = require("express");

const aplicacao = express();

aplicacao.get("/", async function(request, response) {
  const foto = await new BancoDeDados().buscarFoto();

  /*await new Promise(resolve => {
    setTimeout(resolve, 3000);
  });*/

  response.send(foto);
});

aplicacao.listen(5000);

class BancoDeDados {
  async buscarFoto() {
    await new Promise(resolve => {
      setTimeout(resolve, 3000);
    });

    return "foto.png";
  }
}
