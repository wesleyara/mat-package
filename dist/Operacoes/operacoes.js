"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subtracao = exports.divisao = exports.multiplicacao = exports.soma = void 0;
const Validator_1 = require("../Validator");
const CORRETOR = 1000000000000;
function soma(n1, n2) {
    (0, Validator_1.validatorOperacoes)(n1, n2);
    const result = (n1 * CORRETOR + n2 * CORRETOR) / CORRETOR;
    return result;
}
exports.soma = soma;
function multiplicacao(n1, n2) {
    (0, Validator_1.validatorOperacoes)(n1, n2);
    const result = (n1 * CORRETOR * n2 * CORRETOR) / (CORRETOR * CORRETOR);
    return result;
}
exports.multiplicacao = multiplicacao;
function divisao(n1, n2) {
    (0, Validator_1.validatorOperacoes)(n1, n2);
    const result = (n1 * CORRETOR) / (n2 * CORRETOR);
    return result;
}
exports.divisao = divisao;
function subtracao(n1, n2) {
    (0, Validator_1.validatorOperacoes)(n1, n2);
    const result = (n1 * CORRETOR - n2 * CORRETOR) / CORRETOR;
    return result;
}
exports.subtracao = subtracao;
