import { InstructionStatusUpdate as GenInstructionStatusUpdate } from "src/messages/generated";
import { InstructionStatus } from "src/messages/generated/InstructionStatusUpdate";
export declare class InstructionStatusUpdate implements GenInstructionStatusUpdate {
    message_type: "InstructionStatusUpdate";
    message_id: string;
    instruction_id: string;
    status_type: InstructionStatus;
    timestamp: string;
    constructor(message_id: string, instruction_id: string, status_type: InstructionStatus, timestamp: string);
}
