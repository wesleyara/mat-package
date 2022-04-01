import { isNumber } from "class-validator";

const perimetroCirculo = (raio: number) => {
  const isRaio = isNumber(raio);

  if (!isRaio) throw "O parametro raio é do tipo number";

  return Math.round(2 * Math.PI * raio);
};

const perimetroTriangulo = (lado: number) => {
  const isLado = isNumber(lado);

  if (!isLado) throw "O parametro lado é do tipo number";

  return lado * 3;
};

const perimetroRetangulo = (lado: number, altura: number) => {
  const isLado = isNumber(lado);
  const isAltura = isNumber(altura);

  if (!isLado) throw "O parametro lado é do tipo number";
  if (!isAltura) throw "O parametro altura é do tipo number";

  return (lado + altura) * 2;
};

const perimetroQuadrado = (lado: number) => {
  const isLado = isNumber(lado);

  if (!isLado) throw "O parametro lado é do tipo number";

  return lado * 4;
};

const perimetroParalelogramo = (ladoMenor: number, ladoMaior: number) => {
  const isLadoMaior = isNumber(ladoMaior);
  const isLadoMenor = isNumber(ladoMenor);

  if (!isLadoMaior) throw "O parametro ladoMaior é do tipo number";
  if (!isLadoMenor) throw "O parametro ladoMenor é do tipo number";

  return (ladoMenor + ladoMaior) * 2;
};

const perimetroTrapezio = (
  ladoA: number,
  ladoB: number,
  ladoC: number,
  ladoD: number
) => {
  const isLadoA = isNumber(ladoA);
  const isLadoB = isNumber(ladoB);
  const isLadoC = isNumber(ladoC);
  const isLadoD = isNumber(ladoD);

  if (!isLadoA || isLadoB || isLadoC || isLadoD)
    throw "O parametro lado é do tipo number";

  return ladoA + ladoB + ladoC + ladoD;
};

export = {
  perimetroCirculo,
  perimetroParalelogramo,
  perimetroQuadrado,
  perimetroRetangulo,
  perimetroTrapezio,
  perimetroTriangulo,
};
