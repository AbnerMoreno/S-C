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
exports.productController = void 0;
const database_1 = require("../database");
class ProductController {
    productCreate(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, description, price, lot } = req.body;
            database_1.db.query('INSERT INTO products (name, description, price) VALUES ( $1, $2, $3)', [name, description, price], (err, resp) => {
                if (err) {
                    res.json({ err });
                }
                else {
                    res.json({ status: 1, message: "Producto creado con exito" });
                }
            });
        });
    }
    productGetList(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const list = yield database_1.db.query('SELECT * FROM products');
            res.json(list.rows);
        });
    }
    productDelete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            const listServices = yield database_1.db.query('DELETE FROM services WHERE id = $1', [id]);
        });
    }
}
exports.productController = new ProductController();
