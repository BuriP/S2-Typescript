"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var s2_typescript_1 = require("s2-typescript");
var wsClient = new s2_typescript_1.WebSocketClientController('ws://localhost:8000');
function wait(seconds) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve();
        }, seconds * 1000); // Convert seconds to milliseconds
    });
}
wait(5).then(function () {
    wsClient.SendMessage("Cliente enviando mensaje");
});
