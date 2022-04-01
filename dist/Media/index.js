"use strict";
const mediaAritmetica = require("./MediaAritmetica");
const mediaPonderada = require("./MediaPonderada");
module.exports = Object.assign(Object.assign({}, mediaAritmetica), mediaPonderada);
