import { isNumber, isString } from "class-validator";

export function convKM(unidade: string, numero: number) {
  const isUnidade = isString(unidade);
  const isNumero = isNumber(numero);

  if (!isUnidade) return console.error("O parametro unidade é do tipo string");
  if (!isNumero) return console.error("O parametro numero é do tipo number");

  if (unidade === "hm") {
    return numero * 10;
  } else if (unidade === "dam") {
    return numero * 100;
  } else if (unidade === "m") {
    return numero * 1000;
  } else if (unidade === "dm") {
    return numero * 10000;
  } else if (unidade === "cm") {
    return numero * 100000;
  } else if (unidade === "mm") {
    return numero * 1000000;
  }
}

export function convM(unidade: string, numero: number) {
  if (unidade === "km") {
    return numero / 1000;
  } else if (unidade === "hm") {
    return numero / 100;
  } else if (unidade === "dam") {
    return numero / 10;
  } else if (unidade === "dm") {
    return numero * 10;
  } else if (unidade === "cm") {
    return numero * 100;
  } else if (unidade === "mm") {
    return numero * 1000;
  }
}

export function convCM(unidade: string, numero: number) {
  if (unidade === "km") {
    return numero / 100000;
  } else if (unidade === "hm") {
    return numero / 10000;
  } else if (unidade === "dam") {
    return numero / 1000;
  } else if (unidade === "m") {
    return numero / 100;
  } else if (unidade === "dm") {
    return numero / 10;
  } else if (unidade === "mm") {
    return numero * 10;
  }
}
