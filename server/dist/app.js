"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const errorHandlers_1 = require("./middleware/errorHandlers");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(errorHandlers_1.unknownEndpoint);
app.use(errorHandlers_1.serverError);
exports.default = app;
