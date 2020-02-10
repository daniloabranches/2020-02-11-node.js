const fs = require("fs");

fs.readFile("texto.txt", "utf8", (erro, dados) => {
  console.log(dados);
});
