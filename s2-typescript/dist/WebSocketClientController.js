"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebSocketClientController = void 0;
const ws_1 = require("ws");
class WebSocketClientController {
    constructor(url) {
        this.ws = new ws_1.WebSocket(url);
        this.ws.on('error', console.error);
        this.ws.on('open', () => {
            console.log('Connected');
            this.ws.send('Hello! This is a client');
        });
        this.ws.on('message', message => {
            console.log(`Cliente Received message => ${message}`);
        });
        this.ws.on('close', () => {
            console.log('Disconnected');
        });
    }
    SendMessage(message) {
        console.log(`Sending message => ${message}`);
        this.ws.send(message);
    }
}
exports.WebSocketClientController = WebSocketClientController;
