"use strict";
const class_validator_1 = require("class-validator");
const Validator_1 = require("../Validator");
const numeroEuler = () => {
    return Math.E;
};
const exponencial = (numero) => {
    (0, Validator_1.validatorMath)(numero);
    return Math.exp(numero);
};
const raizQuadrada = (numero) => {
    (0, Validator_1.validatorMath)(numero);
    return Math.sqrt(numero);
};
const modulo = (numero) => {
    (0, Validator_1.validatorMath)(numero);
    return Math.abs(numero);
};
const raizCubica = (numero) => {
    (0, Validator_1.validatorMath)(numero);
    return Math.cbrt(numero);
};
const potencia = (numero, expoente) => {
    const isNumero = (0, class_validator_1.isNumber)(numero);
    const isExpoente = (0, class_validator_1.isNumber)(expoente);
    if (!isNumero)
        throw "O parametro numero é do tipo number.";
    if (!isExpoente)
        throw "O parametro expoente é do tipo number.";
    return Math.pow(numero, expoente);
};
const numeroAleatorio = (valorMaximo) => {
    (0, Validator_1.validatorMath)(valorMaximo);
    return Math.random() * (valorMaximo + 1);
};
const arredondar = (numero) => {
    (0, Validator_1.validatorMath)(numero);
    return Math.round(numero);
};
module.exports = {
    arredondar,
    numeroAleatorio,
    potencia,
    raizCubica,
    modulo,
    raizQuadrada,
    exponencial,
    numeroEuler,
};
