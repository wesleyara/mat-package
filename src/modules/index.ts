import operacoes from "./Operacoes";
import geometria from "./Geometria";
import math from "./Math";
import equacoes from "./Equacoes";
import media from "./Media";
import conversor from "./Conversor";

interface FunctionTypes {
  convCM: (unidade: string, numero: number) => number;
  convKM: (unidade: string, numero: number) => number;
  convM: (unidade: string, numero: number) => number;
  conversorMoedas: (moeda: string) => Promise<any>;
  soma: (n1: number, n2: number) => number;
  subtracao: (n1: number, n2: number) => number;
  multiplicacao: (n1: number, n2: number) => number;
  divisao: (n1: number, n2: number) => number;
  areaCirculo: (raio: number) => number;
  areaParalelogramo: (base: number, altura: number) => number;
  areaQuadrado: (lado: number) => number;
  areaRetangulo: (lado: number, altura: number) => number;
  areaTrapezio: (
    baseMaior: number,
    baseMenor: number,
    altura: number,
  ) => number;
  areaTriangulo: (base: number, altura: number) => number;
  perimetroCirculo: (raio: number) => number;
  perimetroParalelogramo: (ladoMenor: number, ladoMaior: number) => number;
  perimetroQuadrado: (lado: number) => number;
  perimetroRetangulo: (lado: number, altura: number) => number;
  perimetroTrapezio: (
    ladoA: number,
    ladoB: number,
    ladoC: number,
    ladoD: number,
  ) => number;
  perimetroTriangulo: (lado: number) => number;
  arredondar: (numero: number) => number;
  numeroAleatorio: (valorMaximo: number) => number;
  potencia: (numero: number, expoente: number) => number;
  raizCubica: (numero: number) => number;
  modulo: (numero: number) => number;
  raizQuadrada: (numero: number) => number;
  exponencial: (numero: number) => number;
  numeroEuler: () => number;
  eqSegGrau: (a: number, b: number, c: number) => number[];
  eqSegGrauFra: (a: number, b: number, c: number) => string[];
  mediaAritmetica: (array: number[]) => number;
  mediaPonderada: (array: number[], arrayPesos: number[]) => number;
}

export = {
  ...conversor,
  ...operacoes,
  ...geometria,
  ...math,
  ...equacoes,
  ...media,
  ...conversor,
} as FunctionTypes;
