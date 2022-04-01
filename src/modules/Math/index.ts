import { isNumber } from "class-validator";
import { validatorMath } from "../Validator";

export const numeroEuler = () => {
  return Math.E;
}

export const exponencial = (numero: number) => {
  validatorMath(numero);

  return Math.exp(numero);
}

export const raizQuadrada = (numero: number) => {
  validatorMath(numero);

  return Math.sqrt(numero);
}

export const modulo = (numero: number) => {
  validatorMath(numero);

  return Math.abs(numero);
}

export const raizCubica = (numero: number) => {
  validatorMath(numero);

  return Math.cbrt(numero);
}

export const potencia = (numero: number, expoente: number) => {
  const isNumero = isNumber(numero);
  const isExpoente = isNumber(expoente);

  if (!isNumero) throw "O parametro numero é do tipo number.";
  if (!isExpoente) throw "O parametro expoente é do tipo number.";

  return Math.pow(numero, expoente);
}

export const numeroAleatorio = (valorMaximo: number) => {
  validatorMath(valorMaximo);

  return Math.random() * (valorMaximo + 1);
}

export const arredondar = (numero: number) => {
  validatorMath(numero);

  return Math.round(numero);
}
