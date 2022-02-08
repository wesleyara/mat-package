export function perimetroCirculo(raio: number) {
  return Math.round(2 * Math.PI * raio);
}

export function perimetroTriangulo(lado: number) {
  return lado * 3;
}

export function perimetroRetangulo(lado: number, altura: number) {
  return (lado + altura) * 2;
}

export function perimetroQuadrado(lado: number) {
  return lado * 4;
}

export function perimetroParalelogramo(ladoMenor: number, ladoMaior: number) {
  return (ladoMenor + ladoMaior) * 2;
}

export function perimetroTrapezio(
  ladoA: number,
  ladoB: number,
  ladoC: number,
  ladoD: number,
) {
  return ladoA + ladoB + ladoC + ladoD;
}
