import { isNumber } from "class-validator";
import { validatorMath } from "../Validator";

const numeroEuler = () => {
  return Math.E;
};

const exponencial = (numero: number) => {
  validatorMath(numero);

  return Math.exp(numero);
};

const raizQuadrada = (numero: number) => {
  validatorMath(numero);

  return Math.sqrt(numero);
};

const modulo = (numero: number) => {
  validatorMath(numero);

  return Math.abs(numero);
};

const raizCubica = (numero: number) => {
  validatorMath(numero);

  return Math.cbrt(numero);
};

const potencia = (numero: number, expoente: number) => {
  const isNumero = isNumber(numero);
  const isExpoente = isNumber(expoente);

  if (!isNumero) throw "O parametro numero é do tipo number.";
  if (!isExpoente) throw "O parametro expoente é do tipo number.";

  return Math.pow(numero, expoente);
};

const numeroAleatorio = (valorMaximo: number) => {
  validatorMath(valorMaximo);

  return Math.random() * (valorMaximo + 1);
};

const arredondar = (numero: number) => {
  validatorMath(numero);

  return Math.round(numero);
};

export = {
  arredondar,
  numeroAleatorio,
  potencia,
  raizCubica,
  modulo,
  raizQuadrada,
  exponencial,
  numeroEuler,
};
