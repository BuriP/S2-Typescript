"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wait = void 0;
function wait(seconds) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve();
        }, seconds * 1000); // Convert seconds to milliseconds
    });
}
exports.wait = wait;
