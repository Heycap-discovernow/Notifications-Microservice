import { NotificationType } from "src/domain/value_objects/NotificationType";
import { SentAt } from "src/domain/value_objects/SendedAt";
export declare class Notification {
    uuid: string;
    contact_uuid: string;
    send_date: Date;
    sent_at: SentAt;
    type: NotificationType;
    constructor(contact_uuid: string, sendDate: Date, sendedAt: SentAt, type: NotificationType);
}
