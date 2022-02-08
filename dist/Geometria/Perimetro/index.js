"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.perimetroTrapezio = exports.perimetroParalelogramo = exports.perimetroQuadrado = exports.perimetroRetangulo = exports.perimetroTriangulo = exports.perimetroCirculo = void 0;
function perimetroCirculo(raio) {
    return Math.round(2 * Math.PI * raio);
}
exports.perimetroCirculo = perimetroCirculo;
function perimetroTriangulo(lado) {
    return lado * 3;
}
exports.perimetroTriangulo = perimetroTriangulo;
function perimetroRetangulo(lado, altura) {
    return (lado + altura) * 2;
}
exports.perimetroRetangulo = perimetroRetangulo;
function perimetroQuadrado(lado) {
    return lado * 4;
}
exports.perimetroQuadrado = perimetroQuadrado;
function perimetroParalelogramo(ladoMenor, ladoMaior) {
    return (ladoMenor + ladoMaior) * 2;
}
exports.perimetroParalelogramo = perimetroParalelogramo;
function perimetroTrapezio(ladoA, ladoB, ladoC, ladoD) {
    return ladoA + ladoB + ladoC + ladoD;
}
exports.perimetroTrapezio = perimetroTrapezio;
