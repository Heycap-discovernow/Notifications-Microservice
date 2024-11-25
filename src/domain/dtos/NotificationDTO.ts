import { NotificationType } from "src/domain/value_objects/NotificationType";
import { SentAt } from "src/domain/value_objects/SendedAt";

export class NotificationDTO {
    constructor(
        public uuid: string,
        public contact_uuid: string,
        public send_date: Date,
        public sent_at: SentAt,
        public type: NotificationType,
    ){}
}