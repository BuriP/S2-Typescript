import { FRBC_FillLevelTargetProfile } from "src/messages/generated";
import { FRBC_FillLevelTargetProfileElement } from "@schemas";
export declare class FrbcFillLevelTargetProfile implements FRBC_FillLevelTargetProfile {
    message_type: "FRBC.FillLevelTargetProfile";
    message_id: string;
    start_time: string;
    elements: [FRBC_FillLevelTargetProfileElement, ...FRBC_FillLevelTargetProfileElement[]];
    constructor(message_id: string, start_time: string, elements: [FRBC_FillLevelTargetProfileElement, ...FRBC_FillLevelTargetProfileElement[]]);
}
