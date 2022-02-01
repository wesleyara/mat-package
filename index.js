const config = require("./dist/Config/config");
const operacoes = require("./dist/Operacoes/operacoes");
const geometria = require("./dist/Geometria/geometria");
const math = require("./dist/Math/math");

module.exports = { ...config, ...operacoes, ...geometria, ...math };
