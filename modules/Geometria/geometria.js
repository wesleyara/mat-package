const area = require("./Area/area");
const perimetro = require("./Perimetro/perimetro");

const geometria = { ...area, ...perimetro };

module.exports = geometria;
