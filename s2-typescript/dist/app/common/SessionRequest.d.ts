import { SessionRequest as GenSessionRequest } from "src/messages/generated";
import { SessionRequestType } from "src/messages/generated/SessionRequest";
export declare class SessionRequest implements GenSessionRequest {
    message_type: "SessionRequest";
    message_id: string;
    request: SessionRequestType;
    diagnostic_label?: string;
    constructor(message_id: string, request: SessionRequestType, diagnostic_label?: string);
}
