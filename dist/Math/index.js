"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arredondar = exports.numeroAleatorio = exports.potencia = exports.raizCubica = exports.modulo = exports.raizQuadrada = exports.exponencial = exports.numeroEuler = void 0;
const class_validator_1 = require("class-validator");
const Validator_1 = require("../Validator");
exports.numeroEuler = () => {
    return Math.E;
};
exports.exponencial = (numero) => {
    Validator_1.validatorMath(numero);
    return Math.exp(numero);
};
exports.raizQuadrada = (numero) => {
    Validator_1.validatorMath(numero);
    return Math.sqrt(numero);
};
exports.modulo = (numero) => {
    Validator_1.validatorMath(numero);
    return Math.abs(numero);
};
exports.raizCubica = (numero) => {
    Validator_1.validatorMath(numero);
    return Math.cbrt(numero);
};
exports.potencia = (numero, expoente) => {
    const isNumero = class_validator_1.isNumber(numero);
    const isExpoente = class_validator_1.isNumber(expoente);
    if (!isNumero)
        throw "O parametro numero é do tipo number.";
    if (!isExpoente)
        throw "O parametro expoente é do tipo number.";
    return Math.pow(numero, expoente);
};
exports.numeroAleatorio = (valorMaximo) => {
    Validator_1.validatorMath(valorMaximo);
    return Math.random() * (valorMaximo + 1);
};
exports.arredondar = (numero) => {
    Validator_1.validatorMath(numero);
    return Math.round(numero);
};
