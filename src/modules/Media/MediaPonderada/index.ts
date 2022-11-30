import { validatorMediaPonderada } from "../../Validator";

export const mediaPonderada = (array: number[], arrayPesos: number[]) => {
  const mult: number[] = [];
  const tamanho = array.length;
  const tamanhoPesos = arrayPesos.length;

  if (tamanho === tamanhoPesos) {
    validatorMediaPonderada(array, arrayPesos);

    for (let i = 0; i < array.length; i++) {
      mult.push(array[i] * arrayPesos[i]);
    }

    let somaPesos = 0;

    for (let i = 0; i < arrayPesos.length; i++) {
      somaPesos += arrayPesos[i];
    }

    let soma = 0;

    for (let i = 0; i < mult.length; i++) {
      soma += mult[i];
    }

    const result = Number((soma / somaPesos).toFixed(2));

    return result;
  } else {
    throw new Error("Os arrays precisam ter o mesmo tamanho");
  }
};
