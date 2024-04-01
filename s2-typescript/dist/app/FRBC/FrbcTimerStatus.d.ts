import { FRBC_TimerStatus } from "src/messages/generated";
import { ID } from "@schemas";
export declare class FrbcTimerStatus implements FRBC_TimerStatus {
    message_type: "FRBC.TimerStatus";
    message_id: ID;
    timer_id: ID;
    actuator_id: ID;
    finished_at: string;
    constructor(message_id: ID, timer_id: ID, actuator_id: ID, finished_at: string);
}
