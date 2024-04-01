import { Handshake as GenHandshake, EnergyManagementRole } from "../../messages/generated";

export class Handshake implements GenHandshake {
    message_type: "Handshake";
    message_id: string;
    role: EnergyManagementRole;
    supported_protocol_versions?: [string, ...string[]];

    constructor(message_id: string, role: EnergyManagementRole, supported_protocol_versions?: [string, ...string[]]){
        this.message_id = message_id;
        this.role = role;
        this.supported_protocol_versions = supported_protocol_versions;
    }
}