"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
const PowerForecastValue_1 = require("./common/PowerForecastValue");
const PowerRange_1 = require("./common/PowerRange");
function init() {
    const power = new PowerRange_1.PowerRange(10, 10, 'ELECTRIC.POWER.L1');
    const forecast = new PowerForecastValue_1.PowerForecastValue(10, 'ELECTRIC.POWER.L1');
    console.log('Hi from S2 typescript app');
    console.log(power);
    console.log(forecast);
}
exports.init = init;
