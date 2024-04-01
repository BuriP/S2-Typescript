import { RevokeObject as GenRevokeObject } from "src/messages/generated";
import { RevokableObjects } from "src/messages/generated/RevokeObject";
export declare class RevokeObject implements GenRevokeObject {
    message_type: "RevokeObject";
    message_id: string;
    object_type: RevokableObjects;
    object_id: string;
    constructor(message_id: string, object_type: RevokableObjects, object_id: string);
}
