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
 * ID of the OBMC.OperationMode. Must be unique in the scope of the Resource Manager, for at least the duration of the session between Resource Manager and CEM.
 */
export type ID1 = string;
/**
 * The power quantity the values refer to
 */
export type CommodityQuantity = "ELECTRIC.POWER.L1" | "ELECTRIC.POWER.L2" | "ELECTRIC.POWER.L3" | "ELECTRIC.POWER.3_PHASE_SYMMETRIC" | "NATURAL_GAS.FLOW_RATE" | "HYDROGEN.FLOW_RATE" | "HEAT.TEMPERATURE" | "HEAT.FLOW_RATE" | "HEAT.THERMAL_POWER" | "OIL.FLOW_RATE";
/**
 * ID of the Transition. Must be unique in the scope of the OMBC.SystemDescription, FRBC.ActuatorDescription or DDBC.ActuatorDescription in which it is used.
 */
export type ID2 = string;
/**
 * ID of the OperationMode (exact type differs per ControlType) that should be switched from.
 */
export type ID3 = string;
/**
 * ID of the OperationMode (exact type differs per ControlType) that will be switched to.
 */
export type ID4 = string;
/**
 * An identifier expressed as a UUID
 */
export type ID5 = string;
/**
 * Indicates the time between the initiation of this Transition, and the time at which the device behaves according to the Operation Mode which is defined in the ‘to’ data element. When no value is provided it is assumed the transition duration is negligible.
 */
export type Duration = number;
/**
 * An identifier expressed as a UUID
 */
export type ID6 = string;
/**
 * The time it takes for the Timer to finish after it has been started
 */
export type Duration1 = number;
export interface OMBC_SystemDescription {
    message_type: "OMBC.SystemDescription";
    message_id: ID;
    /**
     * Moment this OMBC.SystemDescription starts to be valid. If the system description is immediately valid, the DateTimeStamp should be now or in the past.
     */
    valid_from: string;
    /**
     * OMBC.OperationModes available for the CEM in order to coordinate the device behaviour.
     *
     * @minItems 1
     * @maxItems 100
     */
    operation_modes: [OMBC_OperationMode, ...OMBC_OperationMode[]];
    /**
     * Possible transitions to switch from one OMBC.OperationMode to another.
     *
     * @minItems 0
     * @maxItems 1000
     */
    transitions: Transition[];
    /**
     * Timers that control when certain transitions can be made.
     *
     * @minItems 0
     * @maxItems 1000
     */
    timers: Timer[];
}
export interface OMBC_OperationMode {
    id: ID1;
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
export interface Transition {
    id: ID2;
    from: ID3;
    to: ID4;
    /**
     * List of IDs of Timers that will be (re)started when this transition is initiated
     *
     * @minItems 0
     * @maxItems 1000
     */
    start_timers: ID5[];
    /**
     * List of IDs of Timers that block this Transition from initiating while at least one of these Timers is not yet finished
     *
     * @minItems 0
     * @maxItems 1000
     */
    blocking_timers: ID5[];
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
    id: ID6;
    /**
     * Human readable name/description of the Timer. This element is only intended for diagnostic purposes and not for HMI applications.
     */
    diagnostic_label?: string;
    duration: Duration1;
}
