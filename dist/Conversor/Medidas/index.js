"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convCM = exports.convM = exports.convKM = void 0;
const index_1 = require("../../Validator/index");
function convKM(unidade, numero) {
    (0, index_1.validatorConversorMedidas)(unidade, numero);
    if (unidade === "hm") {
        return numero * 10;
    }
    else if (unidade === "dam") {
        return numero * 100;
    }
    else if (unidade === "m") {
        return numero * 1000;
    }
    else if (unidade === "dm") {
        return numero * 10000;
    }
    else if (unidade === "cm") {
        return numero * 100000;
    }
    else if (unidade === "mm") {
        return numero * 1000000;
    }
    else {
        throw "Informe uma unidade válida. Mais informações em https://github.com/wesleyara/mat-package";
    }
}
exports.convKM = convKM;
function convM(unidade, numero) {
    (0, index_1.validatorConversorMedidas)(unidade, numero);
    if (unidade === "km") {
        return numero / 1000;
    }
    else if (unidade === "hm") {
        return numero / 100;
    }
    else if (unidade === "dam") {
        return numero / 10;
    }
    else if (unidade === "dm") {
        return numero * 10;
    }
    else if (unidade === "cm") {
        return numero * 100;
    }
    else if (unidade === "mm") {
        return numero * 1000;
    }
    else {
        throw "Informe uma unidade válida. Mais informações em https://github.com/wesleyara/mat-package";
    }
}
exports.convM = convM;
function convCM(unidade, numero) {
    (0, index_1.validatorConversorMedidas)(unidade, numero);
    if (unidade === "km") {
        return numero / 100000;
    }
    else if (unidade === "hm") {
        return numero / 10000;
    }
    else if (unidade === "dam") {
        return numero / 1000;
    }
    else if (unidade === "m") {
        return numero / 100;
    }
    else if (unidade === "dm") {
        return numero / 10;
    }
    else if (unidade === "mm") {
        return numero * 10;
    }
    else {
        throw "Informe uma unidade válida. Mais informações em https://github.com/wesleyara/mat-package";
    }
}
exports.convCM = convCM;
