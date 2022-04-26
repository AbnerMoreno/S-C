import { Request, Response } from "express";
import { db } from "../database";

class UsuarioController{

    async login(req: Request, res: Response){
        const { nombre, pass } = req.body;
            const sql = 'SELECT id, role, pass FROM users WHERE name = $1';
            const usuario = await db.query(sql, [nombre]);
            if (usuario.rows.length > 0) {
                if(pass != usuario.rows[0].pass){
                    res.json({ data: usuario.rows[0].role, id: usuario.rows[0].id, status: 1});
                }else{
                    res.json({ message: "Contraseña incorrecta", status: 0});
                }
            } else {
                res.json({ message: "Este usuario no esta registrado", status: 0 })
            }
    }


}
export const usuarioController = new UsuarioController();
