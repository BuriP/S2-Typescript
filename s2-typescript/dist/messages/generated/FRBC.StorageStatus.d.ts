/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */
/**
 * ID of this message
 */
export type ID = string;
export interface FRBC_StorageStatus {
    message_type: "FRBC.StorageStatus";
    message_id: ID;
    /**
     * Present fill level of the Storage
     */
    present_fill_level: number;
}
