module.exports = {
  eqSegGrau: (a: number, b: number, c: number) => {
    const delta = Math.pow(b, 2) - 4 * a * c;

    if (delta < 0) {
      return "A equação não possui resultados reais";
    } else if (delta == 0) {
      const x1 = ((-b + Math.sqrt(delta)) / (2 * a)).toFixed(2);

      return Number(x1);
    } else if (delta > 0) {
      const x1 = ((-b + Math.sqrt(delta)) / (2 * a)).toFixed(2);
      const x2 = ((-b - Math.sqrt(delta)) / (2 * a)).toFixed(2);

      const result = [Number(x1), Number(x2)];

      return result;
    }
  },

  eqSegGrauFra: (a: number, b: number, c: number) => {
    const delta = Math.pow(b, 2) - 4 * a * c;

    if (delta < 0) {
      return "A equação não possui resultados reais";
    } else if (delta == 0) {
      const x1Top = -b + Math.sqrt(delta);
      const x1Bottom = 2 * a;

      const x1 = `${x1Top}/${x1Bottom}`;

      return x1;
    } else if (delta > 0) {
      const x1Top = -b + Math.sqrt(delta);
      const x1Bottom = 2 * a;

      const x1 = `${x1Top}/${x1Bottom}`;

      const x2Top = -b - Math.sqrt(delta);
      const x2Bottom = 2 * a;

      const x2 = `${x2Top}/${x2Bottom}`;

      const result = [x1, x2];
      return result;
    }
  },
};
