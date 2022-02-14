"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.media = void 0;
const Validator_1 = require("../../Validator");
function media(array) {
    (0, Validator_1.validatorMedia)(array);
    let soma = 0;
    const tamanho = array.length;
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    const result = Number((soma / tamanho).toFixed(2));
    return result;
}
exports.media = media;
