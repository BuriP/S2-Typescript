import { WebSocketServer } from 'ws';
export declare class WebSocketServerController {
    wss: WebSocketServer;
    constructor(port?: number);
    AddMessageOnConection(message: string): void;
    BroadcastMessage(message: string): void;
}
