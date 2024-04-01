/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The duration of the element.
 */
export type Duration = number;

export interface FRBC_FillLevelTargetProfileElement {
  duration: Duration;
  fill_level_range: NumberRange;
}
/**
 * The target range in which the fill_level must be for the time period during which the element is active. The start of the range must be smaller or equal to the end of the range. The CEM must take best-effort actions to proactively achieve this target.
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
