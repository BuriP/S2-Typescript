"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var s2_typescript_1 = require("s2-typescript");
var s2_typescript_2 = require("s2-typescript");
var s2_typescript_3 = require("s2-typescript");
var s2_typescript_4 = require("s2-typescript");
var wait_1 = require("./helpers/wait");
var response = null;
var parseResponse = function (message) {
    try {
        response = (0, s2_typescript_4.parseMessage)(message);
    }
    catch (e) {
        console.log("ERRRRRROR");
        console.log(e);
    }
};
(0, s2_typescript_1.init)();
var ws = new s2_typescript_2.WebSocketServerController(8000, parseResponse.bind(this));
var hs = new s2_typescript_3.Handshake({ message_id: "1", role: "RM" });
var nr = new s2_typescript_1.NumberRange({ start_of_range: 0, end_of_range: 100 });
console.log(hs);
console.log(nr);
var powerJson = JSON.stringify(hs, null, 2);
var numberJson = JSON.stringify(nr, null, 2);
console.log(powerJson);
console.log(numberJson);
(0, wait_1.wait)(10).then(function () {
    ws.BroadcastMessage(powerJson);
    ws.BroadcastMessage(numberJson);
    (0, wait_1.wait)(5).then(function () {
        console.log(response);
    });
});
