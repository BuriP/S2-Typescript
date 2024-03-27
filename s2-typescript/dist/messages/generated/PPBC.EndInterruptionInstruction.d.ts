/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */
/**
 * ID of this message
 */
export type ID = string;
/**
 * ID of the Instruction. Must be unique in the scope of the Resource Manager, for at least the duration of the session between Resource Manager and CEM.
 */
export type ID1 = string;
/**
 * ID of the PPBC.PowerProfileDefinition of which the PPBC.PowerSequence interruption is being ended by the CEM.
 */
export type ID2 = string;
/**
 * ID of the PPBC.PowerSequnceContainer of which the PPBC.PowerSequence interruption is being ended by the CEM.
 */
export type ID3 = string;
/**
 * ID of the PPBC.PowerSequence for which the CEM wants to end the interruption.
 */
export type ID4 = string;
export interface PPBC_EndInterruptionInstruction {
    message_type: "PPBC.EndInterruptionInstruction";
    message_id: ID;
    id: ID1;
    power_profile_id: ID2;
    sequence_container_id: ID3;
    power_sequence_id: ID4;
    /**
     * Indicates the moment PPBC.PowerSequence interruption shall end. When the specified execution time is in the past, execution must start as soon as possible.
     */
    execution_time: string;
    /**
     * Indicates if this is an instruction during an abnormal condition
     */
    abnormal_condition: boolean;
}
