/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * ID of this message
 */
export type ID = string;

export interface FRBC_LeakageBehaviour {
  message_type: "FRBC.LeakageBehaviour";
  message_id: ID;
  /**
   * Moment this FRBC.LeakageBehaviour starts to be valid. If the FRBC.LeakageBehaviour is immediately valid, the DateTimeStamp should be now or in the past.
   */
  valid_from: string;
  /**
   * List of elements that model the leakage behaviour of the buffer. The fill_level_ranges of the elements must be contiguous.
   *
   * @minItems 1
   * @maxItems 288
   */
  elements: [FRBC_LeakageBehaviourElement, ...FRBC_LeakageBehaviourElement[]];
}
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
