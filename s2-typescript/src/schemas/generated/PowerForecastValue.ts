/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The power quantity the value refers to
 */
export type CommodityQuantity =
  | "ELECTRIC.POWER.L1"
  | "ELECTRIC.POWER.L2"
  | "ELECTRIC.POWER.L3"
  | "ELECTRIC.POWER.3_PHASE_SYMMETRIC"
  | "NATURAL_GAS.FLOW_RATE"
  | "HYDROGEN.FLOW_RATE"
  | "HEAT.TEMPERATURE"
  | "HEAT.FLOW_RATE"
  | "HEAT.THERMAL_POWER"
  | "OIL.FLOW_RATE";

export interface PowerForecastValue {
  /**
   * The upper boundary of the range with 100 % certainty the power value is in it
   */
  value_upper_limit?: number;
  /**
   * The upper boundary of the range with 95 % certainty the power value is in it
   */
  value_upper_95PPR?: number;
  /**
   * The upper boundary of the range with 68 % certainty the power value is in it
   */
  value_upper_68PPR?: number;
  /**
   * The expected power value.
   */
  value_expected: number;
  /**
   * The lower boundary of the range with 68 % certainty the power value is in it
   */
  value_lower_68PPR?: number;
  /**
   * The lower boundary of the range with 95 % certainty the power value is in it
   */
  value_lower_95PPR?: number;
  /**
   * The lower boundary of the range with 100 % certainty the power value is in it
   */
  value_lower_limit?: number;
  commodity_quantity: CommodityQuantity;
}
