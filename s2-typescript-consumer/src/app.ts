import { init } from 's2-typescript';
import { WebSocketServerController } from 's2-typescript';
import { Handshake } from 's2-typescript';
import { parseMessage } from 's2-typescript';
import { wait } from './helpers/wait';


let response : any = null;
const parseResponse = (message : string) => {
    try{
        response = parseMessage(message);
    }
    catch(e){
        console.log("ERRRRRROR");
        console.log(e);
    }
}

init();

const ws = new WebSocketServerController(8000, parseResponse.bind(this));
const hs = new Handshake({ message_id: "1", role: "RM" });
const powerJson = JSON.stringify(hs, null, 2);
wait(10).then(() => {
    ws.BroadcastMessage(powerJson);
    wait(5).then(() => {
        console.log(response);
    });
});


