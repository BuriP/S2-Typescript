/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * ID of the OBMC.OperationMode. Must be unique in the scope of the Resource Manager, for at least the duration of the session between Resource Manager and CEM.
 */
export type ID = string;
/**
 * The power quantity the values refer to
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

export interface OMBC_OperationMode {
  id: ID;
  /**
   * Human readable name/description of the OMBC.OperationMode. This element is only intended for diagnostic purposes and not for HMI applications.
   */
  diagnostic_label?: string;
  /**
   * The power produced or consumed by this operation mode. The start of each PowerRange is associated with an operation_mode_factor of 0, the end is associated with an operation_mode_factor of 1. In the array there must be at least one PowerRange, and at most one PowerRange per CommodityQuantity.
   *
   * @minItems 1
   * @maxItems 10
   */
  power_ranges:
    | [PowerRange]
    | [PowerRange, PowerRange]
    | [PowerRange, PowerRange, PowerRange]
    | [PowerRange, PowerRange, PowerRange, PowerRange]
    | [PowerRange, PowerRange, PowerRange, PowerRange, PowerRange]
    | [PowerRange, PowerRange, PowerRange, PowerRange, PowerRange, PowerRange]
    | [PowerRange, PowerRange, PowerRange, PowerRange, PowerRange, PowerRange, PowerRange]
    | [PowerRange, PowerRange, PowerRange, PowerRange, PowerRange, PowerRange, PowerRange, PowerRange]
    | [PowerRange, PowerRange, PowerRange, PowerRange, PowerRange, PowerRange, PowerRange, PowerRange, PowerRange]
    | [
        PowerRange,
        PowerRange,
        PowerRange,
        PowerRange,
        PowerRange,
        PowerRange,
        PowerRange,
        PowerRange,
        PowerRange,
        PowerRange
      ];
  running_costs?: NumberRange;
  /**
   * Indicates if this OMBC.OperationMode may only be used during an abnormal condition.
   */
  abnormal_condition_only: boolean;
}
export interface PowerRange {
  /**
   * Power value that defines the start of the range.
   */
  start_of_range: number;
  /**
   * Power value that defines the end of the range.
   */
  end_of_range: number;
  commodity_quantity: CommodityQuantity;
}
/**
 * Additional costs per second (e.g. wear, services) associated with this operation mode in the currency defined by the ResourceManagerDetails , excluding the commodity cost. The range is expressing uncertainty and is not linked to the operation_mode_factor.
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
