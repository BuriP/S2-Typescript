/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */
export interface FRBC_LeakageBehaviourElement {
    fill_level_range: NumberRange;
    /**
     * Indicates how fast the momentary fill level will decrease per second due to leakage within the given range of the fill level. A positive value indicates that the fill level decreases over time due to leakage.
     */
    leakage_rate: number;
}
/**
 * The fill level range for which this FRBC.LeakageBehaviourElement applies. The start of the range must be less than the end of the range.
 */
export interface NumberRange {
    /**
     * Number that defines the start of the range
     */
    start_of_range: number;
    /**
     * Number that defines the end of the range
     */
    end_of_range: number;
}
