"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatorEqSegGrau = exports.validatorMath = exports.validatorMediaPonderada = exports.validatorMedia = exports.validatorOperacoes = exports.validatorConversorMoedas = exports.validatorConversorMedidas = void 0;
const class_validator_1 = require("class-validator");
exports.validatorConversorMedidas = (unidade, numero) => {
    const isUnidade = class_validator_1.isString(unidade);
    const isNumero = class_validator_1.isNumber(numero);
    if (!isUnidade)
        throw "O parametro unidade é do tipo string.";
    if (!isNumero)
        throw "O parametro numero é do tipo number.";
};
exports.validatorConversorMoedas = (moeda) => {
    const isMoeda = class_validator_1.isString(moeda);
    if (!isMoeda)
        throw "O parametro moeda é do tipo string.";
};
exports.validatorOperacoes = (n1, n2) => {
    const isN1 = class_validator_1.isNumber(n1);
    const isN2 = class_validator_1.isNumber(n2);
    if (!isN1)
        throw "O parametro n1 é tipo number.";
    if (!isN2)
        throw "O parametro n2 é tipo number.";
};
exports.validatorMedia = (array) => {
    const isArr = class_validator_1.isArray(array);
    if (!isArr)
        throw "O parametro array é um array de números.";
};
exports.validatorMediaPonderada = (array, arrayPesos) => {
    const isArr = class_validator_1.isArray(array);
    const isArrPe = class_validator_1.isArray(arrayPesos);
    if (!isArr)
        throw "O parametro array é um array de números.";
    if (!isArrPe)
        throw "O parametro arrayPesos é um array de números.";
};
exports.validatorMath = (numero) => {
    const isNumero = class_validator_1.isNumber(numero);
    if (!isNumero)
        throw "O parametro número é do tipo number.";
};
exports.validatorEqSegGrau = (a, b, c) => {
    const isA = class_validator_1.isNumber(a);
    const isB = class_validator_1.isNumber(b);
    const isC = class_validator_1.isNumber(c);
    if (!isA)
        throw "O parametro a é do tipo number.";
    if (!isB)
        throw "O parametro b é do tipo number.";
    if (!isC)
        throw "O parametro c é do tipo number.";
};
