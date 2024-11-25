export declare class SendNotificationDTO {
    build: typeof SendNotificationDTO.buldNotification;
    contact_uuid: string;
    type: string;
    notificationType: string;
    static buldNotification: () => void;
    constructor(build: typeof SendNotificationDTO.buldNotification, contact_uuid: string, type: string, notificationType: string);
}
