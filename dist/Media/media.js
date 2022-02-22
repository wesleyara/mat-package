"use strict";
const media = require("./Media");
const mediaPonderada = require("./MediaPonderada");
module.exports = Object.assign(Object.assign({}, media), mediaPonderada);
