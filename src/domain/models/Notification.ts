import { NotificationType } from "src/domain/value_objects/NotificationType";

import { IsUUID, IsDate, IsEnum } from "class-validator";
import { v4 as uuidv4 } from 'uuid';

export class Notification {
    @IsUUID("4")
    public uuid: string;

    @IsUUID()
    public user_uuid: string;

    @IsDate()
    public sendDate: Date;
    
    @IsEnum(NotificationType)
    public type: NotificationType;

    @IsUUID()
    public contact_uuid?: string;

    constructor(user_uuid: string, sendDate: Date, type: NotificationType, contact_uuid?: string) {
        this.uuid = uuidv4();
        this.user_uuid = user_uuid;
        this.sendDate = sendDate;
        this.type = type;
        this.contact_uuid = contact_uuid;
    }
}