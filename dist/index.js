"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./classes/server"));
const router_1 = __importDefault(require("./routes/router"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
//recordar el comando tsc -w
//despues correr nodemon dist/
const server = new server_1.default();
//BodyParse
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
//corse
server.app.use((0, cors_1.default)({ origin: true, credentials: true }));
//ruta de servicio
server.app.use('/', router_1.default);
server.start(() => {
    console.log('corriendo en:', server.port);
});
