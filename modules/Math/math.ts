import { isNumber } from "class-validator";
import { validatorMath } from "../Validator";

export function numeroEuler() {
  return Math.E;
}

export function exponencial(numero: number) {
  validatorMath(numero);

  return Math.exp(numero);
}

export function raizQuadrada(numero: number) {
  validatorMath(numero);

  return Math.sqrt(numero);
}

export function modulo(numero: number) {
  validatorMath(numero);

  return Math.abs(numero);
}

export function raizCubica(numero: number) {
  validatorMath(numero);

  return Math.cbrt(numero);
}

export function potencia(numero: number, expoente: number) {
  const isNumero = isNumber(numero);
  const isExpoente = isNumber(expoente);

  if (!isNumero) throw "O parametro numero é do tipo number.";
  if (!isExpoente) throw "O parametro expoente é do tipo number.";

  return Math.pow(numero, expoente);
}

export function numeroAleatorio(valorMaximo: number) {
  validatorMath(valorMaximo);

  return Math.random() * (valorMaximo + 1);
}

export function arredondar(numero: number) {
  validatorMath(numero);

  return Math.round(numero);
}
