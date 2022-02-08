"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.areaTrapezio = exports.areaParalelogramo = exports.areaCirculo = exports.areaTriangulo = exports.areaRetangulo = exports.areaQuadrado = void 0;
function areaQuadrado(lado) {
    return lado * lado;
}
exports.areaQuadrado = areaQuadrado;
function areaRetangulo(lado, altura) {
    return lado * altura;
}
exports.areaRetangulo = areaRetangulo;
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
exports.areaTriangulo = areaTriangulo;
function areaCirculo(raio) {
    return Math.round(Math.PI * Math.pow(raio, 2));
}
exports.areaCirculo = areaCirculo;
function areaParalelogramo(base, altura) {
    return base * altura;
}
exports.areaParalelogramo = areaParalelogramo;
function areaTrapezio(baseMaior, baseMenor, altura) {
    return ((baseMaior + baseMenor) / 2) * altura;
}
exports.areaTrapezio = areaTrapezio;
