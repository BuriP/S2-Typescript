import { WebSocketServer } from 'ws';
export declare class WebSocketController {
    wss: WebSocketServer;
    constructor(port?: number);
}
