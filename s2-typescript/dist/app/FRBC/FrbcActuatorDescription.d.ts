import { FRBC_ActuatorDescription } from "@schemas";
import { Commodity, FRBC_OperationMode, Transition, Timer, ID } from "@schemas";
export declare class FrbcActuatorDescription implements FRBC_ActuatorDescription {
    id: ID;
    diagnostic_label?: string;
    supported_commodities: [Commodity] | [Commodity, Commodity] | [Commodity, Commodity, Commodity] | [Commodity, Commodity, Commodity, Commodity];
    operation_modes: [FRBC_OperationMode, ...FRBC_OperationMode[]];
    transitions: Transition[];
    timers: Timer[];
    constructor(id: ID, supported_commodities: [Commodity] | [Commodity, Commodity] | [Commodity, Commodity, Commodity] | [Commodity, Commodity, Commodity, Commodity], operation_modes: [FRBC_OperationMode, ...FRBC_OperationMode[]], transitions: Transition[], timers: Timer[], diagnostic_label?: string);
}
