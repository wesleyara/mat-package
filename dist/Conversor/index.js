"use strict";
const medidas = require("./Medidas");
const moedas = require("./Moedas");
module.exports = Object.assign(Object.assign({}, medidas), moedas);
