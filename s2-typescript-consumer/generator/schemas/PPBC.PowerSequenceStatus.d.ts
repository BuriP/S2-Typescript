/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * NOT_SCHEDULED: No PPBC.PowerSequence within the PPBC.PowerSequenceContainer is scheduled
 * SCHEDULED: The selected PPBC.PowerSequence is scheduled to be executed in the future
 * EXECUTING: The selected PPBC.PowerSequence is currently being executed
 * INTERRUPTED: The selected PPBC.PowerSequence is being executed, but is currently interrupted and will continue afterwards
 * FINISHED: The selected PPBC.PowerSequence was executed and finished successfully
 * ABORTED: The selected PPBC.PowerSequence was aborted by the device and will not continue
 */
export type PPBC_PowerSequenceStatus =
  | "NOT_SCHEDULED"
  | "SCHEDULED"
  | "EXECUTING"
  | "INTERRUPTED"
  | "FINISHED"
  | "ABORTED";
