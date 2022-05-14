"use strict";
const Validator_1 = require("../../Validator");
const mediaPonderada = (array, arrayPesos) => {
    const mult = [];
    const tamanho = array.length;
    const tamanhoPesos = arrayPesos.length;
    if (tamanho == tamanhoPesos) {
        (0, Validator_1.validatorMediaPonderada)(array, arrayPesos);
        for (let i = 0; i < array.length; i++) {
            mult.push(array[i] * arrayPesos[i]);
        }
        let somaPesos = 0;
        for (let i = 0; i < arrayPesos.length; i++) {
            somaPesos += arrayPesos[i];
        }
        let soma = 0;
        for (let i = 0; i < mult.length; i++) {
            soma += mult[i];
        }
        const result = Number((soma / somaPesos).toFixed(2));
        return result;
    }
    else {
        throw new Error("Os arrays precisam ter o mesmo tamanho");
    }
};
module.exports = { mediaPonderada };
