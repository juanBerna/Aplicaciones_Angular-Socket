import Server from "./classes/server";

const server = new Server();

server.start( () => {
    console.log('corriendo en el puert:',server.port);
});