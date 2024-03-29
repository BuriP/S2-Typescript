/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */
/**
 * The power quantity the value refers to
 */
export type CommodityQuantity = "ELECTRIC.POWER.L1" | "ELECTRIC.POWER.L2" | "ELECTRIC.POWER.L3" | "ELECTRIC.POWER.3_PHASE_SYMMETRIC" | "NATURAL_GAS.FLOW_RATE" | "HYDROGEN.FLOW_RATE" | "HEAT.TEMPERATURE" | "HEAT.FLOW_RATE" | "HEAT.THERMAL_POWER" | "OIL.FLOW_RATE";
export interface PowerValue {
    commodity_quantity: CommodityQuantity;
    /**
     * Power value expressed in the unit associated with the CommodityQuantity
     */
    value: number;
}
