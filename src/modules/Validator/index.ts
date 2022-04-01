import { isArray, isNumber, isString } from "class-validator";

export const validatorConversorMedidas = (unidade: string, numero: number) => {
  const isUnidade = isString(unidade);
  const isNumero = isNumber(numero);

  if (!isUnidade) throw "O parametro unidade é do tipo string.";
  if (!isNumero) throw "O parametro numero é do tipo number.";
}

export const validatorConversorMoedas = (moeda: string) =>{
  const isMoeda = isString(moeda);

  if (!isMoeda) throw "O parametro moeda é do tipo string.";
}

export const validatorOperacoes = (n1: number, n2: number) =>{
  const isN1 = isNumber(n1);
  const isN2 = isNumber(n2);

  if (!isN1) throw "O parametro n1 é tipo number.";
  if (!isN2) throw "O parametro n2 é tipo number.";
}

export const validatorMedia = (array: number[]) =>{
  const isArr = isArray(array);

  if (!isArr) throw "O parametro array é um array de números.";
}

export const validatorMediaPonderada = (array: number[], arrayPesos: number[]) =>{
  const isArr = isArray(array);
  const isArrPe = isArray(arrayPesos);

  if (!isArr) throw "O parametro array é um array de números.";
  if (!isArrPe) throw "O parametro arrayPesos é um array de números.";
}

export const validatorMath = (numero: number) => {
  const isNumero = isNumber(numero);

  if (!isNumero) throw "O parametro número é do tipo number.";
}

export const validatorEqSegGrau = (a: number, b: number, c: number) => {
  const isA = isNumber(a);
  const isB = isNumber(b);
  const isC = isNumber(c);

  if (!isA) throw "O parametro a é do tipo number.";
  if (!isB) throw "O parametro b é do tipo number.";
  if (!isC) throw "O parametro c é do tipo number.";
}
