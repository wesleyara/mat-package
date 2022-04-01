"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.perimetroTrapezio = exports.perimetroParalelogramo = exports.perimetroQuadrado = exports.perimetroRetangulo = exports.perimetroTriangulo = exports.perimetroCirculo = void 0;
const class_validator_1 = require("class-validator");
exports.perimetroCirculo = (raio) => {
    const isRaio = class_validator_1.isNumber(raio);
    if (!isRaio)
        throw "O parametro raio é do tipo number";
    return Math.round(2 * Math.PI * raio);
};
exports.perimetroTriangulo = (lado) => {
    const isLado = class_validator_1.isNumber(lado);
    if (!isLado)
        throw "O parametro lado é do tipo number";
    return lado * 3;
};
exports.perimetroRetangulo = (lado, altura) => {
    const isLado = class_validator_1.isNumber(lado);
    const isAltura = class_validator_1.isNumber(altura);
    if (!isLado)
        throw "O parametro lado é do tipo number";
    if (!isAltura)
        throw "O parametro altura é do tipo number";
    return (lado + altura) * 2;
};
exports.perimetroQuadrado = (lado) => {
    const isLado = class_validator_1.isNumber(lado);
    if (!isLado)
        throw "O parametro lado é do tipo number";
    return lado * 4;
};
exports.perimetroParalelogramo = (ladoMenor, ladoMaior) => {
    const isLadoMaior = class_validator_1.isNumber(ladoMaior);
    const isLadoMenor = class_validator_1.isNumber(ladoMenor);
    if (!isLadoMaior)
        throw "O parametro ladoMaior é do tipo number";
    if (!isLadoMenor)
        throw "O parametro ladoMenor é do tipo number";
    return (ladoMenor + ladoMaior) * 2;
};
exports.perimetroTrapezio = (ladoA, ladoB, ladoC, ladoD) => {
    const isLadoA = class_validator_1.isNumber(ladoA);
    const isLadoB = class_validator_1.isNumber(ladoB);
    const isLadoC = class_validator_1.isNumber(ladoC);
    const isLadoD = class_validator_1.isNumber(ladoD);
    if (!isLadoA || isLadoB || isLadoC || isLadoD)
        throw "O parametro lado é do tipo number";
    return ladoA + ladoB + ladoC + ladoD;
};
