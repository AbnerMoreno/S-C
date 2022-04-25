import { Pool } from "pg";
import keys from "./keys";
export const db = new Pool(keys.database);
db.connect((err, client, release) => {
    if (err) {
        return console.log('Error en la conexión', err.stack)
    }else{
        return console.log('base de datos conectada')
    }
})