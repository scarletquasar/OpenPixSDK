"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sources = void 0;
var sources = {
  "production": {
    "baseUrl": "https://api.openpix.com.br",
    "charge": "/api/openpix/v1/charge"
  },
  "tests": {
    "baseUrl": "https://jsonplaceholder.typicode.com",
    "charge": "/todos/1"
  }
};
exports.sources = sources;