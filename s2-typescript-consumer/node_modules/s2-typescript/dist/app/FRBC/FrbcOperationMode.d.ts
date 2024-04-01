import { FRBC_OperationMode, FRBC_OperationModeElement } from "@schemas";
import { ID } from "@schemas";
export declare class FrbcOperationMode implements FRBC_OperationMode {
    id: ID;
    diagnostic_label?: string;
    elements: [FRBC_OperationModeElement, ...FRBC_OperationModeElement[]];
    abnormal_condition_only: boolean;
    constructor(id: ID, elements: [FRBC_OperationModeElement, ...FRBC_OperationModeElement[]], abnormal_condition_only: boolean);
}
