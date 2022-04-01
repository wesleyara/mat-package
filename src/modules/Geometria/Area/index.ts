import { isNumber } from "class-validator";

const areaQuadrado = (lado: number) => {
  const isN1 = isNumber(lado);

  if (!isN1) throw "O parametro lado é tipo number.";
  return lado * lado;
}

const areaRetangulo = (lado: number, altura: number) => {
  const isN1 = isNumber(lado);
  const isN2 = isNumber(altura);

  if (!isN1) throw "O parametro lado é tipo number.";
  if (!isN2) throw "O parametro altura é tipo number.";

  return lado * altura;
}

const areaTriangulo = (base: number, altura: number) => {
  const isN1 = isNumber(base);
  const isN2 = isNumber(altura);

  if (!isN1) throw "O parametro base é tipo number.";
  if (!isN2) throw "O parametro altura é tipo number.";

  return (base * altura) / 2;
}

const areaCirculo = (raio: number) => {
  const isN1 = isNumber(raio);

  if (!isN1) throw "O parametro raio é tipo number.";

  return Math.round(Math.PI * Math.pow(raio, 2));
}

const areaParalelogramo = (base: number, altura: number) => {
  const isN1 = isNumber(base);
  const isN2 = isNumber(altura);

  if (!isN1) throw "O parametro base é tipo number.";
  if (!isN2) throw "O parametro altura é tipo number.";

  return base * altura;
}

const areaTrapezio = (
  baseMaior: number,
  baseMenor: number,
  altura: number,
) => {
  const isN1 = isNumber(baseMaior);
  const isN2 = isNumber(baseMenor);
  const isN3 = isNumber(altura);

  if (!isN1) throw "O parametro baseMaior é tipo number.";
  if (!isN2) throw "O parametro baseMenor é tipo number.";
  if (!isN3) throw "O parametro altura é tipo number.";

  return ((baseMaior + baseMenor) / 2) * altura;
}

export = {areaCirculo, areaParalelogramo, areaQuadrado, areaRetangulo, areaTrapezio, areaTriangulo}