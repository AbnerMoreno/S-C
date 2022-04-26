import bodyParser from 'body-parser';

import express, { application, Application } from "express";

import morgan from "morgan";
import cors from "cors";

import ProductRoutes from "./routes/productRoutes";
import PedidosRoutes from "./routes/pedidosRoutes";
import UsuarioRoutes from "./routes/usuarioRoutes";

const corsOptions={
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 200
}

class Server {
    public app: Application;
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors(corsOptions));
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(bodyParser.json({ limit: "50mb" }));
        this.app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))
    }

    routes(): void {
        this.app.get('/', (req, res) => {
            res.send('Hello World');
        });

        this.app.use('/api/product', ProductRoutes);
        this.app.use('/api/pedidos',PedidosRoutes);
        this.app.use('/api/ususario',UsuarioRoutes);
    }


    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server corriendo en', this.app.get('port'));
        })
    }
}

const server = new Server();
server.start();
