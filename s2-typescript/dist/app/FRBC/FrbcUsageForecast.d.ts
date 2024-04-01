import { FRBC_UsageForecast } from "src/messages/generated";
import { FRBC_UsageForecastElement } from "src/messages/generated/FRBC.UsageForecast";
import { ID } from "@schemas";
export declare class FrbcUsageForecast implements FRBC_UsageForecast {
    message_type: "FRBC.UsageForecast";
    message_id: ID;
    start_time: string;
    elements: [FRBC_UsageForecastElement, ...FRBC_UsageForecastElement[]];
    constructor(message_id: ID, start_time: string, elements: [FRBC_UsageForecastElement, ...FRBC_UsageForecastElement[]]);
}
