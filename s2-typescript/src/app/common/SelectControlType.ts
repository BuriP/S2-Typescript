import { SelectControlType as GenSelectControlType } from "src/messages/generated";
import { ControlType } from "src/messages/generated/SelectControlType";

export class SelectControlType implements GenSelectControlType {
    message_type: "SelectControlType";
    message_id: string;
    control_type: ControlType;

    constructor(message_id: string, control_type: ControlType){
        this.message_id = message_id;
        this.control_type = control_type;
    }
}