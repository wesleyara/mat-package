"use strict";
const medidas = require("./Medidas/index");
const moedas = require("./Moedas/index");
module.exports = Object.assign(Object.assign({}, medidas), moedas);
