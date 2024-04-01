import { Handshake as GenHandshake, EnergyManagementRole } from "../../messages/generated";
import { ID } from "@schemas";

export class Handshake implements GenHandshake {
    message_type: "Handshake";
    message_id: ID;
    role: EnergyManagementRole;
    supported_protocol_versions?: [string, ...string[]];

    constructor(message_id: ID, role: EnergyManagementRole, supported_protocol_versions?: [string, ...string[]]){
        this.message_id = message_id;
        this.role = role;
        this.supported_protocol_versions = supported_protocol_versions;
    }
}