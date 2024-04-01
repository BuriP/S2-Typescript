"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandshakeResponse = void 0;
class HandshakeResponse {
    constructor(message_id, selected_protocol_version) {
        this.message_id = message_id;
        this.selected_protocol_version = selected_protocol_version;
    }
}
exports.HandshakeResponse = HandshakeResponse;
