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
        const listServices = await db.query('DELETE FROM services WHERE id = $1', [id])
      }

    // async serviceProveedorCreate(req:Request, res:Response){
    //   const id = req.params.id;
    //   const {name, description} = req.body;
    //   db.query('INSERT INTO services (idprovider,name, description) VALUES ( $1, $2, $3)', [id, name, description], (err, resp) => {
    //     if (err) {
    //       res.json({err});
    //     } else {
    //       res.json({ status: 1, message: "Servicio creado con exito" });
    //     }
    //   })
    // }

    // async getServices(req:Request, res:Response){
    //   const id = parseInt(req.params.id);
    //   const listServices = await db.query('SELECT * FROM services WHERE idprovider = $1', [id])
    //   res.json(listServices.rows);

    // }
    // async userList(req:Request, res:Response): Promise<void>{
    //    const listUser = await db.query('SELECT id, name, email, phone, city, state FROM users');
    //   res.json(listUser.rows);
    // }


}
export const pedidosController = new PedidosController();
