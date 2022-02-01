const config = require("./modules/Config/config");
const operacoesBasicas = require("./modules/Operacoes/operacoesBasicas");
const geometria = require("./modules/Geometria/geometria");
const math = require("./modules/Math/math");

module.exports = { ...config, ...operacoesBasicas, ...geometria, ...math };
