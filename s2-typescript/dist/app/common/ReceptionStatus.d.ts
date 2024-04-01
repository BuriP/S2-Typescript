import { ReceptionStatus as GenReceptionStatus } from "src/messages/generated";
import { ReceptionStatusValues } from "src/messages/generated/ReceptionStatus";
export declare class ReceptionStatus implements GenReceptionStatus {
    message_type: "ReceptionStatus";
    subject_message_id: string;
    status: ReceptionStatusValues;
    diagnostic_label?: string;
    constructor(subject_message_id: string, status: ReceptionStatusValues, diagnostic_label?: string);
}
