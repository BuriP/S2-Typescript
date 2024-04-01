import { PowerForecast as GenPowerForecast } from "src/messages/generated";
import { PowerForecastElement } from "src/messages/generated/PowerForecast";
export declare class PowerForecast implements GenPowerForecast {
    message_type: "PowerForecast";
    message_id: string;
    start_time: string;
    elements: [PowerForecastElement, ...PowerForecastElement[]];
    constructor(message_id: string, start_time: string, elements: [PowerForecastElement, ...PowerForecastElement[]]);
}
