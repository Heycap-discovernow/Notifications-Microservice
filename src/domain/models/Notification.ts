import { NotificationType } from "src/domain/value_objects/NotificationType";
import { SentAt } from "src/domain/value_objects/SendedAt";

import { IsUUID, IsDate, IsEnum } from "class-validator";
import { v4 as uuidv4 } from 'uuid';

export class Notification {
    @IsUUID("4")
    public uuid: string;

    @IsUUID()
    public contact_uuid: string;

    @IsDate()
    public send_date: Date;
    
    @IsEnum(SentAt)
    public sent_at: SentAt;

    @IsEnum(NotificationType)
    public type: NotificationType;

    constructor(contact_uuid: string, sendDate: Date, sendedAt: SentAt, type: NotificationType) {
        this.uuid = uuidv4();
        this.contact_uuid = contact_uuid;
        this.send_date = sendDate;
        this.sent_at = sendedAt;
        this.type = type;
    }
}