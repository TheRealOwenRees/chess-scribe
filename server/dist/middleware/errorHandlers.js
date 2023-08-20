"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverError = exports.unknownEndpoint = void 0;
const unknownEndpoint = (request, response) => {
    response.status(404).json({ type: 'error', message: 'unknown endpoint' });
};
exports.unknownEndpoint = unknownEndpoint;
const serverError = (request, response) => {
    response.status(500).json({ type: 'error', message: 'server error' });
};
exports.serverError = serverError;
