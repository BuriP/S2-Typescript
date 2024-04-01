import { FRBC_ActuatorStatus } from "src/messages/generated";
import { ID } from "src/messages/generated/FRBC.ActuatorStatus";
export declare class FrbcActuatorStatus implements FRBC_ActuatorStatus {
    message_type: "FRBC.ActuatorStatus";
    message_id: ID;
    actuator_id: ID;
    active_operation_mode_id: ID;
    operation_mode_factor: number;
    previous_operation_mode_id?: ID;
    transition_timestamp?: string;
    constructor(message_id: ID, actuator_id: ID, active_operation_mode_id: ID, operation_mode_factor: number, previous_operation_mode_id?: ID, transition_timestamp?: string);
}
