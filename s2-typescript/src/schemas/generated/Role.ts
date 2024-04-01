/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Role type of the Resource Manager for the given commodity
 */
export type RoleType = "ENERGY_PRODUCER" | "ENERGY_CONSUMER" | "ENERGY_STORAGE";
/**
 * Commodity the role refers to.
 */
export type Commodity = "GAS" | "HEAT" | "ELECTRICITY" | "OIL";

export interface Role {
  role: RoleType;
  commodity: Commodity;
}