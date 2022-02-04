const config = require("./dist/Config/config");
const operacoes = require("./dist/Operacoes/operacoes");
const geometria = require("./dist/Geometria/geometria");
const math = require("./dist/Math/math");
const equacoes = require("./dist/Equacoes/equacoes");
const media = require("./dist/Media/media");
const conversor = require("./dist/Conversor/conversor");

module.exports = {
  ...config,
  ...operacoes,
  ...geometria,
  ...math,
  ...equacoes,
  ...media,
  ...conversor,
};
