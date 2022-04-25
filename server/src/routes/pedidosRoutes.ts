import { Router } from "express";
import { pedidosController } from "../controllers/pedidosController"

class PedidosRoutes {
    public router: Router = Router();
    constructor(){
        this.config();
    }
    config():void{
        this.router.post('/productCreate',pedidosController.pedidoCreate);
        this.router.get('/productGetList',pedidosController.pedidotGetList);
    }
}
const  pedidosRoutes = new  PedidosRoutes();
export default pedidosRoutes.router