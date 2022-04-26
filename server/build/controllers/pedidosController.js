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
exports.pedidosController = void 0;
const database_1 = require("../database");
class PedidosController {
    pedidoCreate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idproducts, cantidad, } = req.body;
            database_1.db.query('INSERT INTO products (idproducts, cantidad, VALUES ( $1, $2)', [idproducts, cantidad], (err, resp) => {
                if (err) {
                    res.json({ err });
                }
                else {
                    res.json({ status: 1, message: "Producto creado con exito" });
                }
            });
        });
    }
    pedidotGetList(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const list = yield database_1.db.query('SELECT * FROM pedidos');
            res.json(list.rows);
        });
    }
    productDelete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            const listServices = yield database_1.db.query('DELETE FROM pedido WHERE id = $1', [id]);
        });
    }
}
exports.pedidosController = new PedidosController();
