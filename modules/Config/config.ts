const fs = require("fs");

module.exports = {
  config: () => {
    fs.writeFile("./guide.txt", "Creator", (err: string) => {
      if (err) {
        throw err;
      }
    });
  },
};
