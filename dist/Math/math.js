"use strict";
module.exports = {
    // Funções math
    numeroEuler: () => {
        return Math.E;
    },
    exponencial: (numero) => {
        return Math.exp(numero);
    },
    raizQuadrada: (numero) => {
        return Math.sqrt(numero);
    },
    modulo: (numero) => {
        return Math.abs(numero);
    },
    raizCubica: (numero) => {
        return Math.cbrt(numero);
    },
    potencia: (numero, expoente) => {
        return Math.pow(numero, expoente);
    },
    numeroAleatorio: (valorMaximo) => {
        return Math.random() * (valorMaximo + 1);
    },
    arredondar: (numero) => {
        return Math.round(numero);
    },
};
