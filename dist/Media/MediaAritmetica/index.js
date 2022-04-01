"use strict";
const Validator_1 = require("../../Validator");
const mediaAritmetica = (array) => {
    Validator_1.validatorMedia(array);
    let soma = 0;
    const tamanho = array.length;
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    const result = Number((soma / tamanho).toFixed(2));
    return result;
};
module.exports = { mediaAritmetica };
