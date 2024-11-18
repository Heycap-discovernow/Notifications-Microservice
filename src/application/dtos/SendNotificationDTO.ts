export class SendNotificationDTO {
    public static buldNotification: () => void;
    constructor(
        public build: typeof SendNotificationDTO.buldNotification,
        public contact_uuid: string,
        public type: string,
        public notificationType: string,
    ) {}
}