"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
const pedidosRoutes_1 = __importDefault(require("./routes/pedidosRoutes"));
const usuarioRoutes_1 = __importDefault(require("./routes/usuarioRoutes"));
const corsOptions = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 200
};
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)(corsOptions));
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use(body_parser_1.default.json({ limit: "50mb" }));
        this.app.use(body_parser_1.default.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
    }
    routes() {
        this.app.get('/', (req, res) => {
            res.send('Hello World');
        });
        this.app.use('/api/product', productRoutes_1.default);
        this.app.use('/api/pedidos', pedidosRoutes_1.default);
        this.app.use('/api/ususario', usuarioRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server corriendo en', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
