"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuarioController = void 0;
const database_1 = require("../database");
class UsuarioController {
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nombre, pass } = req.body;
            const sql = 'SELECT id, role, pass FROM users WHERE name = $1';
            const usuario = yield database_1.db.query(sql, [nombre]);
            if (usuario.rows.length > 0) {
                if (pass != usuario.rows[0].pass) {
                    res.json({ data: usuario.rows[0].role, id: usuario.rows[0].id, status: 1 });
                }
                else {
                    res.json({ message: "Contraseña incorrecta", status: 0 });
                }
            }
            else {
                res.json({ message: "Este usuario no esta registrado", status: 0 });
            }
        });
    }
}
exports.usuarioController = new UsuarioController();
