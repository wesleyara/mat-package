"use strict";
const area = require("./Area/area");
const perimetro = require("./Perimetro/perimetro");
module.exports = Object.assign(Object.assign({}, area), perimetro);
