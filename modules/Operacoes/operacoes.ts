const CORRETOR = 1000000000000;

export function soma(n1: number, n2: number) {
  const result = (n1 * CORRETOR + n2 * CORRETOR) / CORRETOR;

  return result;
}

export function multiplicacao(n1: number, n2: number) {
  const result = (n1 * CORRETOR * n2 * CORRETOR) / (CORRETOR * CORRETOR);

  return result;
}

export function divisao(n1: number, n2: number) {
  const result = (n1 * CORRETOR) / (n2 * CORRETOR);

  return result;
}

export function subtracao(n1: number, n2: number) {
  const result = (n1 * CORRETOR - n2 * CORRETOR) / CORRETOR;

  return result;
}
