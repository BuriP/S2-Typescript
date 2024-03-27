import { Handshake as GenHandshake, EnergyManagementRole } from "../messages/generated";
export declare class Handshake implements GenHandshake {
    message_type: "Handshake";
    message_id: string;
    role: EnergyManagementRole;
    supported_protocol_versions?: [string, ...string[]];
    constructor(message_id: string, role: EnergyManagementRole, supported_protocol_versions?: [string, ...string[]]);
}
