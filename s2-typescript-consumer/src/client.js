"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var s2_typescript_1 = require("s2-typescript");
var s2_typescript_2 = require("s2-typescript");
var s2_typescript_3 = require("s2-typescript");
var wait_1 = require("./helpers/wait");
var response = null;
var parseResponse = function (message) {
    try {
        response = (0, s2_typescript_2.parseMessage)(message);
    }
    catch (e) {
        console.log("ERRRRRROR");
        console.log(e);
    }
};
var wsClient = new s2_typescript_1.WebSocketClientController('ws://localhost:8000', parseResponse.bind(this));
(0, wait_1.wait)(10).then(function () {
    console.log(response);
    if (response) {
        if (response.message_type === "Handshake") {
            var response_1 = new s2_typescript_3.HandshakeResponse({ message_id: "5", selected_protocol_version: "1.0" });
            wsClient.SendMessage(JSON.stringify(response_1, null, 2));
        }
    }
});
