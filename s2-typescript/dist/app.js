"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
const index_1 = require("./index");
function init() {
    console.log('Hi from S2 typescript app');
    // const power = new PowerRange(1, 2, 'ELECTRIC.POWER.L1');
    // console.log(power);
    const hs = new index_1.Handshake('1', 'CEM', ['1.0.0']);
    console.log(hs);
}
exports.init = init;
