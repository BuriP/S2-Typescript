import {init} from 's2-typescript';
import { WebSocketClientController, WebSocketServerController } from 's2-typescript';
import { PowerRange } from 's2-typescript';


function wait(seconds: number): Promise<void> {
    return new Promise<void>((resolve) => {
        setTimeout(() => {
            resolve();
        }, seconds * 1000); // Convert seconds to milliseconds
    });
}

init();

const ws = new WebSocketServerController(8000);
ws.AddMessageOnConection("Un cliente se ha conectado");
const power = new PowerRange(0,100,'ELECTRIC.POWER.L1');
const powerJson = JSON.stringify(power, null, 2);
wait(10).then(() => {
    ws.BroadcastMessage(powerJson);
});
