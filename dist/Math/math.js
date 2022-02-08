"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arredondar = exports.numeroAleatorio = exports.potencia = exports.raizCubica = exports.modulo = exports.raizQuadrada = exports.exponencial = exports.numeroEuler = void 0;
function numeroEuler() {
    return Math.E;
}
exports.numeroEuler = numeroEuler;
function exponencial(numero) {
    return Math.exp(numero);
}
exports.exponencial = exponencial;
function raizQuadrada(numero) {
    return Math.sqrt(numero);
}
exports.raizQuadrada = raizQuadrada;
function modulo(numero) {
    return Math.abs(numero);
}
exports.modulo = modulo;
function raizCubica(numero) {
    return Math.cbrt(numero);
}
exports.raizCubica = raizCubica;
function potencia(numero, expoente) {
    return Math.pow(numero, expoente);
}
exports.potencia = potencia;
function numeroAleatorio(valorMaximo) {
    return Math.random() * (valorMaximo + 1);
}
exports.numeroAleatorio = numeroAleatorio;
function arredondar(numero) {
    return Math.round(numero);
}
exports.arredondar = arredondar;
