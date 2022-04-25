"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = require("../controllers/productController");
class ProductRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/productCreate', productController_1.productController.productCreate);
        this.router.get('/productGetList', productController_1.productController.productGetList);
    }
}
const productRoutes = new ProductRoutes();
exports.default = productRoutes.router;
