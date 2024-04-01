"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Handshake = void 0;
class Handshake {
    constructor(message_id, role, supported_protocol_versions) {
        this.message_id = message_id;
        this.role = role;
        this.supported_protocol_versions = supported_protocol_versions;
    }
}
exports.Handshake = Handshake;
