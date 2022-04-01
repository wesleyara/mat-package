import { validatorMedia } from "../../Validator";

const mediaAritmetica = (array: number[]) => {
  validatorMedia(array);

  let soma = 0;
  const tamanho = array.length;

  for (let i = 0; i < array.length; i++) {
    soma += array[i];
  }

  const result = Number((soma / tamanho).toFixed(2));

  return result;
};

export = { mediaAritmetica };
