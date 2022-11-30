import { conversorMoedas, convCM, convKM, convM } from "./Conversor";
import { eqSegGrau, eqSegGrauFra } from "./Equacoes";
import {
  areaCirculo,
  areaParalelogramo,
  areaQuadrado,
  areaRetangulo,
  areaTrapezio,
  areaTriangulo,
  perimetroCirculo,
  perimetroParalelogramo,
  perimetroQuadrado,
  perimetroRetangulo,
  perimetroTrapezio,
  perimetroTriangulo,
} from "./Geometria";
import {
  arredondar,
  exponencial,
  modulo,
  numeroAleatorio,
  numeroEuler,
  potencia,
  raizCubica,
  raizQuadrada,
} from "./Math";
import { mediaAritmetica, mediaPonderada } from "./Media";
import { divisao, multiplicacao, soma, subtracao } from "./Operacoes";

export * from "./Operacoes";
export * from "./Geometria";
export * from "./Math";
export * from "./Equacoes";
export * from "./Media";
export * from "./Conversor";

const mat = {
  soma,
  subtracao,
  divisao,
  multiplicacao,
  areaCirculo,
  areaParalelogramo,
  areaQuadrado,
  areaRetangulo,
  areaTrapezio,
  areaTriangulo,
  perimetroCirculo,
  perimetroParalelogramo,
  perimetroQuadrado,
  perimetroRetangulo,
  perimetroTrapezio,
  perimetroTriangulo,
  arredondar,
  exponencial,
  modulo,
  numeroAleatorio,
  numeroEuler,
  potencia,
  raizCubica,
  raizQuadrada,
  eqSegGrau,
  eqSegGrauFra,
  mediaAritmetica,
  mediaPonderada,
  conversorMoedas,
  convCM,
  convKM,
  convM,
};

export default mat;
