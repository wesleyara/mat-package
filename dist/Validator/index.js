"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatorEqSegGrau = exports.validatorMath = exports.validatorMediaPonderada = exports.validatorMedia = exports.validatorOperacoes = exports.validatorConversorMoedas = exports.validatorConversorMedidas = void 0;
const class_validator_1 = require("class-validator");
const validatorConversorMedidas = (unidade, numero) => {
    const isUnidade = (0, class_validator_1.isString)(unidade);
    const isNumero = (0, class_validator_1.isNumber)(numero);
    if (!isUnidade)
        throw "O parametro unidade é do tipo string.";
    if (!isNumero)
        throw "O parametro numero é do tipo number.";
};
exports.validatorConversorMedidas = validatorConversorMedidas;
const validatorConversorMoedas = (moeda) => {
    const isMoeda = (0, class_validator_1.isString)(moeda);
    if (!isMoeda)
        throw "O parametro moeda é do tipo string.";
};
exports.validatorConversorMoedas = validatorConversorMoedas;
const validatorOperacoes = (n1, n2) => {
    const isN1 = (0, class_validator_1.isNumber)(n1);
    const isN2 = (0, class_validator_1.isNumber)(n2);
    if (!isN1)
        throw "O parametro n1 é tipo number.";
    if (!isN2)
        throw "O parametro n2 é tipo number.";
};
exports.validatorOperacoes = validatorOperacoes;
const validatorMedia = (array) => {
    const isArr = (0, class_validator_1.isArray)(array);
    if (!isArr)
        throw "O parametro array é um array de números.";
};
exports.validatorMedia = validatorMedia;
const validatorMediaPonderada = (array, arrayPesos) => {
    const isArr = (0, class_validator_1.isArray)(array);
    const isArrPe = (0, class_validator_1.isArray)(arrayPesos);
    if (!isArr)
        throw "O parametro array é um array de números.";
    if (!isArrPe)
        throw "O parametro arrayPesos é um array de números.";
};
exports.validatorMediaPonderada = validatorMediaPonderada;
const validatorMath = (numero) => {
    const isNumero = (0, class_validator_1.isNumber)(numero);
    if (!isNumero)
        throw "O parametro número é do tipo number.";
};
exports.validatorMath = validatorMath;
const validatorEqSegGrau = (a, b, c) => {
    const isA = (0, class_validator_1.isNumber)(a);
    const isB = (0, class_validator_1.isNumber)(b);
    const isC = (0, class_validator_1.isNumber)(c);
    if (!isA)
        throw "O parametro a é do tipo number.";
    if (!isB)
        throw "O parametro b é do tipo number.";
    if (!isC)
        throw "O parametro c é do tipo number.";
};
exports.validatorEqSegGrau = validatorEqSegGrau;
