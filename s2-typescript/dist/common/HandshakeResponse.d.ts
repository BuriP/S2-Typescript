import { HandshakeResponse as GenHandshakeResponse } from "../messages/generated";
export declare class HandshakeResponse implements GenHandshakeResponse {
    message_type: "HandshakeResponse";
    message_id: string;
    selected_protocol_version: string;
    constructor(message_id: string, selected_protocol_version: string);
}
