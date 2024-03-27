import { WebSocketClientController } from 's2-typescript';

const wsClient = new WebSocketClientController('ws://localhost:8000');

function wait(seconds: number): Promise<void> {
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            resolve();
        }, seconds * 1000); // Convert seconds to milliseconds
    });
}

wait(5).then(() => {
    wsClient.SendMessage("Cliente enviando mensaje");
});