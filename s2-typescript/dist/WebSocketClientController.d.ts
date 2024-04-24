import { WebSocket } from 'ws';
export declare class WebSocketClientController {
    ws: WebSocket;
    constructor(url: string);
    SendMessage(message: string): void;
}
