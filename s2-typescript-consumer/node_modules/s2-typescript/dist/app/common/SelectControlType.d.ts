import { SelectControlType as GenSelectControlType } from "src/messages/generated";
import { ControlType } from "src/messages/generated/SelectControlType";
export declare class SelectControlType implements GenSelectControlType {
    message_type: "SelectControlType";
    message_id: string;
    control_type: ControlType;
    constructor(message_id: string, control_type: ControlType);
}
