"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class UsuarioRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        // this.router.post('/productCreate',productController.productCreate);
        // this.router.get('/productGetList',productController.productGetList);
    }
}
const usuarioRoutes = new UsuarioRoutes();
exports.default = usuarioRoutes.router;
