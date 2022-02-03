"use strict";
const fs = require("fs");
module.exports = {
    config: () => {
        fs.writeFile("./guide.txt", "Creator", (err) => {
            if (err) {
                throw err;
            }
        });
    },
};
