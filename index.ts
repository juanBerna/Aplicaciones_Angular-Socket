import Server from "./classes/server";
import router from "./routes/router";

import bodyParser from "body-parser";
import cors from 'cors'

//recordar el comando tsc -w
//despues correr nodemon dist/

const server = new Server();

//BodyParse
server.app.use(bodyParser.urlencoded({extended:true}));
server.app.use(bodyParser.json());

//corse
server.app.use(cors({origin: true, credentials: true}))

//ruta de servicio
server.app.use('/', router);

server.start( () => {
    console.log('corriendo en:',server.port);
});