module.exports = {
  // Perímetro de figuras geométricas
  perimetroCirculo: (raio: number) => {
    return Math.round(2 * Math.PI * raio);
  },

  perimetroTriangulo: (lado: number) => {
    return lado * 3;
  },

  perimetroRetangulo: (lado: number, altura: number) => {
    return (lado + altura) * 2;
  },

  perimetroQuadrado: (lado: number) => {
    return lado * 4;
  },

  perimetroParalelogramo: (ladoMenor: number, ladoMaior: number) => {
    return (ladoMenor + ladoMaior) * 2;
  },

  perimetroTrapezio: (
    ladoA: number,
    ladoB: number,
    ladoC: number,
    ladoD: number,
  ) => {
    return ladoA + ladoB + ladoC + ladoD;
  },
};
