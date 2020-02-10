const https = require("https");
const fs = require("fs");

https.get("https://www.globo.com/", response => {
  let dados = "";

  response.on("data", dadosParciais => {
    dados += dadosParciais;
    console.log("1");
  });

  response.on("end", () => {
    fs.writeFile("pagina.html", dados, () => {});
  });
});
