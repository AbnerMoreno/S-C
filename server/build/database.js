"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const pg_1 = require("pg");
const keys_1 = __importDefault(require("./keys"));
exports.db = new pg_1.Pool(keys_1.default.database);
exports.db.connect((err, client, release) => {
    if (err) {
        return console.log('Error en la conexión', err.stack);
    }
    else {
        return console.log('base de datos conectada');
    }
});
