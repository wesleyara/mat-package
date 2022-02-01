module.exports = {
  // Funções math
  exponencial: () => {
    return Math.E;
  },

  raizQuadrada: (numero: number) => {
    return Math.sqrt(numero);
  },

  modulo: (numero: number) => {
    return Math.abs(numero);
  },

  raizCubica: (numero: number) => {
    return Math.cbrt(numero);
  },

  potencia: (numero: number, expoente: number) => {
    return Math.pow(numero, expoente);
  },

  numeroAleatorio: (valorMaximo: number) => {
    return Math.random() * (valorMaximo + 1);
  },

  arredondar: (numero: number) => {
    return Math.round(numero);
  },
};
