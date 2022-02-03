"use strict";
module.exports = {
    media: (array) => {
        let soma = 0;
        const tamanho = array.length;
        for (let i = 0; i < array.length; i++) {
            soma += array[i];
        }
        const result = Number((soma / tamanho).toFixed(2));
        return result;
    },
};
