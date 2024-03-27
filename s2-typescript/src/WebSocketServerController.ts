import WebSocket, { WebSocketServer } from 'ws';

export class WebSocketServerController {
    wss: WebSocketServer;
    constructor(port: number = 8000) {
        this.wss = new WebSocketServer({ port: port });

        this.wss.on('error', console.error);

        this.wss.on('connection', ws => {
            ws.on('message', message => {
                console.log(`Server Received message => ${message}`);
            });
            ws.send('Hello! This is the server');
        });
    }

    public AddMessageOnConection(message: string) : void {
        this.wss.on('connection', ws => {
            console.log(message);
            this.BroadcastMessage(message);
        });
    }
    
    public BroadcastMessage(message: string) : void {
        let i = 0;
        this.wss.clients.forEach(client => {
            if (client.readyState === 1) {
                client.send(message);
                i++;
                console.log(`Sent message to ${i} clients`);
            }
        });
    };
}