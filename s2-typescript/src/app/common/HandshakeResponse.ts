import { HandshakeResponse as GenHandshakeResponse } from "../../messages/generated";

export class HandshakeResponse implements GenHandshakeResponse {
    message_type: "HandshakeResponse";
    message_id: string;
    selected_protocol_version: string;

    constructor(message_id: string, selected_protocol_version: string){
        this.message_id = message_id;
        this.selected_protocol_version = selected_protocol_version;
    }
}