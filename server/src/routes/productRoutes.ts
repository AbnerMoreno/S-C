import { Router } from "express";
import { productController } from "../controllers/productController"

class ProductRoutes {
    public router: Router = Router();
    constructor(){
        this.config();
    }
    config():void{
        this.router.post('/productCreate',productController.productCreate);
        this.router.get('/productGetList',productController.productGetList);
    }
}
const productRoutes = new ProductRoutes();
export default productRoutes.router