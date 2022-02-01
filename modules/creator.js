const fs = require("fs");

const creat = {
  config: () => {
    fs.writeFile("./guide.txt", "Creator", (err) => {
      if (err) {
        throw err;
      }
    });
  },
};

module.exports = creat;
