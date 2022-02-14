"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.perimetroTrapezio = exports.perimetroParalelogramo = exports.perimetroQuadrado = exports.perimetroRetangulo = exports.perimetroTriangulo = exports.perimetroCirculo = void 0;
const class_validator_1 = require("class-validator");
function perimetroCirculo(raio) {
    const isRaio = (0, class_validator_1.isNumber)(raio);
    if (!isRaio)
        throw "O parametro raio é do tipo number";
    return Math.round(2 * Math.PI * raio);
}
exports.perimetroCirculo = perimetroCirculo;
function perimetroTriangulo(lado) {
    const isLado = (0, class_validator_1.isNumber)(lado);
    if (!isLado)
        throw "O parametro lado é do tipo number";
    return lado * 3;
}
exports.perimetroTriangulo = perimetroTriangulo;
function perimetroRetangulo(lado, altura) {
    const isLado = (0, class_validator_1.isNumber)(lado);
    const isAltura = (0, class_validator_1.isNumber)(altura);
    if (!isLado)
        throw "O parametro lado é do tipo number";
    if (!isAltura)
        throw "O parametro altura é do tipo number";
    return (lado + altura) * 2;
}
exports.perimetroRetangulo = perimetroRetangulo;
function perimetroQuadrado(lado) {
    const isLado = (0, class_validator_1.isNumber)(lado);
    if (!isLado)
        throw "O parametro lado é do tipo number";
    return lado * 4;
}
exports.perimetroQuadrado = perimetroQuadrado;
function perimetroParalelogramo(ladoMenor, ladoMaior) {
    const isLadoMaior = (0, class_validator_1.isNumber)(ladoMaior);
    const isLadoMenor = (0, class_validator_1.isNumber)(ladoMenor);
    if (!isLadoMaior)
        throw "O parametro ladoMaior é do tipo number";
    if (!isLadoMenor)
        throw "O parametro ladoMenor é do tipo number";
    return (ladoMenor + ladoMaior) * 2;
}
exports.perimetroParalelogramo = perimetroParalelogramo;
function perimetroTrapezio(ladoA, ladoB, ladoC, ladoD) {
    const isLadoA = (0, class_validator_1.isNumber)(ladoA);
    const isLadoB = (0, class_validator_1.isNumber)(ladoB);
    const isLadoC = (0, class_validator_1.isNumber)(ladoC);
    const isLadoD = (0, class_validator_1.isNumber)(ladoD);
    if (!isLadoA || isLadoB || isLadoC || isLadoD)
        throw "O parametro lado é do tipo number";
    return ladoA + ladoB + ladoC + ladoD;
}
exports.perimetroTrapezio = perimetroTrapezio;
