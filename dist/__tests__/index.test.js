"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require(".."));
describe("Operações básicas", () => {
    test("Soma", () => {
        expect(__1.default.soma(1, 2)).toEqual(3);
    });
    test("Subtração", () => {
        expect(__1.default.subtracao(2, 1)).toEqual(1);
    });
    test("Multiplicação", () => {
        expect(__1.default.multiplicacao(2, 2)).toEqual(4);
    });
    test("Divisão", () => {
        expect(__1.default.divisao(4, 2)).toEqual(2);
    });
    test("Divisão por zero", () => {
        expect(() => __1.default.divisao(4, 0)).toThrow();
    });
});
describe("Conversor de medidas", () => {
    test("Convertendo km", () => {
        expect(__1.default.convKM("m", 1)).toEqual(1000);
    });
    test("Convertendo m", () => {
        expect(__1.default.convM("cm", 1)).toEqual(100);
    });
    test("Convertendo cm", () => {
        expect(__1.default.convCM("m", 1)).toEqual(0.01);
    });
});
