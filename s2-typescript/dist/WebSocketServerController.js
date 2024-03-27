"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebSocketServerController = void 0;
const ws_1 = require("ws");
class WebSocketServerController {
    constructor(port = 8000) {
        this.wss = new ws_1.WebSocketServer({ port: port });
        this.wss.on('error', console.error);
        this.wss.on('connection', ws => {
            ws.on('message', message => {
                console.log(`Server Received message => ${message}`);
            });
            ws.send('Hello! This is the server');
        });
    }
    AddMessageOnConection(message) {
        this.wss.on('connection', ws => {
            console.log(message);
            this.BroadcastMessage(message);
        });
    }
    BroadcastMessage(message) {
        let i = 0;
        this.wss.clients.forEach(client => {
            if (client.readyState === 1) {
                client.send(message);
                i++;
                console.log(`Sent message to ${i} clients`);
            }
        });
    }
    ;
}
exports.WebSocketServerController = WebSocketServerController;
