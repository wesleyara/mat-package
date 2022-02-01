const creator = require("./modules/creator");
const operacoesBasicas = require("./modules/operacoesBasicas");
const area = require("./modules/area");

module.exports = { ...creator, ...operacoesBasicas, ...area };
