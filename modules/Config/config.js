const fs = require("fs");

const create = {
  config: () => {
    fs.writeFile("./guide.txt", "Creator", (err) => {
      if (err) {
        throw err;
      }
    });
  },
};

module.exports = create;
