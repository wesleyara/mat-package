"use strict";
const Validator_1 = require("../Validator");
const CORRETOR = 1000000000000;
const soma = (n1, n2) => {
    Validator_1.validatorOperacoes(n1, n2);
    const result = (n1 * CORRETOR + n2 * CORRETOR) / CORRETOR;
    return result;
};
const multiplicacao = (n1, n2) => {
    Validator_1.validatorOperacoes(n1, n2);
    const result = (n1 * CORRETOR * n2 * CORRETOR) / (CORRETOR * CORRETOR);
    return result;
};
const divisao = (n1, n2) => {
    Validator_1.validatorOperacoes(n1, n2);
    const result = (n1 * CORRETOR) / (n2 * CORRETOR);
    return result;
};
const subtracao = (n1, n2) => {
    Validator_1.validatorOperacoes(n1, n2);
    const result = (n1 * CORRETOR - n2 * CORRETOR) / CORRETOR;
    return result;
};
module.exports = { soma, subtracao, multiplicacao, divisao };
