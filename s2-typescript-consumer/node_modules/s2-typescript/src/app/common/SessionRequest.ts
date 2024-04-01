import { SessionRequest as GenSessionRequest } from "src/messages/generated";
import { SessionRequestType } from "src/messages/generated/SessionRequest";

export class SessionRequest implements GenSessionRequest {
    message_type: "SessionRequest";
    message_id: string;
    request: SessionRequestType;
    diagnostic_label?: string;

    constructor(message_id: string, request: SessionRequestType, diagnostic_label?: string){
        this.message_id = message_id;
        this.request = request;
        this.diagnostic_label = diagnostic_label;
    }
}