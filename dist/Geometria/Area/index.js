"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.areaTrapezio = exports.areaParalelogramo = exports.areaCirculo = exports.areaTriangulo = exports.areaRetangulo = exports.areaQuadrado = void 0;
const class_validator_1 = require("class-validator");
function areaQuadrado(lado) {
    const isN1 = (0, class_validator_1.isNumber)(lado);
    if (!isN1)
        throw "O parametro lado é tipo number.";
    return lado * lado;
}
exports.areaQuadrado = areaQuadrado;
function areaRetangulo(lado, altura) {
    const isN1 = (0, class_validator_1.isNumber)(lado);
    const isN2 = (0, class_validator_1.isNumber)(altura);
    if (!isN1)
        throw "O parametro lado é tipo number.";
    if (!isN2)
        throw "O parametro altura é tipo number.";
    return lado * altura;
}
exports.areaRetangulo = areaRetangulo;
function areaTriangulo(base, altura) {
    const isN1 = (0, class_validator_1.isNumber)(base);
    const isN2 = (0, class_validator_1.isNumber)(altura);
    if (!isN1)
        throw "O parametro base é tipo number.";
    if (!isN2)
        throw "O parametro altura é tipo number.";
    return (base * altura) / 2;
}
exports.areaTriangulo = areaTriangulo;
function areaCirculo(raio) {
    const isN1 = (0, class_validator_1.isNumber)(raio);
    if (!isN1)
        throw "O parametro raio é tipo number.";
    return Math.round(Math.PI * Math.pow(raio, 2));
}
exports.areaCirculo = areaCirculo;
function areaParalelogramo(base, altura) {
    const isN1 = (0, class_validator_1.isNumber)(base);
    const isN2 = (0, class_validator_1.isNumber)(altura);
    if (!isN1)
        throw "O parametro base é tipo number.";
    if (!isN2)
        throw "O parametro altura é tipo number.";
    return base * altura;
}
exports.areaParalelogramo = areaParalelogramo;
function areaTrapezio(baseMaior, baseMenor, altura) {
    const isN1 = (0, class_validator_1.isNumber)(baseMaior);
    const isN2 = (0, class_validator_1.isNumber)(baseMenor);
    const isN3 = (0, class_validator_1.isNumber)(altura);
    if (!isN1)
        throw "O parametro baseMaior é tipo number.";
    if (!isN2)
        throw "O parametro baseMenor é tipo number.";
    if (!isN3)
        throw "O parametro altura é tipo number.";
    return ((baseMaior + baseMenor) / 2) * altura;
}
exports.areaTrapezio = areaTrapezio;
