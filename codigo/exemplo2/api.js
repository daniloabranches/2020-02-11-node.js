const express = require("express");
const fs = require("fs");
const util = require("util");

const aplicacao = express();

aplicacao.get("/trava", function(request, response) {
  while (true) {}

  response.send("OK");
});

aplicacao.get("/teste", function(request, response) {
  response.send("teste");
});

aplicacao.get("/video", async (request, response) => {
  await util.promisify(fs.readFile)("1.mp4");
  await util.promisify(fs.readFile)("2.mp4");
  await util.promisify(fs.readFile)("3.mp4");
  await util.promisify(fs.readFile)("4.mp4");

  response.send("video");
});

aplicacao.listen(5000);
