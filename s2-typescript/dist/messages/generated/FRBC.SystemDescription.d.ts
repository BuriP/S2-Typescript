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
 * ID of the Actuator. Must be unique in the scope of the Resource Manager, for at least the duration of the session between Resource Manager and CEM.
 */
export type ID1 = string;
/**
 * GAS: Identifier for Commodity GAS
 * HEAT: Identifier for Commodity HEAT
 * ELECTRICITY: Identifier for Commodity ELECTRICITY
 * OIL: Identifier for Commodity OIL
 */
export type Commodity = "GAS" | "HEAT" | "ELECTRICITY" | "OIL";
/**
 * ID of the FRBC.OperationMode. Must be unique in the scope of the FRBC.ActuatorDescription in which it is used.
 */
export type ID2 = string;
/**
 * The power quantity the values refer to
 */
export type CommodityQuantity = "ELECTRIC.POWER.L1" | "ELECTRIC.POWER.L2" | "ELECTRIC.POWER.L3" | "ELECTRIC.POWER.3_PHASE_SYMMETRIC" | "NATURAL_GAS.FLOW_RATE" | "HYDROGEN.FLOW_RATE" | "HEAT.TEMPERATURE" | "HEAT.FLOW_RATE" | "HEAT.THERMAL_POWER" | "OIL.FLOW_RATE";
/**
 * ID of the Transition. Must be unique in the scope of the OMBC.SystemDescription, FRBC.ActuatorDescription or DDBC.ActuatorDescription in which it is used.
 */
export type ID3 = string;
/**
 * ID of the OperationMode (exact type differs per ControlType) that should be switched from.
 */
export type ID4 = string;
/**
 * ID of the OperationMode (exact type differs per ControlType) that will be switched to.
 */
export type ID5 = string;
/**
 * An identifier expressed as a UUID
 */
export type ID6 = string;
/**
 * Indicates the time between the initiation of this Transition, and the time at which the device behaves according to the Operation Mode which is defined in the ‘to’ data element. When no value is provided it is assumed the transition duration is negligible.
 */
export type Duration = number;
/**
 * An identifier expressed as a UUID
 */
export type ID7 = string;
/**
 * The time it takes for the Timer to finish after it has been started
 */
export type Duration1 = number;
export interface FRBC_SystemDescription {
    message_type: "FRBC.SystemDescription";
    message_id: ID;
    /**
     * Moment this FRBC.SystemDescription starts to be valid. If the system description is immediately valid, the DateTimeStamp should be now or in the past.
     */
    valid_from: string;
    /**
     * Details of all Actuators.
     *
     * @minItems 1
     * @maxItems 10
     */
    actuators: [FRBC_ActuatorDescription] | [FRBC_ActuatorDescription, FRBC_ActuatorDescription] | [FRBC_ActuatorDescription, FRBC_ActuatorDescription, FRBC_ActuatorDescription] | [FRBC_ActuatorDescription, FRBC_ActuatorDescription, FRBC_ActuatorDescription, FRBC_ActuatorDescription] | [
        FRBC_ActuatorDescription,
        FRBC_ActuatorDescription,
        FRBC_ActuatorDescription,
        FRBC_ActuatorDescription,
        FRBC_ActuatorDescription
    ] | [
        FRBC_ActuatorDescription,
        FRBC_ActuatorDescription,
        FRBC_ActuatorDescription,
        FRBC_ActuatorDescription,
        FRBC_ActuatorDescription,
        FRBC_ActuatorDescription
    ] | [
        FRBC_ActuatorDescription,
        FRBC_ActuatorDescription,
        FRBC_ActuatorDescription,
        FRBC_ActuatorDescription,
        FRBC_ActuatorDescription,
        FRBC_ActuatorDescription,
        FRBC_ActuatorDescription
    ] | [
        FRBC_ActuatorDescription,
        FRBC_ActuatorDescription,
        FRBC_ActuatorDescription,
        FRBC_ActuatorDescription,
        FRBC_ActuatorDescription,
        FRBC_ActuatorDescription,
        FRBC_ActuatorDescription,
        FRBC_ActuatorDescription
    ] | [
        FRBC_ActuatorDescription,
        FRBC_ActuatorDescription,
        FRBC_ActuatorDescription,
        FRBC_ActuatorDescription,
        FRBC_ActuatorDescription,
        FRBC_ActuatorDescription,
        FRBC_ActuatorDescription,
        FRBC_ActuatorDescription,
        FRBC_ActuatorDescription
    ] | [
        FRBC_ActuatorDescription,
        FRBC_ActuatorDescription,
        FRBC_ActuatorDescription,
        FRBC_ActuatorDescription,
        FRBC_ActuatorDescription,
        FRBC_ActuatorDescription,
        FRBC_ActuatorDescription,
        FRBC_ActuatorDescription,
        FRBC_ActuatorDescription,
        FRBC_ActuatorDescription
    ];
    storage: FRBC_StorageDescription;
}
export interface FRBC_ActuatorDescription {
    id: ID1;
    /**
     * Human readable name/description for the actuator. This element is only intended for diagnostic purposes and not for HMI applications.
     */
    diagnostic_label?: string;
    /**
     * List of all supported Commodities.
     *
     * @minItems 1
     * @maxItems 4
     */
    supported_commodities: [Commodity] | [Commodity, Commodity] | [Commodity, Commodity, Commodity] | [Commodity, Commodity, Commodity, Commodity];
    /**
     * Provided FRBC.OperationModes associated with this actuator
     *
     * @minItems 1
     * @maxItems 100
     */
    operation_modes: [FRBC_OperationMode, ...FRBC_OperationMode[]];
    /**
     * Possible transitions between FRBC.OperationModes associated with this actuator.
     *
     * @minItems 0
     * @maxItems 1000
     */
    transitions: Transition[];
    /**
     * List of Timers associated with this actuator
     *
     * @minItems 0
     * @maxItems 1000
     */
    timers: Timer[];
}
export interface FRBC_OperationMode {
    id: ID2;
    /**
     * Human readable name/description of the FRBC.OperationMode. This element is only intended for diagnostic purposes and not for HMI applications.
     */
    diagnostic_label?: string;
    /**
     * List of FRBC.OperationModeElements, which describe the properties of this FRBC.OperationMode depending on the fill_level. The fill_level_ranges of the items in the Array must be contiguous.
     *
     * @minItems 1
     * @maxItems 100
     */
    elements: [FRBC_OperationModeElement, ...FRBC_OperationModeElement[]];
    /**
     * Indicates if this FRBC.OperationMode may only be used during an abnormal condition
     */
    abnormal_condition_only: boolean;
}
export interface FRBC_OperationModeElement {
    fill_level_range: NumberRange;
    fill_rate: NumberRange1;
    /**
     * The power produced or consumed by this operation mode. The start of each PowerRange is associated with an operation_mode_factor of 0, the end is associated with an operation_mode_factor of 1. In the array there must be at least one PowerRange, and at most one PowerRange per CommodityQuantity.
     *
     * @minItems 1
     * @maxItems 10
     */
    power_ranges: [PowerRange] | [PowerRange, PowerRange] | [PowerRange, PowerRange, PowerRange] | [PowerRange, PowerRange, PowerRange, PowerRange] | [PowerRange, PowerRange, PowerRange, PowerRange, PowerRange] | [PowerRange, PowerRange, PowerRange, PowerRange, PowerRange, PowerRange] | [PowerRange, PowerRange, PowerRange, PowerRange, PowerRange, PowerRange, PowerRange] | [PowerRange, PowerRange, PowerRange, PowerRange, PowerRange, PowerRange, PowerRange, PowerRange] | [PowerRange, PowerRange, PowerRange, PowerRange, PowerRange, PowerRange, PowerRange, PowerRange, PowerRange] | [
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
    running_costs?: NumberRange2;
}
/**
 * The range of the fill level for which this FRBC.OperationModeElement applies. The start of the NumberRange shall be smaller than the end of the NumberRange.
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
/**
 * Indicates the change in fill_level per second. The lower_boundary of the NumberRange is associated with an operation_mode_factor of 0, the upper_boundary is associated with an operation_mode_factor of 1.
 */
export interface NumberRange1 {
    /**
     * Number that defines the start of the range
     */
    start_of_range: number;
    /**
     * Number that defines the end of the range
     */
    end_of_range: number;
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
 * Additional costs per second (e.g. wear, services) associated with this operation mode in the currency defined by the ResourceManagerDetails, excluding the commodity cost. The range is expressing uncertainty and is not linked to the operation_mode_factor.
 */
export interface NumberRange2 {
    /**
     * Number that defines the start of the range
     */
    start_of_range: number;
    /**
     * Number that defines the end of the range
     */
    end_of_range: number;
}
export interface Transition {
    id: ID3;
    from: ID4;
    to: ID5;
    /**
     * List of IDs of Timers that will be (re)started when this transition is initiated
     *
     * @minItems 0
     * @maxItems 1000
     */
    start_timers: ID6[];
    /**
     * List of IDs of Timers that block this Transition from initiating while at least one of these Timers is not yet finished
     *
     * @minItems 0
     * @maxItems 1000
     */
    blocking_timers: ID6[];
    /**
     * Absolute costs for going through this Transition in the currency as described in the ResourceManagerDetails.
     */
    transition_costs?: number;
    transition_duration?: Duration;
    /**
     * Indicates if this Transition may only be used during an abnormal condition (see Clause )
     */
    abnormal_condition_only: boolean;
}
export interface Timer {
    id: ID7;
    /**
     * Human readable name/description of the Timer. This element is only intended for diagnostic purposes and not for HMI applications.
     */
    diagnostic_label?: string;
    duration: Duration1;
}
/**
 * Details of the storage.
 */
export interface FRBC_StorageDescription {
    /**
     * Human readable name/description of the storage (e.g. hot water buffer or battery). This element is only intended for diagnostic purposes and not for HMI applications.
     */
    diagnostic_label?: string;
    /**
     * Human readable description of the (physical) units associated with the fill_level (e.g. degrees Celsius or percentage state of charge). This element is only intended for diagnostic purposes and not for HMI applications.
     */
    fill_level_label?: string;
    /**
     * Indicates whether the Storage could provide details of power leakage behaviour through the FRBC.LeakageBehaviour.
     */
    provides_leakage_behaviour: boolean;
    /**
     * Indicates whether the Storage could provide a target profile for the fill level through the FRBC.FillLevelTargetProfile.
     */
    provides_fill_level_target_profile: boolean;
    /**
     * Indicates whether the Storage could provide a UsageForecast through the FRBC.UsageForecast.
     */
    provides_usage_forecast: boolean;
    fill_level_range: NumberRange3;
}
/**
 * The range in which the fill_level should remain. It is expected of the CEM to keep the fill_level within this range. When the fill_level is not within this range, the Resource Manager can ignore instructions from the CEM (except during abnormal conditions).
 */
export interface NumberRange3 {
    /**
     * Number that defines the start of the range
     */
    start_of_range: number;
    /**
     * Number that defines the end of the range
     */
    end_of_range: number;
}