export function areaQuadrado(lado: number) {
  return lado * lado;
}

export function areaRetangulo(lado: number, altura: number) {
  return lado * altura;
}

export function areaTriangulo(base: number, altura: number) {
  return (base * altura) / 2;
}

export function areaCirculo(raio: number) {
  return Math.round(Math.PI * Math.pow(raio, 2));
}

export function areaParalelogramo(base: number, altura: number) {
  return base * altura;
}

export function areaTrapezio(
  baseMaior: number,
  baseMenor: number,
  altura: number,
) {
  return ((baseMaior + baseMenor) / 2) * altura;
}
