"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebSocketController = void 0;
const ws_1 = require("ws");
class WebSocketController {
    constructor(port = 8000) {
        this.wss = new ws_1.WebSocketServer({ port: port });
        this.wss.on('connection', ws => {
            ws.on('open', () => {
                console.log('Connected');
            });
            ws.on('error', console.error);
            ws.on('message', message => {
                console.log(`Received message => ${message}`);
            });
            ws.send(`You sent Hello!`);
        });
    }
}
exports.WebSocketController = WebSocketController;
