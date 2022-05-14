import mat from "..";

describe("Operações básicas", () => {
  test("Soma", () => {
    expect(mat.soma(1, 2)).toEqual(3);
  });

  test("Subtração", () => {
    expect(mat.subtracao(2, 1)).toEqual(1);
  });

  test("Multiplicação", () => {
    expect(mat.multiplicacao(2, 2)).toEqual(4);
  });

  test("Divisão", () => {
    expect(mat.divisao(4, 2)).toEqual(2);
  });

  test("Divisão por zero", () => {
    expect(() => mat.divisao(4, 0)).toThrow();
  });
});

describe("Conversor de medidas", () => {
  test("Convertendo km", () => {
    expect(mat.convKM("m", 1)).toEqual(1000);
  });

  test("Convertendo m", () => {
    expect(mat.convM("cm", 1)).toEqual(100);
  });

  test("Convertendo cm", () => {
    expect(mat.convCM("m", 1)).toEqual(0.01);
  });
});
