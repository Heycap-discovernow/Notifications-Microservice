import { NotificationType } from "src/domain/value_objects/NotificationType";

export class NotificationDTO {
    constructor(
        public uuid: string,
        public user_uuid: string,
        public sendDate: Date,
        public type: NotificationType,
        public contact_uuid?: string,
    ){}
}