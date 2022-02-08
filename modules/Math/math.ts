export function numeroEuler() {
  return Math.E;
}

export function exponencial(numero: number) {
  return Math.exp(numero);
}

export function raizQuadrada(numero: number) {
  return Math.sqrt(numero);
}

export function modulo(numero: number) {
  return Math.abs(numero);
}

export function raizCubica(numero: number) {
  return Math.cbrt(numero);
}

export function potencia(numero: number, expoente: number) {
  return Math.pow(numero, expoente);
}

export function numeroAleatorio(valorMaximo: number) {
  return Math.random() * (valorMaximo + 1);
}

export function arredondar(numero: number) {
  return Math.round(numero);
}
