"use strict";
const area = require("./Area/index");
const perimetro = require("./Perimetro/index");
module.exports = Object.assign(Object.assign({}, area), perimetro);
