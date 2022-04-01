"use strict";
const operacoes = require("./Operacoes");
const geometria = require("./Geometria");
const math = require("./Math");
const equacoes = require("./Equacoes");
const media = require("./Media");
const conversor = require("./Conversor");
module.exports = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, conversor), operacoes), geometria), math), equacoes), media), conversor);
