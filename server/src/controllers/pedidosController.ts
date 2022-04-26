import { Request, Response } from "express";
import { db } from "../database";

class PedidosController{

    
    async pedidoCreate (req: Request, res: Response){
        const {idproducts, cantidad,} = req.body;
        db.query('INSERT INTO products (idproducts, cantidad, VALUES ( $1, $2)', [idproducts,cantidad], (err, resp) => {
          if (err) {
            res.json({err});
          } else {
            res.json({ status: 1, message:"Producto creado con exito" });
          }
        });
      }

    async pedidotGetList(req:Request, res:Response): Promise<void>{
        const list = await db.query('SELECT * FROM pedidos');
        res.json(list.rows);
     }

    async productDelete (req:Request, res:Response){
        const id = parseInt(req.params.id);
        const listServices = await db.query('DELETE FROM pedido WHERE id = $1', [id])
      }

}
export const pedidosController = new PedidosController();
