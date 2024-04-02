import { WebSocketClientController } from 's2-typescript';
import { parseMessage } from 's2-typescript';
import { HandshakeResponse } from 's2-typescript';
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

const wsClient = new WebSocketClientController('ws://localhost:8000', parseResponse.bind(this));


wait(10).then(() => {
    console.log(response);
    if(response){
        if(response.message_type === "Handshake"){
            const response = new HandshakeResponse({ message_id: "5", selected_protocol_version: "1.0" });
            wsClient.SendMessage(JSON.stringify(response, null, 2));
        }
    }
});