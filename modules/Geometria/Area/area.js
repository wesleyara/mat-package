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
};

module.exports = area;
