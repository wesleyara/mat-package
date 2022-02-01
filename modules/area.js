const area = {
  // Área de figuras geométricas
  areaQuadrado: (lado) => {
    return lado * lado;
  },

  areaRetangulo: (lado, altura) => {
    return lado * altura;
  },

  areaTriangulo: (base, altura) => {
    return (base * altura) / 2;
  },

  areaCirculo: (raio) => {
    return Math.PI * Math.pow(raio, 2);
  },

  areaParalelogramo: (base, altura) => {
    return base * altura;
  },

  areaTrapezio: (baseMaior, baseMenor, altura) => {
    return ((baseMaior + baseMenor) / 2) * altura;
  },

  // Perímetro de figuras geométricas
  perimetroCirculo: (raio) => {
    return 2 * Math.PI * raio;
  },

  perimetroTriangulo: (lado) => {
    return lado * 3;
  },

  perimetroRetangulo: (lado, altura) => {
    return (lado + altura) * 2;
  },

  perimetroQuadrado: (lado) => {
    return lado * 4;
  },

  perimetroParalelogramo: (ladoMenor, ladoMaior) => {
    return (ladoMenor + ladoMaior) * 2;
  },

  perimetroTrapezio: (ladoA, ladoB, ladoC, ladoD) => {
    return ladoA + ladoB + ladoC + ladoD;
  },
};

module.exports = area;
