/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */
/**
 * Identifier of this PEBC.PowerEnvelope. Must be unique in the scope of the Resource Manager, for at least the duration of the session between Resource Manager and CEM.
 */
export type ID = string;
/**
 * Type of power quantity this PEBC.PowerEnvelope applies to
 */
export type CommodityQuantity = "ELECTRIC.POWER.L1" | "ELECTRIC.POWER.L2" | "ELECTRIC.POWER.L3" | "ELECTRIC.POWER.3_PHASE_SYMMETRIC" | "NATURAL_GAS.FLOW_RATE" | "HYDROGEN.FLOW_RATE" | "HEAT.TEMPERATURE" | "HEAT.FLOW_RATE" | "HEAT.THERMAL_POWER" | "OIL.FLOW_RATE";
/**
 * The duration of the element
 */
export type Duration = number;
export interface PEBC_PowerEnvelope {
    id: ID;
    commodity_quantity: CommodityQuantity;
    /**
     * The elements of this PEBC.PowerEnvelope. Shall contain at least one element. Elements must be placed in chronological order.
     *
     * @minItems 1
     * @maxItems 288
     */
    power_envelope_elements: [PEBC_PowerEnvelopeElement, ...PEBC_PowerEnvelopeElement[]];
}
export interface PEBC_PowerEnvelopeElement {
    duration: Duration;
    /**
     * Upper power limit according to the commodity_quantity of the containing PEBC.PowerEnvelope. The lower_limit must be smaller or equal to the upper_limit. The Resource Manager is requested to keep the power values for the given commodity quantity equal to or below the upper_limit. The upper_limit shall be in accordance with the constraints provided by the Resource Manager through any PEBC.AllowedLimitRange with limit_type UPPER_LIMIT.
     */
    upper_limit: number;
    /**
     * Lower power limit according to the commodity_quantity of the containing PEBC.PowerEnvelope. The lower_limit must be smaller or equal to the upper_limit. The Resource Manager is requested to keep the power values for the given commodity quantity equal to or above the lower_limit. The lower_limit shall be in accordance with the constraints provided by the Resource Manager through any PEBC.AllowedLimitRange with limit_type LOWER_LIMIT.
     */
    lower_limit: number;
}
