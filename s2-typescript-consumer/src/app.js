"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var s2_typescript_1 = require("s2-typescript");
var s2_typescript_2 = require("s2-typescript");
function wait(seconds) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve();
        }, seconds * 1000); // Convert seconds to milliseconds
    });
}
(0, s2_typescript_1.init)();
var ws = new s2_typescript_2.WebSocketServerController(8000);
ws.AddMessageOnConection("Un cliente se ha conectado");
var hs = new s2_typescript_1.Handshake("Server", 'CEM');
var powerJson = JSON.stringify(hs, null, 2);
wait(10).then(function () {
    ws.BroadcastMessage(powerJson);
});
