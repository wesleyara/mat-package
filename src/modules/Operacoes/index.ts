import { validatorOperacoes } from "../Validator";

const CORRETOR = 1000000000000;

export const soma = (n1: number, n2: number) => {
  validatorOperacoes(n1, n2);

  const result = (n1 * CORRETOR + n2 * CORRETOR) / CORRETOR;

  return result;
};

export const multiplicacao = (n1: number, n2: number) => {
  validatorOperacoes(n1, n2);

  const result = (n1 * CORRETOR * n2 * CORRETOR) / (CORRETOR * CORRETOR);

  return result;
};

export const divisao = (n1: number, n2: number) => {
  validatorOperacoes(n1, n2);

  if (n2 === 0) {
    throw new Error("Não é possível dividir por zero");
  }

  const result = (n1 * CORRETOR) / (n2 * CORRETOR);

  return result;
};

export const subtracao = (n1: number, n2: number) => {
  validatorOperacoes(n1, n2);

  const result = (n1 * CORRETOR - n2 * CORRETOR) / CORRETOR;

  return result;
};
