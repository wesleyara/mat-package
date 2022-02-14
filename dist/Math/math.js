"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arredondar = exports.numeroAleatorio = exports.potencia = exports.raizCubica = exports.modulo = exports.raizQuadrada = exports.exponencial = exports.numeroEuler = void 0;
const class_validator_1 = require("class-validator");
const Validator_1 = require("../Validator");
function numeroEuler() {
    return Math.E;
}
exports.numeroEuler = numeroEuler;
function exponencial(numero) {
    (0, Validator_1.validatorMath)(numero);
    return Math.exp(numero);
}
exports.exponencial = exponencial;
function raizQuadrada(numero) {
    (0, Validator_1.validatorMath)(numero);
    return Math.sqrt(numero);
}
exports.raizQuadrada = raizQuadrada;
function modulo(numero) {
    (0, Validator_1.validatorMath)(numero);
    return Math.abs(numero);
}
exports.modulo = modulo;
function raizCubica(numero) {
    (0, Validator_1.validatorMath)(numero);
    return Math.cbrt(numero);
}
exports.raizCubica = raizCubica;
function potencia(numero, expoente) {
    const isNumero = (0, class_validator_1.isNumber)(numero);
    const isExpoente = (0, class_validator_1.isNumber)(expoente);
    if (!isNumero)
        throw "O parametro numero é do tipo number.";
    if (!isExpoente)
        throw "O parametro expoente é do tipo number.";
    return Math.pow(numero, expoente);
}
exports.potencia = potencia;
function numeroAleatorio(valorMaximo) {
    (0, Validator_1.validatorMath)(valorMaximo);
    return Math.random() * (valorMaximo + 1);
}
exports.numeroAleatorio = numeroAleatorio;
function arredondar(numero) {
    (0, Validator_1.validatorMath)(numero);
    return Math.round(numero);
}
exports.arredondar = arredondar;
