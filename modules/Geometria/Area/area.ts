module.exports = {
  // Área de figuras geométricas
  areaQuadrado: (lado: number) => {
    return lado * lado;
  },

  areaRetangulo: (lado: number, altura: number) => {
    return lado * altura;
  },

  areaTriangulo: (base: number, altura: number) => {
    return (base * altura) / 2;
  },

  areaCirculo: (raio: number) => {
    return Math.round(Math.PI * Math.pow(raio, 2));
  },

  areaParalelogramo: (base: number, altura: number) => {
    return base * altura;
  },

  areaTrapezio: (baseMaior: number, baseMenor: number, altura: number) => {
    return ((baseMaior + baseMenor) / 2) * altura;
  },
};
