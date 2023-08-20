"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger = {
    info: (...params) => {
        console.log(...params);
    },
    error: (...params) => {
        console.error(...params);
    }
};
exports.default = logger;
