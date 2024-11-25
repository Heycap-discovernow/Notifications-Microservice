import { NotificationType } from "src/domain/value_objects/NotificationType";
import { SentAt } from "src/domain/value_objects/SendedAt";
export declare class NotificationDTO {
    uuid: string;
    contact_uuid: string;
    send_date: Date;
    sent_at: SentAt;
    type: NotificationType;
    constructor(uuid: string, contact_uuid: string, send_date: Date, sent_at: SentAt, type: NotificationType);
}
