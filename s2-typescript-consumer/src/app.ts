import { NumberRange, init } from 's2-typescript';
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
const nr = new NumberRange({ start_of_range: 0, end_of_range: 100 });

console.log(hs);
console.log(nr);

const powerJson = JSON.stringify(hs, null, 2);
const numberJson = JSON.stringify(nr, null, 2);

console.log(powerJson);
console.log(numberJson);

wait(10).then(() => {
    ws.BroadcastMessage(powerJson);
    ws.BroadcastMessage(numberJson);
    wait(5).then(() => {
        console.log(response);
    });
});




