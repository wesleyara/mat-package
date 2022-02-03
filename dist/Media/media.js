"use strict";
const media = require("./Media/media");
const mediaPonderada = require("./MediaPonderada/mediaPonderada");
module.exports = Object.assign(Object.assign({}, media), mediaPonderada);
