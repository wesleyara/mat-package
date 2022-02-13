"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convCM = exports.convM = exports.convKM = void 0;
const class_validator_1 = require("class-validator");
function convKM(unidade, numero) {
    const isUnidade = (0, class_validator_1.isString)(unidade);
    const isNumero = (0, class_validator_1.isNumber)(numero);
    if (!isUnidade)
        return console.error("O parametro unidade é do tipo string");
    if (!isNumero)
        return console.error("O parametro numero é do tipo number");
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
}
exports.convKM = convKM;
function convM(unidade, numero) {
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
}
exports.convM = convM;
function convCM(unidade, numero) {
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
}
exports.convCM = convCM;
