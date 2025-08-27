"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
(0, fs_1.readFile)("../Doc/sallySample.txt", 'utf8', (error, data) => {
    if (error) {
        console.error("error reading file", error.message);
    }
    console.log(data);
});
