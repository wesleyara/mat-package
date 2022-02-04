module.exports = {
  convKM: (unidade: string, numero: number) => {
    if (unidade === "hm") {
      return numero * 10;
    } else if (unidade === "dam") {
      return numero * 100;
    } else if (unidade === "m") {
      return numero * 1000;
    } else if (unidade === "dm") {
      return numero * 10000;
    } else if (unidade === "cm") {
      return numero * 100000;
    } else if (unidade === "mm") {
      return numero * 1000000;
    }
  },

  convM: (unidade: string, numero: number) => {
    if (unidade === "km") {
      return numero / 1000;
    } else if (unidade === "hm") {
      return numero / 100;
    } else if (unidade === "dam") {
      return numero / 10;
    } else if (unidade === "dm") {
      return numero * 10;
    } else if (unidade === "cm") {
      return numero * 100;
    } else if (unidade === "mm") {
      return numero * 1000;
    }
  },

  convCM: (unidade: string, numero: number) => {
    if (unidade === "km") {
      return numero / 100000;
    } else if (unidade === "hm") {
      return numero / 10000;
    } else if (unidade === "dam") {
      return numero / 1000;
    } else if (unidade === "m") {
      return numero / 100;
    } else if (unidade === "dm") {
      return numero / 10;
    } else if (unidade === "mm") {
      return numero * 10;
    }
  },
};
