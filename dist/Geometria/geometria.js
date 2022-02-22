"use strict";
const area = require("./Area");
const perimetro = require("./Perimetro");
module.exports = Object.assign(Object.assign({}, area), perimetro);
