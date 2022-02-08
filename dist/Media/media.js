"use strict";
const media = require("./Media/index");
const mediaPonderada = require("./MediaPonderada/index");
module.exports = Object.assign(Object.assign({}, media), mediaPonderada);
