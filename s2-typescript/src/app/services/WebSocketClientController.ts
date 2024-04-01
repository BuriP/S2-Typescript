import { WebSocket } from 'ws';

export class WebSocketClientController {
    ws: WebSocket;
    constructor(url: string) {
        this.ws = new WebSocket(url);

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

    public SendMessage(message: string) : void {
        console.log(`Sending message => ${message}`);
        this.ws.send(message);
    }
}