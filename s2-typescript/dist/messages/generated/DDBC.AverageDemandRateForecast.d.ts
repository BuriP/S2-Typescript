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
 * Duration of the element
 */
export type Duration = number;
export interface DDBC_AverageDemandRateForecast {
    message_type: "DDBC.AverageDemandRateForecast";
    message_id: ID;
    /**
     * Start time of the profile.
     */
    start_time: string;
    /**
     * Elements of the profile. Elements must be placed in chronological order.
     *
     * @minItems 1
     * @maxItems 288
     */
    elements: [DDBC_AverageDemandRateForecastElement, ...DDBC_AverageDemandRateForecastElement[]];
}
export interface DDBC_AverageDemandRateForecastElement {
    duration: Duration;
    /**
     * The upper limit of the range with a 100 % probability that the demand rate is within that range
     */
    demand_rate_upper_limit?: number;
    /**
     * The upper limit of the range with a 95 % probability that the demand rate is within that range
     */
    demand_rate_upper_95PPR?: number;
    /**
     * The upper limit of the range with a 68 % probability that the demand rate is within that range
     */
    demand_rate_upper_68PPR?: number;
    /**
     * The most likely value for the demand rate; the expected increase or decrease of the fill_level per second
     */
    demand_rate_expected: number;
    /**
     * The lower limit of the range with a 68 % probability that the demand rate is within that range
     */
    demand_rate_lower_68PPR?: number;
    /**
     * The lower limit of the range with a 95 % probability that the demand rate is within that range
     */
    demand_rate_lower_95PPR?: number;
    /**
     * The lower limit of the range with a 100 % probability that the demand rate is within that range
     */
    demand_rate_lower_limit?: number;
}